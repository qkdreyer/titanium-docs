(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1210:function(e,a,t){"use strict";t.r(a);var i=t(21),r=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"modules-safaridialog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-safaridialog"}},[e._v("#")]),e._v(" Modules.SafariDialog")]),e._v(" "),t("TypeHeader"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("The SafariDialog module provides Titanium access to the native SFSafariViewController. This enables you to\ndeliver interactive web content in your app just like Safari, including the key Safari UI elements already\nfamiliar to your users. See how to easily bring Safari features like Reader and AutoFill into your app.")]),e._v(" "),t("h3",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("The SafariDialog module is available with the Titanium SDK starting with Release 5.1.0.\nThis module only works with devices running iOS 9.\nPlease make sure you have at least Xcode 7 to build to the required sources.")]),e._v(" "),t("h3",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),t("p",[e._v("Add the module as a dependency to your application by adding a "),t("strong",[t("code",[e._v("<module>")])]),e._v(" item to the\n"),t("strong",[t("code",[e._v("<modules>")])]),e._v(" element of your "),t("code",[e._v("tiapp.xml")]),e._v(" file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<ti:app>\n  ...\n  <modules>\n    <module platform="iphone">ti.safaridialog</module>\n  </modules>\n  ...\n</ti:app>\n')])])]),t("p",[e._v("Use "),t("code",[e._v("require()")]),e._v(" to access the module from JavaScript:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("var dialog = require('ti.safaridialog');\n")])])]),t("p",[e._v("The "),t("code",[e._v("dialog")]),e._v(" variable is a reference to the module. Make API calls using this reference:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("if (dialog.isSupported()) {\n    dialog.open({\n        url: 'http://appcelerator.com',\n        title: 'Titanium rocks!',\n        tintColor: 'red'\n    });\n}\n")])])]),t("h3",{attrs:{id:"sample-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-application"}},[e._v("#")]),e._v(" Sample Application")]),e._v(" "),t("p",[e._v("The module contains a sample application in the\n"),t("code",[e._v("<TITANIUM_SDK_HOME>/modules/iphone/ti.safaridialog/<VERSION>/example/")]),e._v(" folder.")]),e._v(" "),t("ApiDocs")],1)}),[],!1,null,null,null);a.default=r.exports}}]);