(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1341:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webview-use-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webview-use-cases"}},[t._v("#")]),t._v(" WebView Use Cases")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("With Titanium SDK 8.0.0, we now use "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/WKWebView/"}},[t._v("WKWebView")]),t._v(" to implement Ti.UI.WebView (as Apple has deprecated "),s("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/uiwebview",target:"_blank",rel:"noopener noreferrer"}},[t._v("UIWebView"),s("OutboundLink")],1),t._v(").")],1)]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("We've discussed when you should and shouldn't use "),s("code",[t._v("WebViews")]),t._v(" in your apps. It requires a careful evaluation of necessary functionality versus performance. Let's look at some real cases where "),s("code",[t._v("WebViews")]),t._v(" are the most appropriate solution. We'll discuss integration with social networking authentication and leveraging HTML5 graphics processing as prime reasons to use "),s("code",[t._v("WebViews")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"ti-facebook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ti-facebook"}},[t._v("#")]),t._v(" Ti.Facebook")]),t._v(" "),s("p",[t._v("One of the best reasons for leveraging "),s("code",[t._v("WebViews")]),t._v(", integration with social networking authentication, has actually been built into the Titanium API. The "),s("code",[t._v("Ti.Facebook")]),t._v(" module includes a login component, rendered in a "),s("code",[t._v("WebView")]),t._v(", that handles the authentication of Facebook users. Users are presented with the familiar Facebook login screen and once authenticated, are free to use Facebook APIs via your app.")]),t._v(" "),s("p",[t._v("Here is a basic example of how this module is used. We supply "),s("code",[t._v("Ti.Facebook")]),t._v(" with an "),s("code",[t._v("appid")]),t._v(" and an array of "),s("code",[t._v("permissions")]),t._v(", set up an event handler for the login, then call the "),s("code",[t._v("Ti.Facebook.authorize()")]),t._v(" function. The "),s("code",[t._v("WebView")]),t._v(" that is presented with the Facebook login screen handles the rest. Here's the code, followed by the interface that your users will see when they attempt to login.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTitanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Facebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[YOUR APPID]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTitanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Facebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permissions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'publish_stream'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTitanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Facebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Logged In'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cancelled"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTitanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Facebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authorize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(648),alt:"facebook"}})]),t._v(" "),s("p",[t._v("This is a one-time dialog that your users will immediately recognize. This is a clear case where functionality and familiarity encapsulated in a "),s("code",[t._v("WebView")]),t._v(" more than makes up for any performance or load delay your app might incur.")]),t._v(" "),s("h3",{attrs:{id:"html5-canvas-rendering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html5-canvas-rendering"}},[t._v("#")]),t._v(" HTML5 Canvas Rendering")]),t._v(" "),s("p",[t._v("Titanium, through its core API, does not include a canvas-like rendering context. While Titanium can animate properties of its UI components, it can't generate graphics, animation, physics, and other interactions as one would expect in a game. Modules give us the opportunity to extend rendering capabilities through native code, but in many cases a simpler solution is more appropriate.")]),t._v(" "),s("p",[t._v("Titanium developers, like other web-based mobile developers, can use the "),s("code",[t._v("WebView")]),t._v(" component to render animations and interactions in the HTML5 "),s("code",[t._v("<canvas>")]),t._v(" element. While the "),s("code",[t._v("<canvas>")]),t._v(" element has varying levels of support in desktop browsers, Android and iOS webviews have supported it for some time now. Because of this, Titanium developers can deliver rich interactive apps via this powerful HTML5 element.")]),t._v(" "),s("p",[t._v("A tutorial explaining how to develop with the HTML5 "),s("code",[t._v("<canvas>")]),t._v(" element is beyond the scope of this document, but that doesn't mean we can't take a look at what's possible. The following screenshots give just a taste of what's possible with "),s("code",[t._v("<canvas>")]),t._v(" rendering. In addition to the visuals shown, the animation and user interaction possible with this element can create very complex and immersive user experiences.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(649),alt:"asteroid"}}),t._v(" "),s("img",{attrs:{src:a(650),alt:"hakin-trail"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(651),alt:"html5-example-7"}}),t._v(" "),s("img",{attrs:{src:a(652),alt:"liquid-particles"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(653),alt:"molecule"}}),t._v(" "),s("img",{attrs:{src:a(654),alt:"strange-attraction"}})]),t._v(" "),s("p",[t._v("As though the examples seen here aren't impressive enough, Titanium offers us even more. Titanium uniquely gives us the ability to augment our "),s("code",[t._v("<canvas>")]),t._v(" code in "),s("code",[t._v("WebViews")]),t._v(" with native UI components and services. The possibilities here can range from simple buttons and sliders to modify "),s("code",[t._v("<canvas>")]),t._v(" settings to a full heads-up display overlay on fully interactive, animated web content.")]),t._v(" "),s("h3",{attrs:{id:"forms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#forms"}},[t._v("#")]),t._v(" Forms")]),t._v(" "),s("p",[t._v("Titanium provides APIs to collect user input, such as the "),s("a",{attrs:{href:"#!/api/Titanium.UI.TextField"}},[t._v("Ti.UI.TextField")]),t._v(" and "),s("a",{attrs:{href:"#!/api/Titanium.UI.TextArea"}},[t._v("Ti.UI.TextArea")]),t._v(". Still, HTML forms offer a couple of features that might be advantageous in some cases.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("WebViews are automatically scrollable, so the soft keyboard won't cover the input fields in your HTML form.")])]),t._v(" "),s("li",[s("p",[t._v("On iOS and some versions of Android, navigation buttons (Next, Previous, and Done) are displayed above the soft keyboard to assist data entry. Users can tap these buttons to navigate the fields of your form.")])]),t._v(" "),s("li",[s("p",[t._v("You can use JavaScript libraries, such as jQuery, to add form validation, field highlighting, and so forth to an HTML form displayed within a WebView in your app. HTML 5 includes form validation support, though platform implementations vary.")])])]),t._v(" "),s("p",[t._v("You can control which keyboard type is displayed with a WebView form by setting attributes on the "),s("code",[t._v("<input>")]),t._v(" tag. See "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"),s("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("In this section we saw a few particular cases where "),s("code",[t._v("WebViews")]),t._v(" are the most appropriate way to add functionality to our apps. The "),s("code",[t._v("Ti.Facebook")]),t._v(" module makes use of a "),s("code",[t._v("WebView")]),t._v(" to offer users a simple and familiar way to login to the world's most popular social network. We also saw how we can use the HTML5 "),s("code",[t._v("<canvas>")]),t._v(" element to create graphics, animations, and interaction that go well beyond the core capabilities of the Titanium API.")]),t._v(" "),s("p",[s("code",[t._v("Ti.UI.WebViews")]),t._v(" are a powerful component of the Titanium API. But as we know, with great power comes great responsibility. With the knowledge gained in this chapter, you should be well equipped to determine when a "),s("code",[t._v("WebView")]),t._v(" is appropriate, and how to best leverage its capabilities in order to deliver a high quality user experience.")])])}),[],!1,null,null,null);e.default=n.exports},648:function(t,e,a){t.exports=a.p+"assets/img/facebook.dc222469.png"},649:function(t,e,a){t.exports=a.p+"assets/img/asteroid.5e630d38.jpg"},650:function(t,e,a){t.exports=a.p+"assets/img/hakin-trail.18583b42.jpg"},651:function(t,e,a){t.exports=a.p+"assets/img/html5-example-7.27b5c7c3.png"},652:function(t,e,a){t.exports=a.p+"assets/img/liquid-particles.39f6586a.jpg"},653:function(t,e,a){t.exports=a.p+"assets/img/molecule.afc711a8.jpg"},654:function(t,e,a){t.exports=a.p+"assets/img/strange-attraction.78b644eb.jpg"}}]);