"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6205],{3264:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/08/19/apisix-casbin-authorization","metadata":{"permalink":"/es/blog/2021/08/19/apisix-casbin-authorization","editUrl":"https://github.com/casbin/casbin-website-v2/edit/master/i18n/es/docusaurus-plugin-content-blog/2021-08-19-apisix-casbin-authorization.md","source":"@site/i18n/es/docusaurus-plugin-content-blog/2021-08-19-apisix-casbin-authorization.md","title":"Autorizaci\xf3n en APISIX usando Casbin","description":"Introducci\xf3n","date":"2021-08-19T00:00:00.000Z","formattedDate":"19 de agosto de 2021","tags":[],"readingTime":5.84,"hasTruncateMarker":false,"authors":[{"name":"Rushikesh Tote","title":"Miembro de Casbin","url":"http://github.com/rushitote","imageURL":"https://avatars.githubusercontent.com/rushitote"}],"frontMatter":{"title":"Autorizaci\xf3n en APISIX usando Casbin","author":"Rushikesh Tote","authorTitle":"Miembro de Casbin","authorURL":"http://github.com/rushitote","authorImageURL":"https://avatars.githubusercontent.com/rushitote"},"nextItem":{"title":"Yang Luo - Ganador del Premio Google Open Source Peer Bonus","permalink":"/es/blog/2020/04/21/google-award"}},"content":"## Introducci\xf3n\\n\\n[APISIX](https://apisix.apache.org/) es una puerta de enlace API nativa de la nube de alto rendimiento y escalable basada en Nginx y etcd. Es un proyecto de c\xf3digo abierto de la Apache Software Foundation. Adem\xe1s, lo que hace que APISIX sea tan bueno es el soporte de muchos excelentes complementos integrados que se podr\xedan usar para implementar caracter\xedsticas como autenticaci\xf3n, monitoreo, enrutamiento, etc. Y el hecho de que los complementos en APISIX se recargan en caliente (sin reinicios) lo hace muy din\xe1mico.\\n\\nPero al usar APISIX, puede haber escenarios en los que desees agregar l\xf3gica de autorizaci\xf3n compleja en tu aplicaci\xf3n. Aqu\xed es donde authz-casbin podr\xeda ayudarte, authz-casbin es un complemento de APISIX basado en [Lua Casbin](https://github.com/casbin/lua-casbin/) que permite una autorizaci\xf3n poderosa basada en varios modelos de control de acceso. [Casbin](/) es una biblioteca de autorizaci\xf3n que soporta modelos de control de acceso como ACL, RBAC, ABAC. Originalmente escrito en Go, ha sido portado a muchos idiomas y Lua Casbin es la implementaci\xf3n en Lua de Casbin. El desarrollo de authz-casbin comenz\xf3 cuando propusimos un nuevo complemento para la autorizaci\xf3n en el repositorio de APISIX ([#4674](https://github.com/apache/apisix/issues/4674)) al cual los miembros principales estuvieron de acuerdo. Y despu\xe9s de las \xfatiles revisiones que llevaron a algunos cambios importantes y mejoras, el PR ([#4710](https://github.com/apache/apisix/pull/4710)) finalmente se fusion\xf3.\\n\\nEn este blog, usaremos el complemento authz-casbin para mostrar c\xf3mo puedes implementar un modelo de autorizaci\xf3n basado en el Control de Acceso Basado en Roles (RBAC) en APISIX.\\n\\n**NOTA**: Necesitar\xe1s usar alg\xfan otro complemento o flujo de trabajo personalizado para autenticar al usuario, ya que Casbin solo har\xe1 autorizaci\xf3n y no autenticaci\xf3n.\\n\\n## Creando un modelo\\n\\nEl complemento utiliza tres par\xe1metros para autorizar cualquier solicitud: sujeto, objeto y acci\xf3n. Aqu\xed, sujeto es el valor del encabezado de nombre de usuario, que podr\xeda ser algo como `[username: alice]`. Luego, el objeto es la ruta URL que se est\xe1 accediendo y la acci\xf3n es el m\xe9todo de solicitud que se est\xe1 utilizando.\\n\\nDigamos que queremos crear un modelo con tres recursos en las rutas - `/`, `/res1` y `/res2`. Y queremos tener un modelo as\xed:\\n\\n![imagen](/img/blog/model.png)\\n\\nEsto significar\xeda que todos los usuarios (`*`) como por ejemplo `jack` pueden acceder a la p\xe1gina de inicio (`/`). Y los usuarios con permisos de `admin` como `alice` y `bob` pueden acceder a todas las p\xe1ginas y recursos (como `res1` y `res2`). Adem\xe1s, restrinjamos a los usuarios sin ning\xfan permiso de administrador a usar solo el m\xe9todo de solicitud `GET`. Para este escenario, podr\xedamos definir el modelo como:\\n\\n```ini\\n[request_definition]\\nr = sub, obj, act\\n\\n[policy_definition]\\np = sub, obj, act\\n\\n[role_definition]\\ng = _, _\\n\\n[policy_effect]\\ne = some(where (p.eft == allow))\\n\\n[matchers]\\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\\n```\\n\\n## Creando una pol\xedtica\\n\\nDel escenario anterior, la pol\xedtica ser\xeda:\\n\\n```csv\\np, *, /, GET\\np, admin, *, *\\ng, alice, admin\\ng, bob, admin\\n```\\n\\nEl comparador del modelo significa:\\n\\n1. `(g(r.sub, p.sub) || keyMatch(r.sub, p.sub))`: O bien el sujeto de la solicitud tiene un rol como el sujeto de la pol\xedtica o el sujeto de la solicitud coincide con el sujeto de la pol\xedtica en `keyMatch`. `keyMatch` es una funci\xf3n integrada en Lua Casbin, puedes echar un vistazo a la descripci\xf3n de la funci\xf3n y m\xe1s funciones que podr\xedan ser \xfatiles [aqu\xed](https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua).\\n2. `keyMatch(r.obj, p.obj)`: El objeto de la solicitud coincide con el objeto de la pol\xedtica (ruta URL aqu\xed).\\n3. `keyMatch(r.act, p.act)`: La acci\xf3n de la solicitud coincide con la acci\xf3n de la pol\xedtica (m\xe9todo de solicitud HTTP aqu\xed).\\n\\n## Habilitando el complemento en la ruta\\n\\nUna vez que hayas creado el modelo y la pol\xedtica, puedes habilitarlo en una ruta utilizando la API de administraci\xf3n de APISIX. Para habilitarlo usando rutas de archivos de modelo y pol\xedtica:\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"model_path\\": \\"/path/to/model.conf\\",\\n            \\"policy_path\\": \\"/path/to/policy.csv\\",\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"upstream\\": {\\n        \\"nodes\\": {\\n            \\"127.0.0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/*\\"\\n}\'\\n```\\n\\nAqu\xed, el campo de nombre de usuario es el nombre del encabezado que usar\xe1s para pasar el sujeto. Por ejemplo, si pasar\xe1s el encabezado de nombre de usuario como `user: alice`, usar\xedas `\\"username\\": \\"user\\"`.\\n\\nPara usar texto de modelo/pol\xedtica en lugar de archivos, puedes usar los campos `model` y `policy` en su lugar:\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"model\\": \\"[request_definition]\\n            r = sub, obj, act\\n\\n            [policy_definition]\\n            p = sub, obj, act\\n\\n            [role_definition]\\n            g = _, _\\n\\n            [policy_effect]\\n            e = some(where (p.eft == allow))\\n\\n            [matchers]\\n            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\\",\\n\\n            \\"policy\\": \\"p, *, /, GET\\n            p, admin, *, *\\n            g, alice, admin\\n            g, bob, admin\\",\\n\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"upstream\\": {\\n        \\"nodes\\": {\\n            \\"127.0.0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/*\\"\\n}\'\\n```\\n\\n## Habilitando el complemento usando un modelo/pol\xedtica global\\n\\nPuede haber situaciones en las que desees usar una \xfanica configuraci\xf3n de modelo y pol\xedtica en m\xfaltiples rutas. Puedes hacerlo primero enviando una solicitud `PUT` para agregar la configuraci\xf3n de modelo y pol\xedtica a los metadatos del complemento por:\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\\n{\\n\\"model\\": \\"[request_definition]\\nr = sub, obj, act\\n\\n[policy_definition]\\np = sub, obj, act\\n\\n[role_definition]\\ng = _, _\\n\\n[policy_effect]\\ne = some(where (p.eft == allow))\\n\\n[matchers]\\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\\",\\n\\n\\"policy\\": \\"p, *, /, GET\\np, admin, *, *\\ng, alice, admin\\ng, bob, admin\\"\\n}\'\\n```\\n\\nY luego para habilitar la misma configuraci\xf3n en alguna ruta, env\xeda una solicitud usando la API de administraci\xf3n:\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"upstream\\": {\\n        \\"nodes\\": {\\n            \\"127.0.0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/route1/*\\"\\n}\'\\n```\\n\\nEsto agregar\xe1 la configuraci\xf3n de metadatos del complemento a la ruta. Tambi\xe9n puedes actualizar f\xe1cilmente la configuraci\xf3n de metadatos del complemento reenviando la solicitud a los metadatos del complemento con la configuraci\xf3n de modelo y pol\xedtica actualizada, el complemento actualizar\xe1 autom\xe1ticamente todas las rutas que usan la configuraci\xf3n de metadatos del complemento.\\n\\n## Casos de uso\\n\\n- El caso de uso principal de este complemento ser\xeda en la implementaci\xf3n de autorizaci\xf3n en tus API. Puedes agregar f\xe1cilmente este complemento en cualquier ruta de API que est\xe9s utilizando con tu modelo de autorizaci\xf3n y configuraci\xf3n de pol\xedtica.\\n- Si deseas tener un \xfanico modelo de autorizaci\xf3n para todas tus API, puedes usar el m\xe9todo de modelo/pol\xedtica global. Esto facilita la actualizaci\xf3n de la pol\xedtica para todas las rutas, ya que solo necesitas actualizar los metadatos en etcd.\\n- Mientras que si te gustar\xeda usar un modelo diferente para cada ruta diferente, puedes usar el m\xe9todo de ruta. Esto es \xfatil cuando diferentes rutas de la API tienen diferentes conjuntos de permisos de usuario. Tambi\xe9n puedes usar esto cuando est\xe1s tratando con pol\xedticas m\xe1s grandes, ya que har\xe1 que la autorizaci\xf3n sea m\xe1s r\xe1pida cuando se filtre en m\xfaltiples rutas."},{"id":"/2020/04/21/google-award","metadata":{"permalink":"/es/blog/2020/04/21/google-award","editUrl":"https://github.com/casbin/casbin-website-v2/edit/master/i18n/es/docusaurus-plugin-content-blog/2020-04-21-google-award.md","source":"@site/i18n/es/docusaurus-plugin-content-blog/2020-04-21-google-award.md","title":"Yang Luo - Ganador del Premio Google Open Source Peer Bonus","description":"Hoy, nos complace anunciar que el fundador de Casbin, Yang Luo ha sido galardonado con el premio \\"Ganadores del Google Open Source Peer Bonus\\" por su trabajo en Casbin, Npcap y Nmap en el tercer trimestre de 2019.","date":"2020-04-21T00:00:00.000Z","formattedDate":"21 de abril de 2020","tags":[],"readingTime":0.845,"hasTruncateMarker":false,"authors":[{"name":"Casbin","title":"Cuenta Oficial","url":"http://github.com/casbin","imageURL":"https://avatars.githubusercontent.com/casbin"}],"frontMatter":{"title":"Yang Luo - Ganador del Premio Google Open Source Peer Bonus","author":"Casbin","authorTitle":"Cuenta Oficial","authorURL":"http://github.com/casbin","authorImageURL":"https://avatars.githubusercontent.com/casbin"},"prevItem":{"title":"Autorizaci\xf3n en APISIX usando Casbin","permalink":"/es/blog/2021/08/19/apisix-casbin-authorization"},"nextItem":{"title":"Reestructuraci\xf3n de nuestra Documentaci\xf3n","permalink":"/es/blog/2018/09/23/new-website"}},"content":"Hoy, nos complace anunciar que el fundador de Casbin, [Yang Luo](https://github.com/hsluoyz) ha sido galardonado con el premio \\"Ganadores del Google Open Source Peer Bonus\\" por su trabajo en [Casbin](/), [Npcap](https://nmap.org/npcap/) y [Nmap](https://nmap.org/) en el tercer trimestre de 2019.\\n\\n![ospb](https://hsluoyz.github.io/download/Open%20Source%20Peer%20Bonus%20Q3%202019%20-%20Yang%20Luo%20-%20OSPB%20Award%20Letter.png)\\n\\n> La carta original del premio se puede acceder [aqu\xed](https://github.com/hsluoyz/hsluoyz.github.io/blob/master/download/Open%20Source%20Peer%20Bonus%20Q3%202019%20-%20Yang%20Luo%20-%20OSPB%20Award%20Letter.pdf).\\n\\nEl programa [Google Open Source Peer Bonus](https://opensource.google.com/docs/growing/peer-bonus/) se describe como:\\n\\n> _De la misma manera que un Google Peer Bonus se utiliza para reconocer a un compa\xf1ero de Google que ha ido m\xe1s all\xe1, un Open Source Peer Bonus reconoce a personas externas que han hecho contribuciones excepcionales al c\xf3digo abierto._\\n\\nEl [anuncio de los ganadores de 2019](https://opensource.googleblog.com/2020/01/announcing-2019-second-cycle-google.html) est\xe1 disponible en:\\n\\n> https://opensource.googleblog.com/2020/01/announcing-2019-second-cycle-google.html\\n\\nYang y Casbin est\xe1n listados entre los desarrolladores y proyectos de c\xf3digo abierto que han tenido un impacto relevante, como Git, TensorFlow, V8, CPython, LLVM, proyectos Apache, Angular o Jenkins.\\n\\n\xa1Estamos contentos de ver a Casbin reconocido de esta manera por su contribuci\xf3n al c\xf3digo abierto y la seguridad en la nube!\\n\\n_\xa1Gracias por volar con Casbin!_"},{"id":"/2018/09/23/new-website","metadata":{"permalink":"/es/blog/2018/09/23/new-website","editUrl":"https://github.com/casbin/casbin-website-v2/edit/master/i18n/es/docusaurus-plugin-content-blog/2018-09-23-new-website.md","source":"@site/i18n/es/docusaurus-plugin-content-blog/2018-09-23-new-website.md","title":"Reestructuraci\xf3n de nuestra Documentaci\xf3n","description":"Hoy, hemos migrado la documentaci\xf3n de Casbin desde GitHub Wiki a Docs de este sitio web, que est\xe1 potenciado por Docusaurus. Docusaurus ofrece muchas caracter\xedsticas impresionantes como mejores estilos de Markdown, b\xfasqueda de texto completo, versionado, traducci\xf3n.","date":"2018-09-23T00:00:00.000Z","formattedDate":"23 de septiembre de 2018","tags":[],"readingTime":0.31,"hasTruncateMarker":false,"authors":[{"name":"Yang Luo","title":"Creador de Casbin","url":"http://github.com/hsluoyz","imageURL":"https://avatars.githubusercontent.com/hsluoyz"}],"frontMatter":{"title":"Reestructuraci\xf3n de nuestra Documentaci\xf3n","author":"Yang Luo","authorTitle":"Creador de Casbin","authorURL":"http://github.com/hsluoyz","authorImageURL":"https://avatars.githubusercontent.com/hsluoyz"},"prevItem":{"title":"Yang Luo - Ganador del Premio Google Open Source Peer Bonus","permalink":"/es/blog/2020/04/21/google-award"},"nextItem":{"title":"node-Casbin: Nuevo miembro de la familia Casbin","permalink":"/es/blog/2018/08/27/node-casbin"}},"content":"Hoy, hemos migrado la documentaci\xf3n de Casbin desde GitHub Wiki a `Docs` de este sitio web, que est\xe1 potenciado por Docusaurus. Docusaurus ofrece muchas caracter\xedsticas impresionantes como mejores estilos de Markdown, b\xfasqueda de texto completo, versionado, traducci\xf3n.\\n\\nLa documentaci\xf3n a\xfan no es perfecta y todav\xeda necesita ajustes. El c\xf3digo fuente est\xe1 alojado en GitHub: https://github.com/casbin/casbin-website-v2 .\\n\\n\xa1Cualquier contribuci\xf3n o sugerencia es bienvenida!"},{"id":"/2018/08/27/node-casbin","metadata":{"permalink":"/es/blog/2018/08/27/node-casbin","editUrl":"https://github.com/casbin/casbin-website-v2/edit/master/i18n/es/docusaurus-plugin-content-blog/2018-08-27-node-casbin.md","source":"@site/i18n/es/docusaurus-plugin-content-blog/2018-08-27-node-casbin.md","title":"node-Casbin: Nuevo miembro de la familia Casbin","description":"Hoy, hemos portado con \xe9xito Casbin a Node.js, el cual se denomina: node-Casbin.","date":"2018-08-27T00:00:00.000Z","formattedDate":"27 de agosto de 2018","tags":[],"readingTime":0.275,"hasTruncateMarker":false,"authors":[{"name":"Zixuan Liu","title":"Mantenedor de Casbin","url":"http://github.com/nodece","imageURL":"https://avatars.githubusercontent.com/nodece"}],"frontMatter":{"title":"node-Casbin: Nuevo miembro de la familia Casbin","author":"Zixuan Liu","authorTitle":"Mantenedor de Casbin","authorURL":"http://github.com/nodece","authorImageURL":"https://avatars.githubusercontent.com/nodece"},"prevItem":{"title":"Reestructuraci\xf3n de nuestra Documentaci\xf3n","permalink":"/es/blog/2018/09/23/new-website"},"nextItem":{"title":"\xa1Se ha lanzado Casbin Server!","permalink":"/es/blog/2018/08/07/launching-casbin-server"}},"content":"Hoy, hemos portado con \xe9xito Casbin a Node.js, el cual se denomina: [node-Casbin](https://github.com/casbin/node-casbin).\\n\\n**node-Casbin** comparte un uso y API similares con otras implementaciones de Casbin. Los middlewares para Express, Koa2 y Egg.js est\xe1n listos para usar. El adaptador de almacenamiento para Sequelize tambi\xe9n est\xe1 preparado.\\n\\nEsperamos que pueda satisfacer bien tus necesidades :)\\n\\nGitHub: https://github.com/casbin/node-casbin"},{"id":"/2018/08/07/launching-casbin-server","metadata":{"permalink":"/es/blog/2018/08/07/launching-casbin-server","editUrl":"https://github.com/casbin/casbin-website-v2/edit/master/i18n/es/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md","source":"@site/i18n/es/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md","title":"\xa1Se ha lanzado Casbin Server!","description":"Algunos de nuestros clientes preguntan si Casbin se puede utilizar como un servicio en lugar de una biblioteca. La respuesta es S\xcd. Hoy, hemos lanzado el proyecto Casbin Server como una soluci\xf3n concreta para Control de Acceso como Servicio.","date":"2018-08-07T00:00:00.000Z","formattedDate":"7 de agosto de 2018","tags":[],"readingTime":0.74,"hasTruncateMarker":false,"authors":[{"name":"Helong Zhang","title":"Mantenedor de Casbin","url":"http://github.com/BetaCat0","imageURL":"https://avatars.githubusercontent.com/BetaCat0"}],"frontMatter":{"title":"\xa1Se ha lanzado Casbin Server!","author":"Helong Zhang","authorTitle":"Mantenedor de Casbin","authorURL":"http://github.com/BetaCat0","authorImageURL":"https://avatars.githubusercontent.com/BetaCat0"},"prevItem":{"title":"node-Casbin: Nuevo miembro de la familia Casbin","permalink":"/es/blog/2018/08/27/node-casbin"}},"content":"Algunos de nuestros clientes preguntan si Casbin se puede utilizar como un servicio en lugar de una biblioteca. La respuesta es **S\xcd**. Hoy, hemos lanzado el proyecto [Casbin Server](https://github.com/casbin/casbin-server) como una soluci\xf3n concreta para **Control de Acceso como Servicio**.\\n\\n**Casbin Server** est\xe1 en desarrollo activo por nuestro equipo principal. Tiene varias caracter\xedsticas:\\n\\n- Desarrollado puramente en Golang.\\n- Puede manejar miles de instancias de Casbin, as\xed que puedes mover la l\xf3gica de aplicaci\xf3n de pol\xedticas de m\xfaltiples servicios a un solo Casbin Server.\\n- **gRPC** se utiliza para comunicarse con Casbin Server. Tambi\xe9n consideramos agregar soporte **RESTful** en un futuro cercano.\\n- Se proporciona un portal de administraci\xf3n web amigable para administradores no desarrolladores para gestionar todos los detalles como instancias de Casbin, modelos, almacenamiento de pol\xedticas y balanceo de carga.\\n\\n\\n\\nEl c\xf3digo fuente est\xe1 alojado en GitHub: https://github.com/casbin/casbin-server\\n\\nCualquier problema o solicitud de extracci\xf3n es bienvenido :)"}]}')}}]);