(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1490:function(t,e,s){"use strict";s.r(e);var a=s(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"creating-ios-extensions-siri-intents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-ios-extensions-siri-intents"}},[t._v("#")]),t._v(" Creating iOS Extensions - Siri Intents")]),t._v(" "),a("p",[t._v("This following tutorial will guide you through the process of creating a new iOS extension and in this case also shows you how to configure your app to communicate with Siri using the "),a("a",{attrs:{href:"https://developer.apple.com/reference/intents",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intents framework"),a("OutboundLink")],1),t._v(". This framework is different to some other extensions as it requires special capabilities, provisioning profiles, and privacy-permissions. This document will show you how to do that as well.")]),t._v(" "),a("p",[t._v("The repository for this tutorial can be found open-source on "),a("strong",[a("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/ios-extensions-sample-sirikit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1)]),t._v(" .")]),t._v(" "),a("p",[a("img",{attrs:{src:s(655),alt:"SiriKit"}})]),t._v(" "),a("h2",{attrs:{id:"step-by-step-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-guide"}},[t._v("#")]),t._v(" Step-by-step guide")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Create a native Titanium App with "),a("code",[t._v("appc new -p ios,")]),t._v(" using Appcelerator Studio, or use your existing project.")])]),t._v(" "),a("li",[a("p",[t._v("The name of the example is TestApp, the "),a("code",[t._v("<id>")]),t._v(" in tiapp.xml will be something like "),a("code",[t._v("com.appc.testapp")]),t._v(" .")])]),t._v(" "),a("li",[a("p",[t._v("Open Xcode and create new project: "),a("code",[t._v("File/New Project/Other/Empty")])])]),t._v(" "),a("li",[a("p",[t._v("Name it "),a("code",[t._v("TestApp")]),t._v(" for this tutorial.")])]),t._v(" "),a("li",[a("p",[t._v("Use "),a("code",[t._v("File/New/Target/Application Extension/Intents Extension")]),t._v(" to create the extension target. By default, Xcode will add some demo code to handle Message Intents, but you can implement whatever Intent extension you want here.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(656),alt:"Screen_Shot_2016-12-01_at_08.26.39"}})])]),t._v(" "),a("li",[a("p",[t._v("Name the extension "),a("code",[t._v("testapp")]),t._v(' and change the "Organization Identifier" to '),a("code",[t._v("com.appc.testapp")]),t._v(' so that the "Bundle Identifier" is '),a("code",[t._v("com.appc.testapp.testapp")]),t._v(" - You can also suffix it to something like "),a("code",[t._v("siriextension")]),t._v(", but let's keeps it simple for now.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(657),alt:"Screen_Shot_2016-12-01_at_08.23.35"}})])]),t._v(" "),a("li",[a("p",[t._v("If you wish, you can activate scheme when prompted, but it doesn't matter because we won't need to open the standalone Xcode-project while building.")])]),t._v(" "),a("li",[a("p",[t._v("Create a folder called "),a("code",[t._v("extensions")]),t._v(" in the Titanium project (root) folder and copy the Xcode extension project into it.")])]),t._v(" "),a("li",[a("p",[t._v("In the "),a("code",[t._v("tiapp.xml")]),t._v(", include the following properties in the "),a("code",[t._v("<ios>")]),t._v(" section of it:")]),t._v(" "),a("p",[a("strong",[t._v("tiapp.xml")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("extensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("extension")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("projectPath")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("extensions/TestApp/TestApp.xcodeproj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("target")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("testapp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- or "siriextension" if you name the target differently --\x3e')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("provisioning-profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("device")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("INSERT YOUR EXTENSION PROVISIONING PROFILE ID HERE"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("device")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dist-appstore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dist-adhoc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("provisioning-profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("extension")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("extensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Create or edit your App-ID in the "),a("a",{attrs:{href:"https://developer.apple.com/account/ios/identifier/bundle",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Center"),a("OutboundLink")],1),t._v(' to include the "SiriKit" capability, just like you would do with "Access Groups" or "Push Notifications" for other platform-services. Create one app with a wildcard identifier and one without (e.g. '),a("code",[t._v("com.appc.testapp.*")]),t._v(" and "),a("code",[t._v("com.appc.testapp")]),t._v("). The first one is linked in the "),a("code",[t._v("<provisioning-profiles>")]),t._v(" section of the target, the latter one is used to build the main target (your app) to the device. Note that SiriKit is supported in the Simulator by Apple, because it doesn't support Siri so far (Status: iOS 10 / November 2016).")]),t._v(" "),a("p",[a("img",{attrs:{src:s(658),alt:"devcenter-1"}})])]),t._v(" "),a("li",[a("p",[t._v('Generate two provisioning profiles (one for your main app and one for the Siri target) in the "'),a("a",{attrs:{href:"https://developer.apple.com/account/ios/profile/limited",target:"_blank",rel:"noopener noreferrer"}},[t._v("Provisioning Profiles"),a("OutboundLink")],1),t._v('" section.')])]),t._v(" "),a("li",[a("p",[t._v("Add the following to the plist-section of your "),a("code",[t._v("tiapp.xml")]),t._v(" ("),a("code",[t._v("<tiapp>")]),t._v(" > "),a("code",[t._v("<ios>")]),t._v(" > "),a("code",[t._v("<plist>")]),t._v("):")]),t._v(" "),a("p",[a("strong",[t._v("tiapp.xml")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSSiriUsageDescription"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Can we use Siri to do great stuff?"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Create a file called "),a("code",[t._v("TestApp.entitlements")]),t._v(" in your Titanium project root. Note: if you also use push-entitlements, copy those keys over there as well since it will override the CLI-generated key and paste the following into it:")]),t._v(" "),a("p",[a("strong",[t._v("TestApp.entitlements")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("plist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("PUBLIC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-//Apple//DTD PLIST 1.0//EN"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.apple.com/DTDs/PropertyList-1.0.dtd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.apple.developer.siri"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("You made it!! Use "),a("code",[t._v("appc run -p ios -T device")]),t._v(" or Appcelerator Studio to run your app on the device. Remember that iOS currently does not support Siri on the Simulator.")])]),t._v(" "),a("li",[a("p",[t._v("You can test the changes by talking to Siri:")]),t._v(" "),a("blockquote",[a("p",[t._v("Send a Message with TestApp")])])])]),t._v(" "),a("p",[t._v('It will know that your app uses the Intent Extension for handling messages and will ask you for Siri permissions by displaying the message you specified in your plist. You can also change the UI of the Intent by changing the storyboard in your "testappUI" target or specify multiple intents. Just create another target and link it the same way as we did above.')]),t._v(" "),a("p",[t._v("And finally, use "),a("a",{attrs:{href:"https://www.appcelerator.com/mobile-app-development-products/hyperloop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hyperloop"),a("OutboundLink")],1),t._v(" or a "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/iOS_Module_Development_Guide/iOS_Module_Quick_Start/"}},[t._v("native module")]),t._v(" to handle the Intent's responses. Since there dozens of classes and delegates to implement here, you should look for the ones your Intent uses and it will be notified by your extension. This guide may be updated with some samples for that as well, but you can also check some of the existing guides for that:")],1),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/Intents/Conceptual/SiriIntegrationGuide/SiriDomains.html#//apple_ref/doc/uid/TP40016875-CH9-SW11",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.apple.com/library/content/documentation/Intents/Conceptual/SiriIntegrationGuide/SiriDomains.html#//apple_ref/doc/uid/TP40016875-CH9-SW11"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://jamesonquave.com/blog/adding-siri-to-ios-10-apps-in-swift-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jamesonquave.com/blog/adding-siri-to-ios-10-apps-in-swift-tutorial/"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://willowtreeapps.com/blog/a-deeper-look-at-sirikit-for-ios-10/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://willowtreeapps.com/blog/a-deeper-look-at-sirikit-for-ios-10/"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("Code strong!")])])}),[],!1,null,null,null);e.default=n.exports},655:function(t,e,s){t.exports=s.p+"assets/img/SiriKit.6268d543.png"},656:function(t,e,s){t.exports=s.p+"assets/img/Screen_Shot_2016-12-01_at_08.26.39.128df122.png"},657:function(t,e,s){t.exports=s.p+"assets/img/Screen_Shot_2016-12-01_at_08.23.35.e529f54d.png"},658:function(t,e,s){t.exports=s.p+"assets/img/devcenter-1.25739b80.png"}}]);