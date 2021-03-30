(window.webpackJsonp=window.webpackJsonp||[]).push([[1046],{1111:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"titanium-angular-basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-angular-basics"}},[t._v("#")]),t._v(" Titanium Angular Basics")]),t._v(" "),s("h2",{attrs:{id:"project-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[t._v("#")]),t._v(" Project structure")]),t._v(" "),s("p",[t._v("Let's take a closer look at the directory structure of your new Titanium Angular project created from the default template:")]),t._v(" "),s("p",[s("strong",[t._v("Titanium Angular project structure")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n└── project-name\n    ├── src\n    ├── platform\n    │   ├── android\n    │   └── ios\n    ├── Resources\n    ├── .eslintrc.json\n    ├── tiapp.xml\n    └── tsconfig.json\n")])])]),s("p",[t._v("These various files and folders all have a specific purpose:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("src")]),t._v(": This folder contains all development resources and is pretty similar to a standard Angular project.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("platform")]),t._v(": Contains platform specific files for Android and iOS")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Resources")]),t._v(": A generated directory which contains resources for the final app build including Webpack bundles and resources such as images. "),s("strong",[t._v("DO NOT EDIT ANY "),s("strong",[t._v("OF THESE")]),t._v(" FILES")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v(".eslintrc.json")]),t._v(": Configuration file for ESLint using "),s("a",{attrs:{href:"https://github.com/angular-eslint/angular-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("angular-eslint"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("tiapp.xml")]),t._v(": This is the main configuration file for your project. You can make platform specific configurations and adjust general build or runtime settings. For more info see the "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/"}},[t._v("tiapp.xml and timodule.xml Reference")]),t._v(".")],1)]),t._v(" "),s("li",[s("p",[s("strong",[t._v("tsconfig.json")]),t._v(": Configuration file for TypeScript")])])]),t._v(" "),s("p",[t._v("Inside the "),s("code",[t._v("src")]),t._v(" folder you'll find all important files that will bootstrap the Angular core inside a Titanium app. This is also the folder you'll be working with most of the time as it contains your Angular source files as well as all other app resources.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("project-name\n└── src\n    ├── app\n    │   ├── app.component.ts\n    │   ├── app.module.ts\n    │   └── ...\n    ├── assets\n    ├── main.ts\n    ├── polyfills.ts\n    └── ...\n")])])]),s("p",[t._v("Here is what those various files and folder do:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("****app/"),s("strong",[t._v("app.component.ts")]),t._v(": The root component that will be loaded when your applications starts.")])]),t._v(" "),s("li",[s("p",[t._v("****app/"),s("strong",[t._v("app.module.ts")]),t._v(": This contains the main module that configures a great part of your application.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("assets:")]),t._v(" Contains assets such as images. Similar to Alloy, all resources you would place under the "),s("code",[t._v("Resources")]),t._v(" folder in classic apps go here instead.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("main.ts")]),t._v(": The entry point to your application that bootstraps Angular and loads the "),s("code",[t._v("AppModule")]),t._v(".")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("polyfills.ts:")]),t._v(" Contains additional polyfills needed by Angular. You can add your own extra polyfills to this file.")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Ahead-of-time compilation issue")]),t._v(" "),s("p",[t._v("Among those files, you will notice additional files with an "),s("code",[t._v(".aot")]),t._v(" file extension. Those are for Angular's Ahead-of-time compilation that is used for faster load times in production builds. This is currently not yet supported in the current Tech Preview.")])]),t._v(" "),s("h2",{attrs:{id:"titanium-angular-startup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-angular-startup"}},[t._v("#")]),t._v(" Titanium Angular startup")]),t._v(" "),s("p",[t._v("The files in the "),s("code",[t._v("src/app")]),t._v(" folder are almost identical to the files in an "),s("a",{attrs:{href:"https://angular.io/start",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular web application"),s("OutboundLink")],1),t._v(". Let's take a closer look at those files to point out the differences, starting with the "),s("code",[t._v("main.ts.")])]),t._v(" "),s("p",[s("strong",[t._v("main.ts")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./polyfills'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" platformTitaniumDynamic "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'titanium-angular'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app/app.module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("platformTitaniumDynamic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bootstrapModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AppModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Through an import statement, we pull in the "),s("code",[t._v("platformTitaniumDynamic")]),t._v(" function and a TypeScript class calles "),s("code",[t._v("AppModule")]),t._v(". The "),s("code",[t._v("platformTitaniumDynamic")]),t._v(" function comes from the "),s("code",[t._v("titanium-angular")]),t._v(" module, which provides the platform which is required to run Angular inside Titanium. Just like Angular's own "),s("code",[t._v("platformBrowserDynamic")]),t._v(" function is used to setup Angular in an browser enviornment, "),s("code",[t._v("platformTitaniumDynamic")]),t._v(" sets up Angular in Titanium App.")]),t._v(" "),s("p",[t._v("The following "),s("code",[t._v("bootstrapModule")]),t._v(" function is the same as in an Angular web application. It expects an Angular module that is responsible for providing the main configuration of your app.")]),t._v(" "),s("p",[s("strong",[t._v("app.module.ts")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NgModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO_ERRORS_SCHEMA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TitaniumModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'titanium-angular'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppRoutingModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app-routing.module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HomeComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./home.component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" IntroComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./intro.component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bootstrap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  declarations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    AppComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    IntroComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    HomeComponent\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    TitaniumModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    AppRoutingModule\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  schemas"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO_ERRORS_SCHEMA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppModule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The two important things here to note are the "),s("code",[t._v("bootstrap")]),t._v(" and "),s("code",[t._v("imports")]),t._v(" properties. Through the "),s("code",[t._v("import")]),t._v(" property, we pull in the "),s("code",[t._v("TitaniumModule")]),t._v(", which, for example, allows you to use Titanium elements as tags in templates but also does a lot more under the hood to properly setup Angular for the use in Titanium.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("bootstrap")]),t._v(" property defines that, after Angular is done with its internal bootstrap process, it loads the "),s("code",[t._v("AppComponent")]),t._v(". You can see an excerpt of the file bellow.")]),t._v(" "),s("p",[s("strong",[t._v("app.component.ts")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * This is the root component of your app which setups routing between the\n * different components via the `ti-router-outlet` directive.\n */")]),t._v("\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<ti-router-outlet></ti-router-outlet>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Component interaction with the template and Titanium views")]),t._v(" "),s("p",[t._v("If you open the other component files in your editor, you'll notice that the files contain different examples that demonstrate how you can interact with Titanium views within the component. This follows the same pattern as in a default Angular web application. Visit Angular's "),s("a",{attrs:{href:"https://angular.io/guide/displaying-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("Components & Templates"),s("OutboundLink")],1),t._v(" guide for an in depth tutorial on this topic.")])]),t._v(" "),s("p",[t._v("In the above excerpt, the "),s("code",[t._v("app.compoinent.ts")]),t._v(" defines it's template through the template property. In such a template you can make use of Titanium UI elements to create your app's user interface.")]),t._v(" "),s("h2",{attrs:{id:"titanium-ui-elements-in-angular"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-elements-in-angular"}},[t._v("#")]),t._v(" Titanium UI elements in Angular")]),t._v(" "),s("p",[t._v("The usage of Titanium UI elements is the main difference compared to building Angular apps on the web. Instead of the usual "),s("code",[t._v("div")]),t._v(" or "),s("code",[t._v("span")]),t._v(" elements you are used to when developing for browser environments, you compose your app's UI using various Titanium elements. There are a wide range of "),s("a",{attrs:{href:"#!/api/Titanium.UI"}},[t._v("Titanium UI")]),t._v(" elements that you can use for this matter.")]),t._v(" "),s("p",[t._v("To create a simple button, for example, you can use the "),s("code",[t._v("Button")]),t._v(" element. This uses a "),s("a",{attrs:{href:"#!/api/Titanium.UI.Button"}},[t._v("Titanium.UI.Button")]),t._v(" which will be rendered as a "),s("code",[t._v("UIButton")]),t._v(" on iOS, or as an "),s("code",[t._v("android.widget.Button")]),t._v(" on Android. You don't need to know any implementation details from either of these native controls as Titanium does all of the actual rendering for you.")]),t._v(" "),s("p",[t._v("Let's take a look at some examples that will explain in detail how to use Titanium UI elements in Angular.")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#demoButton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Tap me!"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("(click)")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("increaseTapCount()"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),s("p",[t._v("Note that all elements in an Angular template need to be closed by a matching tag. Self-closing elements, as you may know them from HTML, or maybe Alloy, are not allowed.")])]),t._v(" "),s("p",[t._v("In this example, we create a button, setting a property and also setting up an event listener. We also set a "),s("a",{attrs:{href:"https://angular.io/guide/template-syntax#template-reference-variables--var-",target:"_blank",rel:"noopener noreferrer"}},[t._v("template reference variable"),s("OutboundLink")],1),t._v(" that allows you to access a specific element in the corrosponding component.")]),t._v(" "),s("p",[t._v("Here is what all of the above does in detail:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("#demoButton")]),t._v(": This sets a template reference variable, which allows you to access this element elsewhere in the template or inside the component via the "),s("a",{attrs:{href:"https://angular.io/api/core/ViewChild",target:"_blank",rel:"noopener noreferrer"}},[t._v("ViewChild"),s("OutboundLink")],1),t._v(" decorator.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("title")]),t._v(": Sets the title property of the button.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("(click)")]),t._v(": This sets up an event listener to the button's click event. It binds to the "),s("code",[t._v("increaseTapCount")]),t._v(" method in the component class. You can also pass "),s("code",[t._v("$event")]),t._v(" into the function to gain access to the Titanium event: "),s("code",[t._v('(click)="increaseTapCount($event)"')]),t._v(".")])])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("[font]")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ fontSize: 32 }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Now on Titanium"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("This creates a new "),s("code",[t._v("Label")]),t._v(" and sets some properties on it, just like you would on HTML elements. For elements that have a "),s("code",[t._v("text")]),t._v(" or "),s("code",[t._v("title")]),t._v(" property, you can write the text you want directly between the element tags. Titanium Angular will automatically populate those properties for you. The other attributes of the above code do the following:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("color")]),t._v(': Sets the text color of the label. You can use common color names or hex values. For information about color values, see the "Colors" section of '),s("a",{attrs:{href:"#!/api/Titanium.UI"}},[t._v("Titanium.UI")]),t._v(" .")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("[font]")]),t._v(": This sets the label's "),s("a",{attrs:{href:"#!/api/Font"}},[t._v("font")]),t._v(" property. Note the square brakets around the property name. This instructs Angular to interpret the value as an JS expression which results in setting the `fontSize` property. It can also be used to bind the value from a component property by simply specifiying its name.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("top")]),t._v(": Allows you to specify the top position of the label. The behavior and effect of this property depends in the used Layout and other positioning properties.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("left")]),t._v(": Specify the left position of the label. The behavior and effect of this property depends on the used layout and other positioning properties.")])])]),t._v(" "),s("h2",{attrs:{id:"layouts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layouts"}},[t._v("#")]),t._v(" Layouts")]),t._v(" "),s("p",[t._v("To control how Titanium positions your UI elements, you have three different layouting behaviors to choose from. Refer to "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Fundamentals/Layouts_Positioning_and_the_View_Hierarchy/"}},[t._v("Layouts Positioning and the View Hierarchy")]),t._v(" and "),s("a",{attrs:{href:"#!/api/Titanium.UI.View-property-layout"}},[t._v("layout property docs")]),t._v(" to see how exactly each layout method works and how the different positioning properties behave in each layout.")],1),t._v(" "),s("p",[t._v("To define a layout in an Angular template you can either specifiy the "),s("code",[t._v("layout")]),t._v(" property or use the "),s("code",[t._v("HorizontalLayout")]),t._v(" and "),s("code",[t._v("VerticalLayout")]),t._v(" directives.")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("View")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("layout")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("vertical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TextField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hintText")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("TextField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TextField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hintText")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("TextField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("View")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("VerticalLayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TextField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hintText")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("TextField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TextField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hintText")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("TextField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("VerticalLayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("The layout directives internally also use a View that wraps the content and sets the layout property to either "),s("code",[t._v("horizontal")]),t._v(" or "),s("code",[t._v("vertical")]),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);