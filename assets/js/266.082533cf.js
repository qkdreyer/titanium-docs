(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1134:function(n,e,t){"use strict";t.r(e);var a=t(21),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"modules-ldap-connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-ldap-connection"}},[n._v("#")]),n._v(" Modules.LDAP.Connection")]),n._v(" "),t("TypeHeader"),n._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[n._v("#")]),n._v(" Examples")]),n._v(" "),t("h3",{attrs:{id:"connect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connect"}},[n._v("#")]),n._v(" Connect")]),n._v(" "),t("p",[n._v('connection.connect({\nuri: "ldap://10.10.1.0:389"\n}, function(e) {\n// Success\nTi.API.info(JSON.stringify(e));\n}, function(e) {\n// Error\nTi.API.error(JSON.stringify(e));\nalert(e.message);\n});')]),n._v(" "),t("h3",{attrs:{id:"simple-bind"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-bind"}},[n._v("#")]),n._v(" Simple Bind")]),n._v(" "),t("p",[n._v("connection.simpleBind({\ndn: dn.value,\npassword: password.value\n}, function(e) {\n// Success\nTi.API.info(JSON.stringify(e));\n}, function(e) {\n// Error\nTi.API.error(JSON.stringify(e));\nalert(e.message);\n});")]),n._v(" "),t("h3",{attrs:{id:"sasl-bind"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sasl-bind"}},[n._v("#")]),n._v(" SASL Bind")]),n._v(" "),t("p",[n._v('connection.saslBind({\nmech: "DIGEST-MD5",\npassword: password.value,\nauthorizationId: authorizationId.value,\nauthenticationId: authenticationId.value\n}, function(e) {\n// Success\nTi.API.info(JSON.stringify(e));\n}, function(e) {\n// Error\nTi.API.error(JSON.stringify(e));\nalert(e.message);\n});')]),n._v(" "),t("h3",{attrs:{id:"search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[n._v("#")]),n._v(" Search")]),n._v(" "),t("p",[n._v("var searchRequest = connection.search({\nasync: true,\nbase: base.value,\nscope: ldap.SCOPE_CHILDREN,\nfilter: filter.value.length > 0 ? filter.value : null,\nattrs: attrs.value.length > 0 ? attrs.value.split(',') : null,\nasync: asyncSwitch.value,\ntimeLimit: timeLimit.value.length > 0 ? timeLimit.value : null\n}, function(e) {\nshowSearchResult(e.result);\n}, function(e) {\n// Error\nTi.API.error(JSON.stringify(e));\nalert(e.message);\n});")]),n._v(" "),t("ApiDocs")],1)}),[],!1,null,null,null);e.default=s.exports}}]);