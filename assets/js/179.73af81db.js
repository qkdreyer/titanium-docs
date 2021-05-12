(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1198:function(e,t,a){"use strict";a.r(t);var i=a(21),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"android-platform-overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-overview"}},[e._v("#")]),e._v(" Android Platform Overview")]),e._v(" "),i("h2",{attrs:{id:"objective"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),i("p",[e._v("In order to build best-of-breed, native apps, it's critical that we understand the unique characteristics of each platform for which we plan to develop. In this section, you will examine the concepts, features, and components that identify Android apps.")]),e._v(" "),i("h2",{attrs:{id:"contents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),i("p",[e._v("Android has a multitude of platform specific features that we need to be aware of as Titanium developers. Everything from its user interface components to its low level interfaces for Services and Intents make Android stand apart from other mobile operating systems. While Titanium's Javascript API does the lion's share of the work in terms of abstracting away these details, it's still very important to understand them in order to build high quality apps. The following content in this section will address each of the most important features of the Android operating system, as well as discuss how they are handled from the perspective of the Titanium API.")]),e._v(" "),i("h3",{attrs:{id:"user-interface-conventions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#user-interface-conventions"}},[e._v("#")]),e._v(" User interface conventions")]),e._v(" "),i("p",[e._v('You will find quickly when researching Android that the UI can vary significantly among devices. While there is a standard, "vanilla" UI common to all Android operating systems, this is rarely seen on device. This is because Android is an open source, and thus extensible, mobile operating system. Mobile device vendors, like Motorola and HTC, are free to take the base UI and enhance it as they see fit. Android seeks to enable each vendor\'s own vision of what Android should be on their device, not dictate it.')]),e._v(" "),i("p",[e._v('The following screens illustrate some of the common user interface components offered by the "vanilla" Android UI.')]),e._v(" "),i("p",[i("img",{attrs:{src:a(748),alt:"android_ui"}})]),e._v(" "),i("h4",{attrs:{id:"hardware-buttons"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hardware-buttons"}},[e._v("#")]),e._v(" Hardware buttons")]),e._v(" "),i("p",[e._v('Android devices feature four dedicated-function "hardware" buttons: Back, Menu, Home, and Search. Depending on the device, these buttons can be physical buttons or touch-based user interface buttons. The location and order of those buttons varies between device vendors.')]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Back – tap to return to the previous activity in the stack; if none remain in the stack you're returned to the home screen.")])]),e._v(" "),i("li",[i("p",[e._v("Home – return immediately to the home screen, pausing any currently opened apps")])]),e._v(" "),i("li",[i("p",[e._v("Menu – display a menu of activity-specific options")])]),e._v(" "),i("li",[i("p",[e._v("Search – display search functionality, either in-app or system-wide")])])]),e._v(" "),i("p",[e._v("The Home button behavior cannot be overridden, but you can interact with the Back, Search and Menu buttons.")]),e._v(" "),i("p",[e._v("To override the default behavior for the Back button, add an event listener for the "),i("a",{attrs:{href:"#!/api/Titanium.UI.Window-event-androidback"}},[e._v("Window.androidback")]),e._v(" event. (Prior to Release 3.0, this event was named "),i("a",{attrs:{href:"#!/api/Titanium.UI.Window-event-android:back"}},[e._v("Window.android:back")]),e._v(". The older name is now deprecated.)")]),e._v(" "),i("p",[e._v("To receive an event when the Search button is pressed, add an event listener for the "),i("a",{attrs:{href:"#!/api/Titanium.UI.Window-event-androidsearch"}},[e._v("Window.androidsearch")]),e._v(" event. (Prior to Release 3.0, this event was named "),i("a",{attrs:{href:"#!/api/Titanium.UI.Window-event-android:search"}},[e._v("Window.android:search")]),e._v(". The older name is now deprecated.)")]),e._v(" "),i("p",[e._v("You cannot directly override the Menu button, but you can customize the menu displayed when the user presses the Menu button. See "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Android_UI_Components_and_Conventions/#android-menus"}},[e._v("Android Menus in the Android UI Components and Conventions")]),e._v(" section for more information.")],1),e._v(" "),i("h4",{attrs:{id:"screen-sizes-and-densities"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#screen-sizes-and-densities"}},[e._v("#")]),e._v(" Screen sizes and densities")]),e._v(" "),i("p",[e._v("Android devices vary greatly in screen size and density. "),i("strong",[e._v("Screen size")]),e._v(' represents the physical size of the display. Measured diagonally, it can range from quite small (2.8 inches/71 mm) to large (4.3 inches/110mm) to tablet sizes (10.1 inches/256 mm). Android divides these into generally four categories: small, normal, large, and xlarge which are then denoted by their density-independent pixel measurements which Google labels "dp." Each density-independent pixel is equivalent to one physical pixel on a 160 dpi screen.')]),e._v(" "),i("ul",[i("li",[i("p",[e._v("small screens are at least 426dp x 320dp")])]),e._v(" "),i("li",[i("p",[e._v("normal screens are at least 470dp x 320dp")])]),e._v(" "),i("li",[i("p",[e._v("large screens are at least 640dp x 480dp")])]),e._v(" "),i("li",[i("p",[e._v("xlarge screens are at least 960dp x 720dp")])])]),e._v(" "),i("p",[e._v('Aspect ratios vary as well, though Android generally lumps them into two buckets: long and "notlong" with the latter corresponding to devices with an aspect ratio not significantly different than the 320 x 470 "normal" screen.')]),e._v(" "),i("p",[e._v("Finally, density describes the actual pixels (aka dots) per square inch resolution of the screen. These range between:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("ldpi screens are roughly 120 dpi")])]),e._v(" "),i("li",[i("p",[e._v('mdpi screens are roughly 160 dpi (this is the baseline "normal" density)')])]),e._v(" "),i("li",[i("p",[e._v("tvdpi screens are roughly 213 dpi")])]),e._v(" "),i("li",[i("p",[e._v("hdpi screens are roughly 240 dpi")])]),e._v(" "),i("li",[i("p",[e._v("xhdpi screens are roughly 320 dpi")])]),e._v(" "),i("li",[i("p",[e._v("xxhdpi screens are roughly 480 dpi")])]),e._v(" "),i("li",[i("p",[e._v("xxxhdpi screens are roughly 640 dpi")])])]),e._v(" "),i("p",[e._v('Titanium enables you to simply scale your user interface to fit the device\'s screen. But it also offers convenient features for specifically handling assets and layout for various screen sizes. You should plan to test on multiple devices if you want your user interface to be "pixel perfect" on all devices.')]),e._v(" "),i("p",[e._v("There is also a nodpi option where your images will not be scaled by the system if you do not want to create various assets for each density.")]),e._v(" "),i("h4",{attrs:{id:"comparison-with-ios"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#comparison-with-ios"}},[e._v("#")]),e._v(" Comparison with iOS")]),e._v(" "),i("p",[e._v("The Android user interface features some key differences that iOS users should note.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Tabs are at the top rather than bottom.")])]),e._v(" "),i("li",[i("p",[e._v("Window title bars don't include navigation buttons. Navigation functionality is provided by the hardware Back and Menu buttons instead.")])]),e._v(" "),i("li",[i("p",[e._v('The Navigation bar does more than just give battery and signal-strength info. It is the common location for system and app notification messages. Likewise, Android doesn\'t use the "badge" indicator like iOS.')])])]),e._v(" "),i("h3",{attrs:{id:"application-components"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application-components"}},[e._v("#")]),e._v(" Application components")]),e._v(" "),i("p",[e._v("Android applications are built from the following components. Titanium shields you from some of the particulars, though it also gives you the tools to interact with these components when you want to.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Activities")])]),e._v(" "),i("li",[i("p",[e._v("Services")])]),e._v(" "),i("li",[i("p",[e._v("Intents")])])]),e._v(" "),i("p",[e._v("(We're simplifying things a bit here by ignoring content providers and broadcast receivers. Read Google's "),i("a",{attrs:{href:"http://developer.android.com/guide/topics/fundamentals.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android Fundamentals"),i("OutboundLink")],1),e._v(" guide for more detailed information.)")]),e._v(" "),i("h4",{attrs:{id:"activities"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#activities"}},[e._v("#")]),e._v(" Activities")]),e._v(" "),i("p",[e._v('An Android app is made up of one or more activities. Each activity represents a "single screen with a user interface." For example, a window that lists messages in an inbox would be an activity. The window in which you read one of those messages would be a separate activity. The set of activities in an app work together to provide the functionality of that app.')]),e._v(" "),i("p",[e._v("On of the most powerful features of Android activities is that apps can start each other's activities. Let's say you want the user to be able to snap a photo within your app. You could write all the code to display the camera's live view along with the buttons that make up the photo-snapping experience. But with Android, you don't have to. The built-in Camera app has an activity that does all that already. All your app needs to do is launch the Camera app's activity and define what should happen with the data that's returned. Other apps can call on the activities that are defined within your app as well.")]),e._v(" "),i("p",[e._v("This shared-activity scheme is a key strength of the Android platform. Apps can share functionality, and they don't even need to know how those other apps work. Your app doesn't need to know how Camera's activity grabs the photo. You can just deal with the image that's returned. This activity sharing mechanism is what enables the \"Share\" button functionality included in many Android apps. This is discussed in more detail in the Intent section.")]),e._v(" "),i("p",[e._v("Each activity is listed in the "),i("a",{attrs:{href:"http://developer.android.com/guide/topics/manifest/manifest-intro.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AndroidManifest.xml file"),i("OutboundLink")],1),e._v(". Notations in that file describe which activities are published (and thus available for other apps to call on). Titanium let's you create activities – a \"heavy weight\" window that corresponds to an Android activity. When the tiapp.xml file and your code is parsed by Titanium's compile scripts, appropriate entries are created in the AndroidManifest.xml file.")]),e._v(" "),i("p",[e._v('An Android Activity is not created until the "heavy weight" window is opened. Before the window is opened, the '),i("code",[e._v("activity")]),e._v(" property refers to a plain JS object, which can be used to setup "),i("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Activity",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ti.Android.Activity"),i("OutboundLink")],1),e._v(" properties. Once the window is opened, the Android Activity is created, then the "),i("code",[e._v("activity")]),e._v(" property can use the "),i("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Activity",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ti.Android.Activity"),i("OutboundLink")],1),e._v(" methods.")]),e._v(" "),i("p",[e._v("You'll find more info on the Android developer's "),i("a",{attrs:{href:"http://developer.android.com/reference/android/app/Activity.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Activity"),i("OutboundLink")],1),e._v(" guide.")]),e._v(" "),i("h5",{attrs:{id:"services"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[e._v("#")]),e._v(" Services")]),e._v(" "),i("p",[e._v("Services are \"long running\" app components that run without user interaction. You might use a service to periodically check a network resource or you play music while your app is in the background. Services are not separate threads or processes. They're not a way to offload work from your main application. You can create services by calling on Titanium's "),i("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Service-object.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ti.Android.Service"),i("OutboundLink")],1),e._v(" module.")]),e._v(" "),i("p",[e._v("More information can be found at the Android developer's "),i("a",{attrs:{href:"http://developer.android.com/reference/android/app/Service.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("services"),i("OutboundLink")],1),e._v(" page or the "),i("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Service-object.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ti.Android.Service"),i("OutboundLink")],1),e._v(" page.")]),e._v(" "),i("h4",{attrs:{id:"intents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#intents"}},[e._v("#")]),e._v(" Intents")]),e._v(" "),i("p",[e._v("Intents are messaging objects that hold data passed between activities, sent to or from a background service, or sent by system broadcasts. Intents enable your app to interact with the activities available on the user's device without knowing which apps the user has installed.")]),e._v(" "),i("p",[e._v("Earlier we stated that you can launch another app's activities. In truth, for security reasons your app can't directly start another app's activities. Instead, your app sends an Intent, which contains a URI to the content and instructions as to how it should be handled. You can create an "),i("em",[e._v("explicit")]),e._v(" iIntent, in which you request that a specific activity be launched. If it's available, Android launches it for on behalf of your app. The more powerful option is to use an "),i("em",[e._v("implicit")]),e._v(" intent, which will return a list of all apps available on a mobile device that are capable of handling your Intent.")]),e._v(" "),i("p",[e._v('Think back to the "Share" button functionality described earlier. Your app might publish some text via an intent, thereby sending a request for a list of all the apps that could handle that data. The OS would present a list of suitable apps to the user, who would choose which app to use. The user could select a Twitter client, email app, or any other app that can handle text. With properly formatted Intents, you can add large amounts of functionality to your apps simply by leveraging apps already installed on the device.')]),e._v(" "),i("h5",{attrs:{id:"intent-filters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#intent-filters"}},[e._v("#")]),e._v(" Intent Filters")]),e._v(" "),i("p",[e._v("Intent filters are created through entries in the AndroidManifest.xml file. They are used to describe the types of Intents an Activity can accept. Android uses intent filters to determine which activities can respond to an intent. For example, this is how Android narrows the list of all possible apps to just those shown on a particular Share menu. See the "),i("a",{attrs:{href:"http://developer.android.com/guide/topics/intents/intents-filters.html#ifs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android docs"),i("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),i("p",[e._v("More information about intents and intent filters are available from the "),i("a",{attrs:{href:"http://developer.android.com/guide/topics/intents/intents-filters.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android docs"),i("OutboundLink")],1),e._v(" or the "),i("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("Titanium Android module"),i("OutboundLink")],1),e._v(" page.")]),e._v(" "),i("h3",{attrs:{id:"references-and-further-reading"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[e._v("#")]),e._v(" References and further reading")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Google's "),i("a",{attrs:{href:"http://developer.android.com/guide/topics/fundamentals.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android Fundamentals"),i("OutboundLink")],1),e._v(" document is recommended reading")])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"http://developer.android.com/guide/practices/screens_support.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Supporting Multiple Screens"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"http://developer.android.com/resources/dashboard/screens.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Screen Sizes and Densities in use now"),i("OutboundLink")],1)])])]),e._v(" "),i("h2",{attrs:{id:"summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),i("p",[e._v("In this chapter, you learned about some of the characteristics that define Android and Android apps. You looked at user interface components, device buttons, and application components, such as activities and intents. Next we'll learn what makes iOS unique from other mobile operating systems, and how we can leverage these features with Titanium.")])])}),[],!1,null,null,null);t.default=n.exports},748:function(e,t,a){e.exports=a.p+"assets/img/android_ui.246cd9d9.png"}}]);