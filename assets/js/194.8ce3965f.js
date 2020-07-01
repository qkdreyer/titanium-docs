(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1262:function(e,t,a){"use strict";a.r(t);var o=a(21),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"titanium-module-concepts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#titanium-module-concepts"}},[e._v("#")]),e._v(" Titanium Module Concepts")]),e._v(" "),o("p",[e._v("The Titanium API is made up of "),o("em",[e._v("modules")]),e._v("--collections of related methods, properties, and constants. There are several types of modules:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The Titanium namespace is made up of built-in modules--modules such as "),o("code",[e._v("Titanium.UI")]),e._v(" and "),o("code",[e._v("Titanium.Geolocation")]),e._v(". These modules are always available to Titanium applications.")])]),e._v(" "),o("li",[o("p",[e._v("Packaged modules are optional extensions to the Titanium API that can be imported into your application using the "),o("code",[e._v("require")]),e._v(" method. Packaged modules are imported using an identifier (such as "),o("code",[e._v("ti.cloud")]),e._v("). Packaged modules can include native code, JavaScript, or both. Packaged modules are available from the Appcelerator Marketplace, as well as other sources.")])]),e._v(" "),o("li",[o("p",[e._v("CommonJS modules can be used in your application to structure and organize code. Unlike packaged modules, CommonJS modules are not managed by Studio or the "),o("code",[e._v("titanium")]),e._v(" command-line interface. To import a CommonJS module, you import it using the absolute or relative path to the module inside your project's "),o("code",[e._v("Resources")]),e._v(" folder.")])])]),e._v(" "),o("p",[e._v("This section deals with extending the Titanium API by building packaged modules, which can be sold through the Appcelerator Marketplace or distributed through other means.")]),e._v(" "),o("h2",{attrs:{id:"packaged-titanium-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#packaged-titanium-modules"}},[e._v("#")]),e._v(" Packaged Titanium modules")]),e._v(" "),o("p",[e._v("A packaged module is a module that can contain native code, JavaScript, or both. It is built, or packaged, for a specific platform--at this point, packaged modules are supported on Android and iOS. When you package a module, any native code is compiled and any JavaScript is obfuscated, so the module can be distributed without sharing your source code.")]),e._v(" "),o("p",[e._v("The Titanium CLI generates one module project for multiple platforms. The module project contains platform-specific resource folders, called "),o("code",[e._v("android")]),e._v(" and "),o("code",[e._v("iphone")]),e._v(", as well as common resources for assets, documentation and examples.")]),e._v(" "),o("p",[e._v("Since packaged modules can contain native code, a module can generally do anything that native code can do. On Android and iOS, there are a number of special considerations for writing native code, as well as a set of module APIs for integrating with Titanium.")]),e._v(" "),o("h3",{attrs:{id:"native-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#native-modules"}},[e._v("#")]),e._v(" Native modules")]),e._v(" "),o("p",[e._v("To write a native module for Android or iOS, you need to be familiar with several concepts:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Proxies")])]),e._v(" "),o("li",[o("p",[e._v("Native Module Objects")])]),e._v(" "),o("li",[o("p",[e._v("Views and View Proxies")])]),e._v(" "),o("li",[o("p",[e._v("Converting between JavaScript and native objects")])]),e._v(" "),o("li",[o("p",[e._v("Events and Callbacks")])]),e._v(" "),o("li",[o("p",[e._v("Threading")])])]),e._v(" "),o("h4",{attrs:{id:"proxies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proxies"}},[e._v("#")]),e._v(" Proxies")]),e._v(" "),o("p",[e._v("A "),o("em",[e._v("proxy")]),e._v(" is a native object that exposes a JavaScript API. All proxy objects extend a specific proxy class ("),o("code",[e._v("TiProxy")]),e._v(" on iOS, "),o("code",[e._v("KrollProxy")]),e._v(" on Android), which provides a mechanism for binding native methods and properties to JavaScript.")]),e._v(" "),o("p",[e._v("In many cases, a proxy object is a wrapper, or proxy, for a native object such as a UI control.For example, the "),o("code",[e._v("Ti.UI.Button")]),e._v(" object is a proxy object that wraps a native button control on iOS and Android. You can also create a proxy object to represent a complex data type that is shared between the JavaScript and native layers.")]),e._v(" "),o("p",[e._v("When you create an instance of a proxy object and return it to the JavaScript layer, the JavaScript engine creates a corresponding JavaScript object. When you call a method on the JavaScript object that's bound to a native method on the proxy object, the JavaScript engine invokes the native method. Likewise, when you access a property on the JavaScript object that's bound to a property on the proxy object, the JavaScript engine invokes a setter or getter for that property. For example, consider the following code:")]),e._v(" "),o("div",{staticClass:"language-javascript extra-class"},[o("pre",{pre:!0,attrs:{class:"language-javascript"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1. Create a proxy object")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" win "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Ti"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token constant"}},[e._v("UI")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("createWindow")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 2. Set a property")]),e._v("\nwin"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("title "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 3. Call a method on the proxy.")]),e._v("\nwin"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("p",[e._v("The following diagram represents what happens when this code is executed.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(811),alt:"create_proxy"}})]),e._v(" "),o("p",[e._v("Although the "),o("code",[e._v("win")]),e._v(" object appears like an ordinary JavaScript object to a Titanium application, it is important to remember that there are actually two objects – the JavaScript object and the native proxy object. Only properties and methods that are bound to the native proxy object actually invoke calls to the native proxy. Setting an arbitrary property on an object after creation time will add the property to the JavaScript object, but "),o("em",[e._v("not")]),e._v(" the proxy object. Consider the following code:")]),e._v(" "),o("div",{staticClass:"language-javascript extra-class"},[o("pre",{pre:!0,attrs:{class:"language-javascript"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" win "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Ti"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token constant"}},[e._v("UI")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("createWindow")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nwin"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("myProp "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Some other string"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nwin"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("title "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("p",[e._v("In this example, setting the "),o("code",[e._v("title")]),e._v(" property on "),o("code",[e._v("win")]),e._v(" causes the title to be set on the native window proxy, but the "),o("code",[e._v("myProp")]),e._v(" property is only set on the JavaScript object, and is not passed to the native layer.")]),e._v(" "),o("h4",{attrs:{id:"native-module-objects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#native-module-objects"}},[e._v("#")]),e._v(" Native module objects")]),e._v(" "),o("p",[e._v("A "),o("em",[e._v("module")]),e._v(" object is the native representation of a Titanium module. It extends a native module type ("),o("code",[e._v("TiModule")]),e._v(" on iOS, "),o("code",[e._v("KrollModule")]),e._v(" on Android). This native module type inherits from the native proxy type – like a proxy, a module exposes a set of properties and methods to JavaScript. In addition, the native module object can have an assigned identifier – used to import the module with `require` – and a set of lifecycle events that the module can respond to.")]),e._v(" "),o("p",[e._v("Your packaged module can only contain a single native module class.")]),e._v(" "),o("p",[e._v("Every proxy object has a "),o("em",[e._v("parent")]),e._v(" module. The parent module usually exposes methods for creating its child proxy objects, like the "),o("code",[e._v("Ti.UI")]),e._v(" module provides a "),o("code",[e._v("Ti.UI.createButton")]),e._v(" method to create a "),o("code",[e._v("Ti.UI.Button")]),e._v(" object.")]),e._v(" "),o("h4",{attrs:{id:"views-and-view-proxies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#views-and-view-proxies"}},[e._v("#")]),e._v(" Views and view proxies")]),e._v(" "),o("p",[e._v("For UI components, there are some additional classes you'll need to use. A view proxy is a special proxy type that extends "),o("code",[e._v("TiViewProxy")]),e._v(", which has additional properties and methods specific to the Titanium UI system. Each view proxy has a corresponding Titanium view type, which extends the "),o("code",[e._v("TiUIView")]),e._v(" class. The view proxy provides a way for applications to interact with the view from JavaScript. The view object itself may be created and destroyed as needed – for example, the controls in a window don't need to be instantiated until the window is opened.")]),e._v(" "),o("p",[e._v("There are several special features about view and view proxies:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("When you set a property on the view proxy, the underlying native view may not exist. Therefore, the view proxy is responsible for maintaining the properties.")])]),e._v(" "),o("li",[o("p",[e._v("When a view is created, it is initialized with the current set of properties stored by the view proxy.")])]),e._v(" "),o("li",[o("p",[e._v("When a view proxy's properties are updated, the view is updated as well.")])])]),e._v(" "),o("h4",{attrs:{id:"converting-between-javascript-and-native-objects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#converting-between-javascript-and-native-objects"}},[e._v("#")]),e._v(" Converting between JavaScript and native objects")]),e._v(" "),o("p",[e._v("When you pass an object to a native method, or return an object from a native method or property to JavaScript, objects must be converted from JavaScript objects to native objects, and vice-versa.")]),e._v(" "),o("p",[e._v("Each native platform has its own set of helpers for converting between JavaScript objects and native objects. However, there are some similarities on both platforms:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Primitive values, such as numbers, strings and arrays can be converted to their equivalent values.")])]),e._v(" "),o("li",[o("p",[e._v("Plain JavaScript objects can be converted to native dictionary objects (Java "),o("code",[e._v("HashMap")]),e._v(" or Objective-C "),o("code",[e._v("NSDictionary")]),e._v(", for example).")])]),e._v(" "),o("li",[o("p",[e._v("More complex types can be passed by creating a special proxy class to represent them.")])])]),e._v(" "),o("h4",{attrs:{id:"events-and-callbacks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#events-and-callbacks"}},[e._v("#")]),e._v(" Events and callbacks")]),e._v(" "),o("p",[e._v("When performing an asynchronous operation, you can send data back to the JavaScript layer using events or callbacks.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("An "),o("em",[e._v("event")]),e._v(" results in an event listener function being called on all registered listeners.")])]),e._v(" "),o("li",[o("p",[e._v("A "),o("em",[e._v("callback")]),e._v(" invokes a specific JavaScript function.")])])]),e._v(" "),o("p",[e._v("Because events can have multiple registered listeners, they are somewhat more flexible than callbacks.")]),e._v(" "),o("h4",{attrs:{id:"threading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#threading"}},[e._v("#")]),e._v(" Threading")]),e._v(" "),o("p",[e._v("JavaScript is inherently single-threaded; it provides no mechanisms for synchronizing between multiple threads. However, the native platforms support multiple threads. In both iOS and Android, an application has a single main thread (or UI thread), which is the only thread allowed to interact with native UI elements. This thread is separate from the JavaScript runtime thread, so both iOS and Android provide methods for executing code on the main thread. Doing anything time-consuming on the UI thread can cause the UI to freeze up, so you should only use the UI thread when necessary:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Use the UI thread when directly manipulating native UI elements.")])]),e._v(" "),o("li",[o("p",[e._v("Avoid blocking the UI thread for any reason.")])])]),e._v(" "),o("p",[e._v("When performing a long-running task in native code, you can spawn a thread or use a native API that is asynchronous. You can deliver results back to the JavaScript runtime thread by calling a callback method or firing an event. Callback functions and event listeners are invoked on the JavaScript runtime thread.")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("On the iOS platform, each JavaScript context operates in its own thread. If you create a "),o("code",[e._v("Window")]),e._v(" using the "),o("code",[e._v("url")]),e._v(" property, the window runs in a separate context "),o("em",[e._v("and in a separate thread")]),e._v(". For this reason, when communicating between JavaScript contexts on iOS, you should only pass serializable JavaScript objects, "),o("em",[e._v("not")]),e._v(" functions or proxy objects.")]),e._v(" "),o("p",[e._v("When calling a callback from a module, the callback is invoked on the appropriate JavaScript runtime thread. When you fire an event from your module, the event listener function is called on the thread where the listener was added. (Potentially, this means that the same event could be delivered on multiple threads if your application has multiple contexts, each with a listener defined for that event.)")])]),e._v(" "),o("h3",{attrs:{id:"packaged-javascript-and-hybrid-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#packaged-javascript-and-hybrid-modules"}},[e._v("#")]),e._v(" Packaged JavaScript and hybrid modules")]),e._v(" "),o("p",[e._v("To package JavaScript as a native module, create a JavaScript module named "),o("module-id",[e._v(".js in the module's "),o("code",[e._v("assets")]),e._v(" folder. The APIs exported by this module form the API of the packaged module.")])],1),e._v(" "),o("p",[e._v("For Android and iOS modules, the module must be formatted as a CommonJS module.")]),e._v(" "),o("p",[e._v("You can place additional JavaScript CommonJS modules in the assets folder and import them into your main module using "),o("code",[e._v("require")]),e._v(".")]),e._v(" "),o("p",[e._v("If your module includes both JavaScript and native code, the native and JavaScript module contents are merged when the module is packaged. For example, if your native module exposes a "),o("code",[e._v("createView")]),e._v(" method, and you have a JavaScript module that exposes a "),o("code",[e._v("animateView")]),e._v(" method, both of these methods are available on your module:")]),e._v(" "),o("div",{staticClass:"language-javascript extra-class"},[o("pre",{pre:!0,attrs:{class:"language-javascript"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" myModule "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"com.example.module"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" view "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" myModule"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("createView")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" width"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("200")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" height"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("200")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nwin"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("view"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nmyModule"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("animateView")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("view"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports},811:function(e,t,a){e.exports=a.p+"assets/img/create_proxy.9f2c6673.png"}}]);