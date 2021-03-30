(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1277:function(t,e,a){"use strict";a.r(e);var s=a(21),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"using-a-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-module"}},[t._v("#")]),t._v(" Using a Module")]),t._v(" "),s("h2",{attrs:{id:"objective"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),s("p",[t._v("You can install a module so that it is available to a single project, or all projects you create. Then you will see how to use a module within your project.")]),t._v(" "),s("h3",{attrs:{id:"installing-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-modules"}},[t._v("#")]),t._v(" Installing modules")]),t._v(" "),s("p",[t._v("You can install a module for a single project, or that all Studio projects can use. Once you've installed the module, you then configure it for use in your project (see "),s("a",{attrs:{href:"#configuring-your-app-to-use-a-module"}},[t._v("Configuring your app to use a module")]),t._v(").")]),t._v(" "),s("p",[s("strong",[t._v("To install a module")]),t._v(":")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("In Studio, select "),s("strong",[t._v("Help")]),t._v(" > "),s("strong",[t._v("Install Mobile Module")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("In the Module dialog, enter the URL of the module's ZIP file, or click Browse and locate the ZIP file.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(680),alt:"install_dialog"}})])]),t._v(" "),s("li",[s("p",[t._v("For "),s("strong",[t._v("Output Location")]),t._v(" select one of the following:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("To install the module so it's available to all projects, select "),s("strong",[t._v("Titanium SDK")]),t._v(". See "),s("a",{attrs:{href:"#undefined"}},[t._v("Module install locations")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("To install the module so its available to a single project, select "),s("strong",[t._v("Mobile App Project")]),t._v(", and then choose the desired project from the pop-up menu.")])]),t._v(" "),s("li",[s("p",[t._v("To install the module to a folder location, select "),s("strong",[t._v("Location")]),t._v(" and then browse to the desired output folder.")])])])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("OK")]),t._v(".")])])]),t._v(" "),s("h4",{attrs:{id:"module-install-locations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-install-locations"}},[t._v("#")]),t._v(" Module install locations")]),t._v(" "),s("p",[t._v("When you install a module that's available to all projects, the module is installed to one of the following locations, depending on your platform.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Operating System")]),t._v(" "),s("th",[t._v("Local Path")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("macOS")]),t._v(" "),s("td",[s("code",[t._v("~/Library/Application Support/Titanium")])])]),t._v(" "),s("tr",[s("td",[t._v("Windows")]),t._v(" "),s("td",[s("code",[t._v("%ProgramData%\\Titanium\\mobilesdk\\win32")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),s("p",[t._v("On macOS, the "),s("code",[t._v("~/Library")]),t._v(" folder is hidden by default. To permanently show it, run the following command from a terminal:")]),t._v(" "),s("p",[s("code",[t._v("chflags nohidden ~/Library/")])]),t._v(" "),s("p",[t._v("To open it once, run the following command from a terminal:")]),t._v(" "),s("p",[s("code",[t._v("open ~/Library")])])]),t._v(" "),s("h3",{attrs:{id:"configuring-your-app-to-use-a-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-your-app-to-use-a-module"}},[t._v("#")]),t._v(" Configuring your app to use a module")]),t._v(" "),s("p",[t._v("Once you have installed the module, you must configure your application to use it. This involves two steps:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Add the module as a dependency in your application's "),s("code",[t._v("tiapp.xml")]),t._v(" file.")])]),t._v(" "),s("li",[s("p",[t._v("Call the "),s("code",[t._v("require()")]),t._v(" method in your JavaScript code to load the module")])])]),t._v(" "),s("h4",{attrs:{id:"updating-the-tiapp-xml-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-tiapp-xml-file"}},[t._v("#")]),t._v(" Updating the tiapp.xml file")]),t._v(" "),s("p",[t._v("You can update your application's tiapp.xml file visually, or manually in a text editor.")]),t._v(" "),s("p",[s("strong",[t._v("To add a module to your project")]),t._v(":")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("In Studio, open your project and double-click its tiapp.xml file.")])]),t._v(" "),s("li",[s("p",[t._v("Click the "),s("strong",[t._v("Overview")]),t._v(" tab in the bottom-left of the Editor window.")])]),t._v(" "),s("li",[s("p",[t._v("In the Modules section, click the green add ( "),s("strong",[t._v("+")]),t._v(" ) button.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(681),alt:"addbutton"}})])]),t._v(" "),s("li",[s("p",[t._v("Select the module you want to add and click "),s("strong",[t._v("OK")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:a(682),alt:"tiapp"}})]),t._v(" "),s("p",[t._v("Note the version numbers listed at the bottom of the dialog. See "),s("a",{attrs:{href:"#selecting-a-module-version"}},[t._v("Selecting a module version")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Save your changes to tiapp.xml.")])])]),t._v(" "),s("p",[t._v("To manually add a module to your project's tiapp.xml file, modify the "),s("code",[t._v("<modules/>")]),t._v(" tag in the "),s("code",[t._v("<ti:app>")]),t._v(" node as follows:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- $MODULE_VERSION should be the same as "version" in the module manifest and directory number --\x3e')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- $MODULE_PLATFORM should be the same as "platform" in the module manifest and directory number. One of "ios", "android" or "windows" --\x3e')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$MODULE_VERSION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("platform")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$MODULE_PLATFORM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("$MODULE_ID"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- For example, if we were adding the Ti.Map module --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3.0.2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("platform")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ti.map"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"selecting-a-module-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selecting-a-module-version"}},[t._v("#")]),t._v(" Selecting a module version")]),t._v(" "),s("p",[t._v("A installed module may include one or more versions that your application can use, as well as versions for production, deployment and testing. By default, Studio selects the latest version of a module when you install it.")]),t._v(" "),s("p",[s("strong",[t._v("To select a specific module version")]),t._v(":")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("In the Modules section of tiapp.xml, double-click on the module to opens the "),s("strong",[t._v("Module Properties")]),t._v(" dialog.")])]),t._v(" "),s("li",[s("p",[t._v("For each platform, select the version of the module you want to use.")])]),t._v(" "),s("li",[s("p",[t._v("Click the arrow next to the platform to expand it to select to use the module for specific build types.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(683),alt:"version"}})])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("OK")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Save tiapp.xml.")])])]),t._v(" "),s("h4",{attrs:{id:"using-require-to-load-the-module-in-the-app-s-code-in-es5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-require-to-load-the-module-in-the-app-s-code-in-es5"}},[t._v("#")]),t._v(" Using require() to load the module in the app's code in ES5")]),t._v(" "),s("p",[t._v("Within your app's JavaScript files, you'll instantiate the module via the "),s("code",[t._v("require()")]),t._v(" function:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Module "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$MODULE_ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For example, to load the Map module:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Map "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ti.map'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"using-import-to-load-the-module-in-the-app-s-code-in-es6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-import-to-load-the-module-in-the-app-s-code-in-es6"}},[t._v("#")]),t._v(" Using import() to load the module in the app's code in ES6+")]),t._v(" "),s("p",[t._v("In addition to the ES5-styled "),s("code",[t._v("require()")]),t._v(" function, you can also import modules using the "),s("code",[t._v("import()")]),t._v(" statement:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import Module from '$MODULE_ID'\n// For example, to load the Map module:\nimport Map from 'ti.map'\n")])])]),s("p",[t._v("Finally, you'll use the module's object, properties, and methods to enable its features and functionality. Each module should include documentation and a sample app that demonstrates the basic use of the module. That information would be a great place to start with learning how to use a specific module.")]),t._v(" "),s("h2",{attrs:{id:"example-module-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-module-use"}},[t._v("#")]),t._v(" Example Module Use")]),t._v(" "),s("p",[t._v("The following section illustrates how you would use one of the modules included in the Titanium Plus set.")]),t._v(" "),s("p",[t._v("For this example we will be downloading the "),s("a",{attrs:{href:"https://github.com/appcelerator-modules/ti.admob",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdMob"),s("OutboundLink")],1),t._v(" module for iOS available on GitHub. While the example covers an iOS use case, the same general steps apply to an Android module. The ZIP file containing the module distribution can be downloaded "),s("a",{attrs:{href:"https://github.com/appcelerator/titanium_modules/blob/master/admob/mobile/ios/ti.admob-iphone-1.5.0.zip?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install the module as described "),s("a",{attrs:{href:"#installing-modules"}},[t._v("above")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Require the module in your project with the following code:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Admob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ti.admob'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES6+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import Admob from 'ti.admob';")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("You can now call methods on the admob singleton object:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" adview "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Admob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    testing"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    adBackgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    primaryTextColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    secondaryTextColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    publisherId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<< your ID>>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Replace this string with your own API key!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("h4",{attrs:{id:"requested-module-could-not-be-found"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requested-module-could-not-be-found"}},[t._v("#")]),t._v(" Requested module could not be found")]),t._v(" "),s("p",[t._v('If you receive an error saying: "Requested module not found." Check the name and version number of the module in the '),s("code",[t._v("tiapp.xml")]),t._v(" file. Make sure that the version of the module is installed either locally or globally. You can also remove the "),s("code",[t._v("version")]),t._v(" attribute from the "),s("code",[t._v("module")]),t._v(" element to use the most recent version of the module.")]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("In this section, you learned that you can install a module for use by a single project or by all projects that you develop on a computer. Once installed, you have to modify your app's tiapp.xml file to support the module. Then, you must require the module into your app's code before you can implement its functionality.")])])}),[],!1,null,null,null);e.default=o.exports},680:function(t,e,a){t.exports=a.p+"assets/img/install_dialog.442ae3c4.png"},681:function(t,e,a){t.exports=a.p+"assets/img/addbutton.57b1aebf.png"},682:function(t,e,a){t.exports=a.p+"assets/img/tiapp.cf5f8d73.png"},683:function(t,e,a){t.exports=a.p+"assets/img/version.ffa72a54.png"}}]);