"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"N\xe4chste","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Die Grundlagen","items":[{"type":"link","label":"\xdcbersicht","href":"/de/docs/overview","docId":"overview"},{"type":"link","label":"Los geht\'s","href":"/de/docs/get-started","docId":"get-started"},{"type":"link","label":"So funktioniert es","href":"/de/docs/how-it-works","docId":"how-it-works"},{"type":"link","label":"Anleitungen","href":"/de/docs/tutorials","docId":"tutorials"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Modell","items":[{"type":"link","label":"Unterst\xfctzte Modelle","href":"/de/docs/supported-models","docId":"supported-models"},{"type":"link","label":"Syntax f\xfcr Modelle","href":"/de/docs/syntax-for-models","docId":"syntax-for-models"},{"type":"link","label":"Effektor","href":"/de/docs/effector","docId":"effector"},{"type":"link","label":"Funktion","href":"/de/docs/function","docId":"function"},{"type":"link","label":"RBAC","href":"/de/docs/rbac","docId":"rbac"},{"type":"link","label":"RBAC mit Muster","href":"/de/docs/rbac-with-pattern","docId":"rbac-with-pattern"},{"type":"link","label":"RBAC mit Dom\xe4nen","href":"/de/docs/rbac-with-domains","docId":"rbac-with-domains"},{"type":"link","label":"Casbin RBAC vs. RBAC96","href":"/de/docs/rbac-96","docId":"rbac-96"},{"type":"link","label":"ABAC","href":"/de/docs/abac","docId":"abac"},{"type":"link","label":"Priorit\xe4tsmodell","href":"/de/docs/priority-model","docId":"priority-model"},{"type":"link","label":"Super-Admin","href":"/de/docs/superadmin","docId":"superadmin"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Speicher","items":[{"type":"link","label":"Modellspeicher","href":"/de/docs/model-storage","docId":"model-storage"},{"type":"link","label":"Richtlinien-Speicher","href":"/de/docs/policy-storage","docId":"policy-storage"},{"type":"link","label":"Richtlinien-Untermengenladen","href":"/de/docs/policy-subset-loading","docId":"policy-subset-loading"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Erweiterungen","items":[{"type":"link","label":"Enforcers","href":"/de/docs/enforcers","docId":"enforcers"},{"type":"link","label":"Adapter","href":"/de/docs/adapters","docId":"adapters"},{"type":"link","label":"Beobachter","href":"/de/docs/watchers","docId":"watchers"},{"type":"link","label":"Dispatcher","href":"/de/docs/dispatchers","docId":"dispatchers"},{"type":"link","label":"Rollen-Manager","href":"/de/docs/role-managers","docId":"role-managers"},{"type":"link","label":"Middleware","href":"/de/docs/middlewares","docId":"middlewares"},{"type":"link","label":"GraphQL Middlewares","href":"/de/docs/graphql-middlewares","docId":"graphql-middlewares"},{"type":"link","label":"Cloud Native Middlewares","href":"/de/docs/cloud-native","docId":"cloud-native"}],"collapsed":false,"collapsible":true},{"type":"category","label":"API","items":[{"type":"link","label":"API-\xdcbersicht","href":"/de/docs/api-overview","docId":"api-overview"},{"type":"link","label":"Management-API","href":"/de/docs/management-api","docId":"management-api"},{"type":"link","label":"RBAC API","href":"/de/docs/rbac-api","docId":"rbac-api"},{"type":"link","label":"RBAC mit Domains API","href":"/de/docs/rbac-with-domains-api","docId":"rbac-with-domains-api"},{"type":"link","label":"Rollen-Manager-API","href":"/de/docs/rolemanager-api","docId":"rolemanager-api"},{"type":"link","label":"Datenberechtigungen","href":"/de/docs/data-permissions","docId":"data-permissions"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Erweiterte Nutzung","items":[{"type":"link","label":"Mehrfachfachen","href":"/de/docs/multi-threading","docId":"multi-threading"},{"type":"link","label":"Benchmarks","href":"/de/docs/benchmark","docId":"benchmark"},{"type":"link","label":"Leistungsoptimierung","href":"/de/docs/performance","docId":"performance"},{"type":"link","label":"Autorisierung von Kubernetes","href":"/de/docs/k8s","docId":"k8s"},{"type":"link","label":"Genehmigung des Service-Mesh durch den Gesandten","href":"/de/docs/envoy","docId":"envoy"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Management","items":[{"type":"link","label":"Admin-Portal","href":"/de/docs/admin-portal","docId":"admin-portal"},{"type":"link","label":"Kasbin-Dienst","href":"/de/docs/service","docId":"service"},{"type":"link","label":"Log- & Fehlerbehandlung","href":"/de/docs/log-error","docId":"log-error"},{"type":"link","label":"Frontend-Nutzung","href":"/de/docs/frontend","docId":"frontend"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Redakteur","items":[{"type":"link","label":"Online-Editor","href":"/de/docs/online-editor","docId":"online-editor"},{"type":"link","label":"IDE-Plugins","href":"/de/docs/ide-plugins","docId":"ide-plugins"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Mehr","items":[{"type":"link","label":"Unsere Adopter","href":"/de/docs/adopters","docId":"adopters"},{"type":"link","label":"Mitwirken","href":"/de/docs/contributing","docId":"contributing"},{"type":"link","label":"Datenschutzerkl\xe4rung","href":"/de/docs/privacy-policy","docId":"privacy-policy"},{"type":"link","label":"Nutzungsbedingungen","href":"/de/docs/terms-of-service","docId":"terms-of-service"}],"collapsed":false,"collapsible":true}]},"docs":{"abac":{"id":"abac","title":"ABAC","description":"Was ist eigentlich das ABAC-Modell?","sidebar":"docs"},"adapters":{"id":"adapters","title":"Adapter","description":"In Casbin wird die Speicherung der Richtlinien als Adapter implementiert (auch Middleware f\xfcr Casbin). Ein Casbin-Benutzer kann einen Adapter verwenden, um Regeln von einem Speicher zu laden (aka LoadPolicy()), oder speichern Sie Richtlinien-Regeln (aka SavePolicy()). Um das Gewicht gering zu halten, legen wir den Adaptercode nicht in die Hauptbibliothek ein.","sidebar":"docs"},"admin-portal":{"id":"admin-portal","title":"Admin-Portal","description":"Wir bieten ein -basiertes Portal namens Casdoor f\xfcr Model-Management und Richtlinien-Management:","sidebar":"docs"},"adopters":{"id":"adopters","title":"Unsere Adopter","description":"Direkte Integration","sidebar":"docs"},"api-overview":{"id":"api-overview","title":"API-\xdcbersicht","description":"Diese \xdcbersicht zeigt Ihnen nur, wie Sie Casbin APIs verwenden und erkl\xe4rt nicht, wie Casbin installiert wird und wie es funktioniert. Diese Tutorials finden Sie hier: Installation von Casbin und wie Casbin funktioniert. Wenn Sie also anfangen, dieses Tutorial zu lesen, gehen wir davon aus, dass Sie Casbin vollst\xe4ndig installiert und in Ihren Code importiert haben.","sidebar":"docs"},"benchmark":{"id":"benchmark","title":"Benchmarks","description":"Der Overhead der Durchsetzung der Richtlinien ist in modelbtest.go verrechnet. Das Testbed ist:","sidebar":"docs"},"cloud-native":{"id":"cloud-native","title":"Cloud Native Middlewares","description":"Cloud Native Projekte","sidebar":"docs"},"contributing":{"id":"contributing","title":"Mitwirken","description":"Casbin ist eine m\xe4chtige Autorisierungsbibliothek unterst\xfctzt Zugriffskontrollmodelle mit vielen Sprachimplementierungen, so lange Sie gut in einer Sprache sind, k\xf6nnen Sie an der Entwicklung von Casbin teilnehmen. Neue Beitragszahler sind immer willkommen.","sidebar":"docs"},"data-permissions":{"id":"data-permissions","title":"Datenberechtigungen","description":"Wir haben zwei L\xf6sungen f\xfcr Datenberechtigungen (Filtern). Verwendung impliziter Zuweisungs-APIs. Oder benutzen Sie einfach die BatchEnforce() API.","sidebar":"docs"},"dispatchers":{"id":"dispatchers","title":"Dispatcher","description":"Dispatcher bietet eine M\xf6glichkeit, schrittweise \xc4nderungen der Politik zu synchronisieren. Es sollte auf Konsistenzalgorithmen wie Flo\xdf basieren, um die Konsistenz aller Durchsetzungsinstanzen zu gew\xe4hrleisten. Durch Dispatcher k\xf6nnen Anwender leicht verteilte Cluster aufbauen.","sidebar":"docs"},"effector":{"id":"effector","title":"Effektor","description":"Der Effekt ist das Ergebnis einer politischen Regel. Und der Effector ist die Schnittstelle f\xfcr Casbin Effekte.","sidebar":"docs"},"enforcers":{"id":"enforcers","title":"Enforcers","description":"Enforcer ist die Hauptstruktur in Casbin. Es fungiert als Schnittstelle f\xfcr Benutzer, um Operationen an Richtlinien-Regeln und -modellen durchzuf\xfchren.","sidebar":"docs"},"envoy":{"id":"envoy","title":"Genehmigung des Service-Mesh durch den Gesandten","description":"Envoy-authz ist eine Middleware von Envoy, die externe RBAC & ABAC-Autorisierung durch Kasbin durchf\xfchrt. Diese Middleware verwendet die externe Autorisierungs-API des Envoy \xfcber einen gRPC-Server. Dieser Proxy w\xfcrde in jeder Art von Gesandtennetzen wie Istio eingesetzt werden.","sidebar":"docs"},"frontend":{"id":"frontend","title":"Frontend-Nutzung","description":"Casbin.js ist ein Casbin-Addon, das Ihr Zugriffskontrollmanagement in der Frontend-Anwendung erleichtert.","sidebar":"docs"},"function":{"id":"function","title":"Funktion","description":"Funktionen in Matchern","sidebar":"docs"},"get-started":{"id":"get-started","title":"Los geht\'s","description":"Installation","sidebar":"docs"},"graphql-middlewares":{"id":"graphql-middlewares","title":"GraphQL Middlewares","description":"Casbin folgt dem offiziell vorgeschlagenen Weg, GraphQL-Endpunkte mit einer einzigen Quelle der Wahrheit zur Autorisierung zu autorisieren//graphql.org/learn/authorization/ . Mit einem anderen Wort, Casbin sollte zwischen GraphQL und Ihrer Gesch\xe4ftslogik platziert werden.","sidebar":"docs"},"how-it-works":{"id":"how-it-works","title":"So funktioniert es","description":"In Casbin wird ein Zugriffskontrollmodell in eine CONF-Datei abstrahiert, basierend auf der PERM-Metamodel (Policy, Effect, Request, Matchers). Das Umschalten oder Aktualisieren des Autorisierungsmechanismus f\xfcr ein Projekt ist daher genauso einfach wie das \xc4ndern einer Konfiguration. Sie k\xf6nnen Ihr eigenes Zugangskontrollmodell anpassen, indem Sie die verf\xfcgbaren Modelle kombinieren. Zum Beispiel k\xf6nnen RBAC-Rollen und ABAC-Attribute in einem Modell kombiniert werden und eine Reihe von Richtlinien-Regeln gemeinsam genutzt werden.","sidebar":"docs"},"ide-plugins":{"id":"ide-plugins","title":"IDE-Plugins","description":"Wir haben Plugins f\xfcr diese IDEs:","sidebar":"docs"},"k8s":{"id":"k8s","title":"Autorisierung von Kubernetes","description":"K8s-authz ist eine Kubernetes (k8s) RBAC & ABAC Autorisierungs-Middleware basierend auf Casbin. Diese Middleware verwendet K8s Validierungs-Zulassungs-Webhook, um auf jede Anforderung der k8s Ressourcen die von Kasbin definierten Richtlinien zu \xfcberpr\xfcfen. Diese Custom-Advisor-Controller f\xfchren eine Art Validierung auf dem Anfrageobjekt durch, das vom Api-Server weitergeleitet wurde und auf einer Logik basiert, schickt eine Antwort an den Api-Server zur\xfcck, die Informationen dar\xfcber enth\xe4lt, ob die Anfrage erlaubt oder abgelehnt werden soll. Diese Controller sind bei Kubernetes mit dem ValidatingAdmissionWebhook registriert.","sidebar":"docs"},"log-error":{"id":"log-error","title":"Log- & Fehlerbehandlung","description":"Protokollierung","sidebar":"docs"},"management-api":{"id":"management-api","title":"Management-API","description":"Die primitive API, die volle Unterst\xfctzung f\xfcr das Management der Casbin-Richtlinien bietet.","sidebar":"docs"},"middlewares":{"id":"middlewares","title":"Middleware","description":"Web frameworks","sidebar":"docs"},"model-storage":{"id":"model-storage","title":"Modellspeicher","description":"Anders als die Politik, kann das Modell nur geladen werden, es kann nicht gespeichert werden. Weil wir der Meinung sind, dass das Modell keine dynamische Komponente ist und nicht zur Laufzeit ge\xe4ndert werden sollte so dass wir keine API implementieren, um das Modell in einen Speicher zu speichern.","sidebar":"docs"},"multi-threading":{"id":"multi-threading","title":"Mehrfachfachen","description":"Wenn Sie Casbin in mehrfacher Weise verwenden, k\xf6nnen Sie den synchronisierten Wrapper des Casbin enforcer//github.com/casbin/casbin/blob/master/enforcersynced.go (GoLang) und https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcersynced.cpp (C++).","sidebar":"docs"},"online-editor":{"id":"online-editor","title":"Online-Editor","description":"Sie k\xf6nnen auch den Online-Editor (https://casbin.io/editor/) verwenden, um Ihr Casbin-Modell und Ihre Richtlinien in Ihrem Webbrowser zu schreiben. Es bietet Funktionen wie Syntaxhervorhebung und Code-Vervollst\xe4ndigungwie eine IDE f\xfcr eine Programmiersprache.","sidebar":"docs"},"overview":{"id":"overview","title":"\xdcbersicht","description":"Casbin ist eine leistungsstarke und effiziente Open-Source-Zugriffssteuerungsbibliothek, die verschiedene Zugriffskontrollmodelle unterst\xfctzt f\xfcr die Erzwingung der Autorisierung auf dem Board.","sidebar":"docs"},"performance":{"id":"performance","title":"Leistungsoptimierung","description":"Wenn Sie in einer Produktionsumgebung mit Millionen von Benutzern oder Berechtigungen angewendet werden, k\xf6nnen Sie bei der Durchsetzung von Casbin auf Performance-Downgrade sto\xdfen, es gibt in der Regel zwei Ursachen:","sidebar":"docs"},"policy-storage":{"id":"policy-storage","title":"Richtlinien-Speicher","description":"In Casbin wird der Richtlinienspeicher als -Adapter implementiert.","sidebar":"docs"},"policy-subset-loading":{"id":"policy-subset-loading","title":"Richtlinien-Untermengenladen","description":"Einige Adapter unterst\xfctzen gefiltertes Richtlinien-Management. Dies bedeutet, dass die von Casbin geladene Richtlinie eine Teilmenge der Richtlinie im Speicher ist, die auf einem bestimmten Filter basiert. Dies erm\xf6glicht eine effiziente Durchsetzung der Richtlinien in gro\xdfen, mehrk\xf6pfigen Umgebungen, wenn das Parsen der gesamten Politik zu einem Leistungsengp\xe4ck wird.","sidebar":"docs"},"priority-model":{"id":"priority-model","title":"Priorit\xe4tsmodell","description":"Casbin unterst\xfctzt Laststrategien mit Priorit\xe4t.","sidebar":"docs"},"privacy-policy":{"id":"privacy-policy","title":"Datenschutzerkl\xe4rung","description":"Ihre Privatsph\xe4re ist uns wichtig. Casbin\'s Policy to respect your privacy regarding any information we may collect from you across our website, https://casbin. o und andere Websites, die wir besitzen und betreiben.","sidebar":"docs"},"rbac":{"id":"rbac","title":"RBAC","description":"Rollendefinition","sidebar":"docs"},"rbac-96":{"id":"rbac-96","title":"Casbin RBAC vs. RBAC96","description":"Casbin RBAC und RBAC96","sidebar":"docs"},"rbac-api":{"id":"rbac-api","title":"RBAC API","description":"Eine benutzerfreundlichere API f\xfcr RBAC. Diese API ist eine Teilmenge der Management-API. Die RBAC-Benutzer k\xf6nnen diese API verwenden, um den Code zu vereinfachen.","sidebar":"docs"},"rbac-with-domains":{"id":"rbac-with-domains","title":"RBAC mit Dom\xe4nen","description":"Rollendefinition mit Dom\xe4neninstanzen","sidebar":"docs"},"rbac-with-domains-api":{"id":"rbac-with-domains-api","title":"RBAC mit Domains API","description":"Eine benutzerfreundlichere API f\xfcr RBAC mit Domains. Diese API ist eine Teilmenge der Management-API. Die RBAC-Benutzer k\xf6nnen diese API verwenden, um den Code zu vereinfachen.","sidebar":"docs"},"rbac-with-pattern":{"id":"rbac-with-pattern","title":"RBAC mit Muster","description":"Schnellstart","sidebar":"docs"},"role-managers":{"id":"role-managers","title":"Rollen-Manager","description":"Der Rollenmanager wird verwendet, um die RBAC Rollenhierarchie (Benutzerrollenzuordnung) in Casbin zu verwalten. Ein Rollenmanager kann die Rollendaten aus den Regeln der Casbin-Richtlinien oder externen Quellen wie LDAP, Okta, Auth0, Azure AD usw. abrufen. Wir unterst\xfctzen verschiedene Implementierungen eines Rollenmanagers. Um das Gewicht gering zu halten, setzen wir den Rollenmanager Code nicht in die Hauptbibliothek (au\xdfer den Standard-Rollenmanager). Eine vollst\xe4ndige Liste der Casbin Rollenmanager finden Sie wie unten. Jeder Beitrag von Drittanbietern zu einem neuen Rollenmanager ist willkommen, bitte informieren Sie uns und ich werde ihn in diese Liste setzen:)","sidebar":"docs"},"rolemanager-api":{"id":"rolemanager-api","title":"Rollen-Manager-API","description":"Rollenmanager","sidebar":"docs"},"service":{"id":"service","title":"Kasbin-Dienst","description":"Wie kann ich Casbin als Service nutzen?","sidebar":"docs"},"superadmin":{"id":"superadmin","title":"Super-Admin","description":"Super Admin ist der Administrator des gesamten Systems, wir k\xf6nnen es in Modellen wie RBAC, ABAC und RBAC mit Dom\xe4nen etc. verwenden. Das detaillierte Beispiel lautet wie folgt:","sidebar":"docs"},"supported-models":{"id":"supported-models","title":"Unterst\xfctzte Modelle","description":"1. ACL (Zugriffskontrollliste)","sidebar":"docs"},"syntax-for-models":{"id":"syntax-for-models","title":"Syntax f\xfcr Modelle","description":"- Ein Modell CONF sollte mindestens vier Bereiche haben: [requestdefinition], [policydefinition], [policy_effect], [matchers].","sidebar":"docs"},"terms-of-service":{"id":"terms-of-service","title":"Nutzungsbedingungen","description":"1. Begriffe","sidebar":"docs"},"tutorials":{"id":"tutorials","title":"Anleitungen","description":"Bevor Sie lesen, beachten Sie bitte, dass einige Tutorials f\xfcr das Casbin-Modell und die Arbeit f\xfcr alle Casbin-Implementierungen in verschiedenen Sprachen sind. Einige andere Tutorials sind sprachspezifisch.","sidebar":"docs"},"watchers":{"id":"watchers","title":"Beobachter","description":"Wir unterst\xfctzen verteilte Messaging-Systeme wie etcd um die Konsistenz zwischen mehreren Casbin-Vollstreckungsinstanzen zu gew\xe4hrleisten. So k\xf6nnen unsere Benutzer gleichzeitig mehrere Casbin-Durchsetzer verwenden, um eine gro\xdfe Anzahl von Berechtigungspr\xfcfungen zu bearbeiten.","sidebar":"docs"}}}')}}]);