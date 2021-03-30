(window.webpackJsonp=window.webpackJsonp||[]).push([[820],{1031:function(e,t,o){"use strict";o.r(t);var a=o(21),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"alloy-concepts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-concepts"}},[e._v("#")]),e._v(" Alloy Concepts")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("This guide covers the important concepts related to the Alloy framework, including the model-view-controller framework, convention-over-configuration design, widgets, and built-in support from Backbone.js and Underscore.js.")]),e._v(" "),o("h2",{attrs:{id:"model-view-controller"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#model-view-controller"}},[e._v("#")]),e._v(" Model-View-Controller")]),e._v(" "),o("p",[e._v("Alloy utilizes the model-view-controller (MVC) pattern, which separates the application into three different components:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Models")]),e._v(" provide the business logic, containing the rules, data and state of the application")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Views")]),e._v(" provide the GUI components to the user, either presenting data or allowing the user to interact with the model data")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Controllers")]),e._v(" provide the glue between the model and view components in the form of application logic")])])]),e._v(" "),o("p",[e._v("For example, in a calendar application, the models include events, reminders, invitations, and contacts. The views present the calendar data and reminders to the user or allow the user to add events. For reminders, the controller checks the model data and launches a 'reminder' view to the user. For adding events, the controller opens an 'add event' view, then adds the event into the model data once the user entered the data.")]),e._v(" "),o("p",[e._v("An advantage of MVC is the ability to reuse code by separating the functionality. For example, you can have specific views for different devices, while keeping the controller code relatively the same and the model data unchanged.")]),e._v(" "),o("h3",{attrs:{id:"alloy-mvc-with-backbone"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-mvc-with-backbone"}},[e._v("#")]),e._v(" Alloy: MVC with Backbone")]),e._v(" "),o("p",[e._v("Backbone.js is a lightweight MVC framework, originally designed for web applications. Alloy models are built on top of Backbone.js, taking advantage of Backbone's rich Model and Collection APIs. You define models using a Javascript file that exports a special JSON object, which uses Backbone's extend functionality to customize models and collections. See "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/"}},[e._v("Alloy Models")]),e._v(" for more information on creating model objects and "),o("a",{attrs:{href:"http://backbonejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://backbonejs.org/"),o("OutboundLink")],1),e._v(" for more information on Backbone.js.")],1),e._v(" "),o("p",[e._v("Alloy views are built from Titanium UI components. You define views using XML markup and style them using Alloy "),o("em",[e._v("Titanium Style Sheets (.tss)")]),e._v(", which abstracts the creation of these components without using Titanium API calls. Alloy generates the code to create your views. See "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/"}},[e._v("Alloy Views")]),e._v(" for more information on creating views.")],1),e._v(" "),o("p",[e._v("Alloy controllers generally have a one-to-one relationship with Alloy views. Controllers directly use the Titanium SDK API without an abstraction layer. The controller has access to all of the view components. See "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Controllers/"}},[e._v("Alloy Controllers")]),e._v(" for more information on creating controllers.")],1),e._v(" "),o("p",[e._v("Additionally, Alloy provides built-in support for Underscore.js, which provides a set of utility functions, such as array and iterative helpers. Refer to "),o("a",{attrs:{href:"http://underscorejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://underscorejs.org/"),o("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),o("h2",{attrs:{id:"alloy-and-the-titanium-sdk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-and-the-titanium-sdk"}},[e._v("#")]),e._v(" Alloy and the Titanium SDK")]),e._v(" "),o("p",[e._v("Alloy uses Titanium SDK to abstracts the creation of UI components through the use of XML markup and style sheets. If Alloy has not implemented a feature of the Titanium SDK or if the feature is not UI related, you can always use the Titanium SDK API in the Alloy controller code or create a CommonJS module to implement a feature. The table below lists what Alloy directly abstracts from the Titanium SDK.")]),e._v(" "),o("p",[e._v("For assets, such as images, any references to the "),o("code",[e._v("Resources")]),e._v(" folder in the Titanium SDK documentation should be replaced with the "),o("code",[e._v("app/assets")]),e._v(" folder to use it for Alloy. For example, the "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Fundamentals/Icons_and_Splash_Screens/"}},[e._v("Icons and Splash Screens")]),e._v(" guide tells you to place files in either the "),o("code",[e._v("Resources/android")]),e._v(" or "),o("code",[e._v("Resources/iphone")]),e._v(" folder. For Alloy, the files should be placed in either the "),o("code",[e._v("app/assets/android")]),e._v(" or "),o("code",[e._v("app/assets/iphone")]),e._v(" folder.")],1),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Titanium SDK Component")]),e._v(" "),o("th",[e._v("Alloy Component")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Titanium.UI.* Objects  "),o("br"),e._v("Titanium.Android.Menu  "),o("br"),e._v("Titanium.Facebook.LoginButton  "),o("br"),e._v("Titanium.Map  "),o("br"),e._v("Titanium.Media.VideoPlayer"),o("br"),o("br"),o("code",[e._v("<br />Titanium.UI.createButton();<br />")])]),e._v(" "),o("td",[e._v("* XML element. Remove the namespace. For some elements, you may need to assign the "),o("code",[e._v("ns")]),e._v(" attribute. For more information, refer to "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#namespace"}},[e._v("Alloy XML Markup: Namespace")]),e._v("."),o("br"),e._v(" "),o("br"),e._v(" "),o("code",[e._v("xml<br /> \x3c!-- Creates a button --\x3e<br /> <Button /><br />")]),o("br"),e._v(" "),o("br"),e._v("* TSS element. Remove the namespace. If the object belongs to another namespace besides "),o("code",[e._v("Titanium.UI")]),e._v(" and is not implicitly assigned a namespace by Alloy, you cannot create a style based on the element name. Instead, create a style based on a selector (XML "),o("code",[e._v("class")]),e._v(" attribute) or id (XML "),o("code",[e._v("id")]),e._v(" attribute). For a list of objects that Alloy implicitly assigns a namespace, refer to "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#namespace"}},[e._v("Alloy XML Markup: Namespace")]),e._v("."),o("br"),e._v(" "),o("br"),e._v(" "),o("code",[e._v('<br /> // Does not create a button. Used to style all Button objects in the associated view.<br /> "Button":{<br /> // Button attributes<br /> }<br />')])],1)]),e._v(" "),o("tr",[o("td",[e._v("Titanium Object properties"),o("br"),o("br"),o("code",[e._v('<br />Titanium.UI.createButton({<br /> text: "Foobar",<br /> top: 0,<br /> width: Ti.UI.SIZE<br />});<br />')])]),e._v(" "),o("td",[e._v("* XML attribute if the property can be expressed as a string, number or Titanium SDK constant. Some properties that take Titanium objects can be expressed inline using XML tags. For more information, refer to "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#property-mapping"}},[e._v("Alloy XML Markup: Property Mapping")]),e._v("."),o("br"),e._v(" "),o("br"),e._v(" "),o("code",[e._v('xml<br /> <Button title="Foobar" top="0" width="Ti.UI.SIZE"/><br />')]),o("br"),e._v(" "),o("br"),e._v("* TSS attribute if the property can be directly expressed as a string, number, Titanium SDK constant, dictionary or array. Indirectly, you can assign a method or value to the Alloy Globals or CFG namespace and reference it in the TSS file. For more information, refer to "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/"}},[e._v("Alloy Styles and Themes")]),e._v("."),o("br"),e._v(" "),o("br"),e._v(" "),o("code",[e._v('<br /> "Button":{<br /> title: "Foobar",<br /> top: 0,<br /> width: Ti.UI.SIZE<br /> }<br />')])],1)]),e._v(" "),o("tr",[o("td",[e._v("Titanium Object methods"),o("br"),o("br"),o("code",[e._v("javascript<br />var button = Titanium.UI.createButton();<br />button.setTitle('Push Me!');<br />")])]),e._v(" "),o("td",[e._v("Use in the controller code. You need to define the "),o("code",[e._v("id")]),e._v(" attribute of the object in the XML markup, so the object can be referenced in the controller."),o("br"),o("br"),o("code",[e._v("<br />// Need to give the object an ID, for example, <Button id=\"button\" /><br />$.button.setTitle('Push Me!');<br />")])])]),e._v(" "),o("tr",[o("td",[e._v("Titanium Object events"),o("br"),o("br"),o("code",[e._v("javascript<br />var button = Titanium.UI.createButton();<br />button.addEventListener('click', doClick);<br />")])]),e._v(" "),o("td",[e._v("XML attribute to bind a callback in the associated controller. Capitalize the first character of the event name and append 'on' to the beginning of the name."),o("br"),o("br"),o("code",[e._v('xml<br />\x3c!-- doClick needs to be declared in the associated controller --\x3e<br /><Button onClick="doClick"/><br />')])])])])]),e._v(" "),o("h2",{attrs:{id:"convention-over-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#convention-over-configuration"}},[e._v("#")]),e._v(" Convention over configuration")]),e._v(" "),o("p",[e._v("To simplify development, Alloy uses a directory structure and naming conventions to organize the application rather than configuration files. Alloy expects to find files in specific locations. Any folder or file not adhering to the below naming conventions is ignored by Alloy. For example, at generation time, Alloy will look for the mandatory files "),o("code",[e._v("app/views/index.xml")]),e._v(" and "),o("code",[e._v("app/controllers/index.js")]),e._v(", then the optional corresponding file "),o("code",[e._v("app/styles/index.tss")]),e._v(". Alloy requires these files to create the initial view-controller "),o("code",[e._v("Resources/<platform>/alloy/controllers/index.js")]),e._v(".")]),e._v(" "),o("p",[e._v("The following is a list of directories and files that can be found in an Alloy project:")]),e._v(" "),o("table",{staticClass:"confluenceTable"},[o("thead",{staticClass:" "}),o("tfoot",{staticClass:" "}),o("tbody",{staticClass:" "},[o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains the models, views, controllers and assets of the application. All work should be done here. See folder descriptions below.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/alloy.jmk")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Build configuration file."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Build_Configuration_File_(alloy.jmk)"}},[e._v("Build Configuration File (alloy.jmk)")]),e._v(".")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/alloy.js")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Initializer file used to preconfigure components or override Alloy methods before the main controller is executed."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Controllers-section-src-34636384_safe-id-QWxsb3lDb250cm9sbGVycy1Jbml0aWFsaXplcmZpbGUoYWxsb3kuanMp"}},[e._v("Initializer File (alloy.js)")]),e._v(" for more information.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/config.json")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Project configuration file."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Project_Configuration_File_(config.json)"}},[e._v("Project Configuration File (config.json)")]),e._v(".")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/assets")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains image assets and other files that need to be copied into the "),o("code",[e._v("Resources")]),e._v(" directory."),o("br"),e._v("Reference these files in the code without the 'app/assets' path and without the platform-specific folder if it is inside one.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/controllers")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains controllers in the format "),o("code",[e._v("filename.js")]),e._v(" to a corresponding view file "),o("code",[e._v("app/views/filename.xml")]),e._v("."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Controllers"}},[e._v("Alloy Controllers")]),e._v(" for more information.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/i18n")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Since Alloy 1.8.0 and Titanium 5.2.0 "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Internationalization-section-src-29004892_Internationalization-Languagestrings"}},[e._v("Language Strings")]),e._v(" are sourced from "),o("code",[e._v("app/i18n")]),e._v(" and Alloy will generate the "),o("code",[e._v("i18n")]),e._v(" folder in the project root.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/lib")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains application-specific library code, typically in the CommonJS format."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-LibrarycodeandCommonJSmodules"}},[e._v("Library code and CommonJS modules")]),e._v(" for more information.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/migrations")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains database migration files in the format "),o("code",[e._v("<DATETIME>_filename.js")]),e._v("."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Sync_Adapters_and_Migrations-section-src-36739597_AlloySyncAdaptersandMigrations-Migrations"}},[e._v("Migrations")]),e._v(" for more information.")]),o("p",[o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Sync_Adapters_and_Migrations-section-src-36739597_AlloySyncAdaptersandMigrations-Migrations"}},[e._v("Alloy Sync Adapters and Migrations:Migrations")])])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/models")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains model files in the format "),o("code",[e._v("filename.js")]),e._v("."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Models"}},[e._v("Alloy Models")]),e._v(" for more information.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/platform")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Since Alloy 1.8.0 platform resources are sourced from "),o("code",[e._v("app/platform")]),e._v(" and Alloy will generate the "),o("code",[e._v("platform")]),e._v(" folder in the project root.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/specs")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Like the "),o("code",[e._v("app/lib")]),e._v(" folder except it is only used if the deploy type is "),o("strong",{staticClass:" "},[e._v("not")]),e._v(" production (since "),o("strong",{staticClass:" "},[e._v("Alloy 1.2.0")]),e._v(")."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-LibrarycodeandCommonJSModules"}},[e._v("Library Code")]),e._v(" for more information.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/styles")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains view styling in the format "),o("code",[e._v("filename.tss")]),e._v(", which is applied to a corresponding view file "),o("code",[e._v("app/views/filename.xml")]),e._v("."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Styles_and_Themes-section-src-35621526_AlloyStylesandThemes-TitaniumStyleSheets"}},[e._v("Titanium Style Sheets")]),e._v(" for more information.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/themes")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains themes to customize the assets and styles of the entire GUI."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Styles_and_Themes-section-src-35621526_AlloyStylesandThemes-Themes"}},[e._v("Themes")]),e._v(" for more information.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/views")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains views in the format "),o("code",[e._v("filename.xml")]),e._v(" with the optional corresponding files "),o("code",[e._v("app/controllers/filename.js")]),e._v(" and "),o("code",[e._v("app/styles/filename.tss")]),e._v("."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_XML_Markup"}},[e._v("Alloy XML Markup")]),e._v(" for more information.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("app/widgets")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains widget files. Each widget will have its own "),o("code",[e._v("app")]),e._v("-like directory structure."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Concepts-section-src-34636240_AlloyConcepts-Widgets"}},[e._v("Widgets")]),e._v(" for more information.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("i18n")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Since Alloy 1.8.0 and Titanium 5.2.0 "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Internationalization-section-src-29004892_Internationalization-Languagestrings"}},[e._v("Language Strings")]),e._v(" are sourced from "),o("code",[e._v("app/i18n")]),e._v(" and Alloy will generate the "),o("code",[e._v("i18n")]),e._v(" folder in the project root. Before Alloy 1.8.0 and Titanium 5.2.0 you were expected to manage the "),o("code",[e._v("i18n")]),e._v(" folder in the project root, just like you do without Alloy.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("Resources")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Contains the Titanium files generated by the Alloy interface from the "),o("code",[e._v("app")]),e._v(" directory. All files will be overwritten each time the application is built."),o("br"),e._v("Since Alloy 1.3.0, Alloy creates a separate Titanium project for each platform you build for in the "),o("code",[e._v("Resources/<platform>")]),e._v(" folder."),o("br"),e._v("See "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/Alloy_Concepts-section-src-34636240_AlloyConcepts-Compilationprocess"}},[e._v("Compilation process")]),e._v(" for more information.")])])])])]),e._v(" "),o("p",[o("strong",[e._v("Notes:")]),e._v(" the "),o("code",[e._v("lib")]),e._v(", "),o("code",[e._v("migrations")]),e._v(", "),o("code",[e._v("themes")]),e._v(" and "),o("code",[e._v("widgets")]),e._v(" folders are not automatically generated when creating a new project. The "),o("code",[e._v("migrations")]),e._v(" and "),o("code",[e._v("widgets")]),e._v(" folder will be generated by the Alloy command-line interface if any of those components are generated. The "),o("code",[e._v("lib")]),e._v(" and "),o("code",[e._v("themes")]),e._v(" folders will need to be manually created.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("alloy.jmk")]),e._v(" file is not automatically generated when creating a new project. Use the command-line interface to generate this file.")]),e._v(" "),o("h3",{attrs:{id:"platform-specific-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#platform-specific-resources"}},[e._v("#")]),e._v(" Platform-specific resources")]),e._v(" "),o("p",[e._v("Controllers, views and styles can have platform-specific resources. Just add a folder named "),o("code",[e._v("android")]),e._v(", "),o("code",[e._v("ios")]),e._v(", "),o("code",[e._v("mobileweb")]),e._v(" or "),o("code",[e._v("windows")]),e._v(" under the component folder and add your platform-specific files for Android, iOS, Mobile Web or Windows Phone into the folder, respectively. Note: Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")]),e._v(" "),o("p",[e._v("For example, an iOS-specific view and an Android-specific controller would be look like this:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("app")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("controllers")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("android")]),e._v(" "),o("ul",[o("li",[e._v("index.js")])])]),e._v(" "),o("li",[o("p",[e._v("index.js")])])])]),e._v(" "),o("li",[o("p",[e._v("views")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("ios")]),e._v(" "),o("ul",[o("li",[e._v("index.xml")])])]),e._v(" "),o("li",[o("p",[e._v("index.xml")])])])])])])]),e._v(" "),o("p",[e._v("Alternatively, you can use special conditional code and attributes inside the controllers, views and styles to apply platform-specific code and components. Refer to "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Controllers/#conditional-code"}},[e._v("Controller Conditional Code")]),e._v(" and "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#conditional-code"}},[e._v("Conditional Code")]),e._v(" for more details.")],1),e._v(" "),o("p",[e._v("Additionally, the "),o("code",[e._v("assets")]),e._v(" folder is laid out the same way as the "),o("code",[e._v("Resources")]),e._v(" folder in a Titanium project for platform-specific files and density-specific images. Refer to "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Cross-Platform_Mobile_Development_In_Titanium/Supporting_Multiple_Platforms_in_a_Single_Codebase/#platform-specific-resources"}},[e._v("Platform-Specific Resources")]),e._v(" for more information.")],1),e._v(" "),o("h2",{attrs:{id:"widgets"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#widgets"}},[e._v("#")]),e._v(" Widgets")]),e._v(" "),o("p",[e._v("Widgets are self-contained components that can be easily dropped into Alloy-powered Titanium projects. They were conceived as a way to reuse code in multiple applications or to be used multiple times in the same application. Widgets have their own models, views, controllers, styles and assets and are laid out the same as the "),o("code",[e._v("app")]),e._v(" directory in the Alloy project.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("For information on using widgets in a project, see "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#importing-widgets"}},[e._v("Importing Widgets")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("For information on creating widgets, see "),o("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Widgets/#creating-widgets"}},[e._v("Creating Widgets")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("To search publicly available widgets, visit "),o("a",{attrs:{href:"http://gitt.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gitTio"),o("OutboundLink")],1),e._v(" .")])])]),e._v(" "),o("h2",{attrs:{id:"builtins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#builtins"}},[e._v("#")]),e._v(" Builtins")]),e._v(" "),o("p",[e._v("Alloy comes with additional utilities used to simplify certain functions, such as animations, string manipulation, and display unit conversion. These utilities are referred to as 'builtins.' To use these utilities, the controller needs to call "),o("code",[e._v("require")]),e._v(" with 'alloy' as the root directory. For example, to use an animation function to shake the current view by pressing the 'shake' button, add this code to a controller:")]),e._v(" "),o("div",{staticClass:"language-javascript extra-class"},[o("pre",{pre:!0,attrs:{class:"language-javascript"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" animation "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'alloy/animation'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n$"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("shake"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("addEventListener")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'click'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("e")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  animation"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("shake")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("$"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("view"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("p",[e._v("See "),o("a",{attrs:{href:"#!/api/Alloy.builtins"}},[e._v("Alloy builtins API documentation")]),e._v(" for the functionality and usage of builtins.")]),e._v(" "),o("h2",{attrs:{id:"compilation-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compilation-process"}},[e._v("#")]),e._v(" Compilation process")]),e._v(" "),o("p",[e._v("This section provides a brief overview of how the Alloy command-line interface converts the files in the "),o("code",[e._v("app")]),e._v(" folder to a Titanium project in the "),o("code",[e._v("Resources/<platform>")]),e._v(" folder for each platform you build your project for. Before Alloy 1.3.0, Alloy creates only one Titanium project in the "),o("code",[e._v("Resources")]),e._v(" folder.")]),e._v(" "),o("h3",{attrs:{id:"cleanup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Resources")]),e._v(" folder is cleaned of any previous built files.")]),e._v(" "),o("h3",{attrs:{id:"build-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-configuration"}},[e._v("#")]),e._v(" Build configuration")]),e._v(" "),o("p",[e._v("If the build configuration file, "),o("code",[e._v("alloy.jmk")]),e._v(", exists, it is loaded. The 'pre:load' task executes at this point if it is defined.")]),e._v(" "),o("h3",{attrs:{id:"alloy-framework-assets-and-lib"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-framework-assets-and-lib"}},[e._v("#")]),e._v(" Alloy Framework, assets, and lib")]),e._v(" "),o("p",[e._v("Alloy framework files, which include the Backbone.js and Underscore.js libraries, sync adapters and base controller class, are copied to the "),o("code",[e._v("Resources/<platform>/alloy")]),e._v(" folder. The Alloy base library, "),o("code",[e._v("alloy.js")]),e._v(", is copied to the "),o("code",[e._v("Resources")]),e._v(" folder. These files are necessary to run any Alloy project.")]),e._v(" "),o("p",[e._v("The project configuration file, "),o("code",[e._v("config.json")]),e._v(", is processed and copied to "),o("code",[e._v("Resources/<platform>/alloy/CFG.js")]),e._v(".")]),e._v(" "),o("p",[e._v("The files in the "),o("code",[e._v("assets")]),e._v(" and "),o("code",[e._v("lib")]),e._v(" folders, as well as the files in the theme's assets folder, are copied to the "),o("code",[e._v("Resources")]),e._v(" folder.")]),e._v(" "),o("p",[e._v("The 'pre:compile' task executes at this point if it is defined.")]),e._v(" "),o("h3",{attrs:{id:"model-view-controller-and-widget-generation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#model-view-controller-and-widget-generation"}},[e._v("#")]),e._v(" Model-View-Controller and widget generation")]),e._v(" "),o("p",[e._v("The model files are processed. The compiler creates a JavaScript file per model and copies them to the "),o("code",[e._v("Resources/<platform>/alloy/models")]),e._v(" folder.")]),e._v(" "),o("p",[e._v("The widget files are processed. The compiler creates a folder per widget that contains JavaScript files per view-controller and copies them to the "),o("code",[e._v("Resources/<platform>/alloy/widgets")]),e._v(" folder.")]),e._v(" "),o("p",[e._v("The style, view, and controller files, as well as the files in the theme's style folder and the "),o("code",[e._v("app.tss")]),e._v(" global style file, are processed. The compiler creates a JavaScript file per view-controller and copies them to the "),o("code",[e._v("Resources/<platform>/alloy/controllers")]),e._v(" folder.")]),e._v(" "),o("h3",{attrs:{id:"main-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#main-application"}},[e._v("#")]),e._v(" Main application")]),e._v(" "),o("p",[e._v("Alloy creates a skeleton "),o("code",[e._v("app.js")]),e._v(" file from a template. The contents of this file require some Alloy modules and calls the main view-controller "),o("code",[e._v("index.js")]),e._v(". If an initializer file, "),o("code",[e._v("alloy.js")]),e._v(", exists, the entire contents of the file are copied into the "),o("code",[e._v("app.js")]),e._v(" file right before the call to initiate the main view-controller.")]),e._v(" "),o("p",[e._v("Before the file is written to the "),o("code",[e._v("Resources")]),e._v(" directory, the 'compile:app.js' task executes if one is defined in the build configuration file.")]),e._v(" "),o("h3",{attrs:{id:"code-optimization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-optimization"}},[e._v("#")]),e._v(" Code optimization")]),e._v(" "),o("p",[e._v("The generated code is processed through UglifyJS to optimize the code for speed and compactness. The code is optionally beautified.")]),e._v(" "),o("p",[e._v("If the code is compiled for a specific platform, all conditional code that should not be executed for that platform is removed. For example, if the application contains code sections specifically for iOS but the application is compiled for an Android platform, all of the iOS conditional code is removed.")]),e._v(" "),o("p",[e._v("Required Alloy builtin libraries are copied to the "),o("code",[e._v("Resources/<platform>/alloy")]),e._v(" folder and optimized in the same process as described before.")]),e._v(" "),o("p",[e._v("Then, the 'post:compile' task executes if one is defined in the build configuration file.")])])}),[],!1,null,null,null);t.default=s.exports}}]);