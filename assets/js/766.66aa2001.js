(window.webpackJsonp=window.webpackJsonp||[]).push([[766],{1889:function(t,e,s){"use strict";s.r(e);var a=s(21),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"alloy-widgets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alloy-widgets"}},[t._v("#")]),t._v(" Alloy Widgets")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Widgets are self-contained components that can be easily dropped into Alloy-powered Titanium projects. They were conceived as a way to reuse code in multiple applications or to be used multiple times in the same application. Widgets have their own views, controllers, styles and assets and are laid out the same as the app directory in the Alloy project.")]),t._v(" "),s("h2",{attrs:{id:"using-widgets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-widgets"}},[t._v("#")]),t._v(" Using widgets")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#ImportingWidgets"}},[t._v("Importing Widgets")]),t._v(" for more information on using widgets in your project.")],1),t._v(" "),s("h2",{attrs:{id:"creating-widgets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-widgets"}},[t._v("#")]),t._v(" Creating widgets")]),t._v(" "),s("p",[t._v("Widgets should be built in their own directory in the Alloy project's "),s("code",[t._v("app/widgets/")]),t._v(" directory. Widgets have their own views, controllers, models, styles and assets and are laid out the same as the "),s("code",[t._v("app")]),t._v(" directory in the Alloy project. See "),s("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Concepts/#ConventionoverConfiguration"}},[t._v("Convention over Configuration")]),t._v(" for the layout. Additionally, since widgets are self-contained, they should not reference any code or assets not within its path, except for internationalization and localization files, which are located in the "),s("code",[t._v("i18n")]),t._v(" folder. Some differences from Alloy projects and helpful tricks are noted below.")],1),t._v(" "),s("h3",{attrs:{id:"assets-and-libs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assets-and-libs"}},[t._v("#")]),t._v(" Assets and libs")]),t._v(" "),s("p",[t._v("For any files in the "),s("code",[t._v("assets")]),t._v(" or "),s("code",[t._v("libs")]),t._v(" folder, use the "),s("code",[t._v("WPATH()")]),t._v(" macro to automatically map the path relative from the widget's root folder, as opposed to the Alloy project's "),s("code",[t._v("app")]),t._v(" directory. For example, if you have a library located at "),s("code",[t._v("app/widgets/foo/lib/helper.js")]),t._v(", to require it, use "),s("code",[t._v("require(WPATH('helper'))")]),t._v("; and if you have an image located at "),s("code",[t._v("app/widgets/foo/assets/images/foo.png")]),t._v(", to reference it, use "),s("code",[t._v("WPATH('images/foo.png')")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("Widgets have their own configuration file called "),s("code",[t._v("widget.json")]),t._v(" located in the widget's root directory. Refer to "),s("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_How-tos/Alloy_Reference_Guides/Widget_Configuration_File_(widget.json)/"}},[t._v("Widget Configuration File (widget.json)")]),t._v(" for the format of the file.")],1),t._v(" "),s("h3",{attrs:{id:"controllers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controllers"}},[t._v("#")]),t._v(" Controllers")]),t._v(" "),s("p",[t._v("The main controller is called "),s("code",[t._v("widget.js")]),t._v(" instead of "),s("code",[t._v("index.js")]),t._v(".")]),t._v(" "),s("p",[t._v("To use another view-controller besides "),s("code",[t._v("widget.js")]),t._v("/"),s("code",[t._v("widget.xml")]),t._v(", use the "),s("code",[t._v("Widget.createController(controller_name, [params])")]),t._v(" method to create a new instance of the controller and the "),s("code",[t._v("getView()")]),t._v(" method to access the Titanium proxy object. For example, suppose you have a "),s("code",[t._v("button")]),t._v(" view-controller in your "),s("code",[t._v("foo")]),t._v(" widget. To add it to the main widget view:")]),t._v(" "),s("p",[s("strong",[t._v("app/widgets/foo/controllers/widget.js")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" button "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Widget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("widget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("All methods in the widget controller are private unless you prefix the method with "),s("code",[t._v("$")]),t._v(", which makes it accessible to the Alloy project and other widgets. For example, if the following code was defined in a widget controller:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("init")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Button object with id=button")]),t._v("\n    $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Si'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// global variable")]),t._v("\n    message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hola mundo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Then, in the Alloy project, call "),s("code",[t._v("init")]),t._v(" prefixed with the widget ID specified in the Alloy project's view--in this example, the ID is "),s("code",[t._v("foo")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$.foo.init({title:'Yes', color:'gray', message:'I pity the foo.'});\n")])])]),s("h3",{attrs:{id:"models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[t._v("#")]),t._v(" Models")]),t._v(" "),s("p",[t._v("Use models the same way as with a regular Alloy project except to create a model or collection inside a widget controller, use the "),s("code",[t._v("Widget.createModel(model_name, [params])")]),t._v(" and "),s("code",[t._v("Widget.createCollection(model_name, [params])")]),t._v(" methods, respectively. You can also use the "),s("code",[t._v("Model")]),t._v(" and "),s("code",[t._v("Collection")]),t._v(" tags in widget views.")]),t._v(" "),s("h3",{attrs:{id:"styles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#styles"}},[t._v("#")]),t._v(" Styles")]),t._v(" "),s("p",[t._v("The main TSS file is called "),s("code",[t._v("widget.tss")]),t._v(" instead of "),s("code",[t._v("index.tss")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"themes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#themes"}},[t._v("#")]),t._v(" Themes")]),t._v(" "),s("p",[t._v("Widget themes work the same as project themes except for the placement of the files. Inside your theme folder ("),s("code",[t._v("app/themes/<THEME_NAME>")]),t._v("), create "),s("code",[t._v("widgets/<WIDGET_NAME>")]),t._v(" folders, where "),s("code",[t._v("<THEME_NAME>")]),t._v(" is the name of the theme and "),s("code",[t._v("<WIDGET_NAME>")]),t._v(" is the name of the widget. Create two folders, "),s("code",[t._v("assets")]),t._v(" and "),s("code",[t._v("styles")]),t._v(", to place your custom images and styles for your widget, respectively. The "),s("code",[t._v("assets")]),t._v(" and "),s("code",[t._v("styles")]),t._v(" folders need to be placed in the folder that is named after the widget. When using a theme, the files in these folders replace the files in the widget's folders. For more details, see "),s("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/#themes"}},[t._v("Alloy Styles and Themes: Themes")]),t._v(".")],1),t._v(" "),s("p",[t._v("To use a theme, in the project's "),s("code",[t._v("config.json")]),t._v(" file, add the "),s("code",[t._v("theme")]),t._v(" key with the name of the theme folder as the value.")]),t._v(" "),s("p",[t._v('The following file structure shows the placement of the "mytheme" theme files in relation to the "mywidget" widget. The project below contains iOS-specific assets and styles for the widget.')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("app\n├── themes\n│   └── mytheme\n│       └── widgets\n│           └── mywidget\n│               ├── assets\n│               │   ├── ios\n│               │   │   └── star_half.png\n│               │   ├── star.png\n│               │   └── star_off.png\n│               └── styles\n│                   ├── ios\n│                   │   └── star.tss\n│                   └── star.tss\n└── widgets\n    └── mywidget\n        ├── assets\n        │   ├── star.png\n        │   ├── star_half.png\n        │   └── star_off.png\n        ├── controllers\n        │   ├── star.js\n        │   └── widget.js\n        ├── styles\n        │   ├── star.tss\n        │   └── widget.tss\n        ├── views\n        │   ├── star.xml\n        │   └── widget.xml\n        └── widget.json\n")])])]),s("h3",{attrs:{id:"views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[t._v("#")]),t._v(" Views")]),t._v(" "),s("p",[t._v("The main view is called "),s("code",[t._v("widget.xml")]),t._v(" instead of "),s("code",[t._v("index.xml")]),t._v(".")]),t._v(" "),s("p",[t._v("Specifying the "),s("code",[t._v("id")]),t._v(" attribute in the XML markup components will make it easier to access and override Titanium object properties. For example, suppose you have a Button object in a widget view that has its id assigned as "),s("code",[t._v("button")]),t._v(" and in the Alloy project the widget id is "),s("code",[t._v("foo")]),t._v(". To access a Button property:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('Ti.API.info("button state: " + $.foo.button.enabled);\n')])])]),s("p",[t._v("For widgets that have multiple view-controllers, to include a widget's view-controller in another widget's view, use the "),s("code",[t._v("Widget")]),t._v(" tag and assign the "),s("code",[t._v("name")]),t._v(" attribute with the name of the view-controller minus the file extension. Since Alloy 1.5.0, if you omit the "),s("code",[t._v("src")]),t._v(" attribute, Alloy assumes you are referencing the current widget. For Alloy 1.4.x and prior, you need to assign the "),s("code",[t._v("src")]),t._v(" attribute to the widget's name. For example, the following markup is analogous to the example in the Controller section:")]),t._v(" "),s("p",[s("strong",[t._v("app/widgets/foo/views/widget.xml")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("View")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Widget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("View")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"widgets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#widgets"}},[t._v("#")]),t._v(" Widgets")]),t._v(" "),s("p",[t._v("Widgets can also contain other widgets. Follow the same directions from "),s("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#ImportingWidgets"}},[t._v("Importing Widgets")]),t._v(" except the widget's configuration file is called "),s("code",[t._v("widget.json")]),t._v(" instead of "),s("code",[t._v("config.json")]),t._v(". Additionally, to create a widget inside a widget controller, use the "),s("code",[t._v("Widget.createWidget(widget_name, [controller_name], [params])")]),t._v(" method.")],1)])}),[],!1,null,null,null);e.default=o.exports}}]);