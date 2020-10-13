(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1974:function(t,o,e){"use strict";e.r(o);var i=e(21),a=Object(i.a)({},(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"packaging-titanium-applications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#packaging-titanium-applications"}},[t._v("#")]),t._v(" Packaging Titanium Applications")]),t._v(" "),i("h2",{attrs:{id:"introduction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),i("p",[t._v("After successfully running, testing and debugging your application, you are ready to package it, so it can be distributed in a mobile application store.")]),t._v(" "),i("p",[i("img",{attrs:{src:e(542),alt:"Packaging"}})]),t._v(" "),i("p",[t._v("To package your application for distribution, first select the project in the "),i("strong",[t._v("Project Explorer")]),t._v(" view, then in the global tool bar, select "),i("strong",[t._v("Publish")]),t._v(" from the "),i("strong",[t._v("Launch Mode")]),t._v(" drop-down list and a distributor from the "),i("strong",[t._v("Target")]),t._v(" drop-down list. If the "),i("strong",[t._v("Launch Automatically")]),t._v(" option is enabled under the "),i("strong",[t._v("Target")]),t._v(" drop-down list, the application will be automatically launched after the target is selected. If not, you need to click the "),i("strong",[t._v("Launch")]),t._v(" button to start the build process. The "),i("strong",[t._v("Distribute")]),t._v(" wizard appears asking you to fill in key pieces of information. After you publish an application for the first time, the next subsequent invocation of the "),i("strong",[t._v("Distribute")]),t._v(" wizard may not ask you for the same exact information and uses your previous settings.")]),t._v(" "),i("p",[t._v("Alternatively, you can select "),i("strong",[t._v("Configuration...")]),t._v(" to create custom configurations per application. The first run of the "),i("strong",[t._v("Distribute")]),t._v(" wizard and "),i("strong",[t._v("Configuration")]),t._v(" wizard provide the same options.")]),t._v(" "),i("h2",{attrs:{id:"android"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[t._v("#")]),t._v(" Android")]),t._v(" "),i("p",[t._v("To package an Android application, first select the project in the "),i("strong",[t._v("Project Explorer")]),t._v(" view, then in the global tool bar, select "),i("strong",[t._v("Publish")]),t._v(" from the "),i("strong",[t._v("Launch Mode")]),t._v(" drop-down list and "),i("strong",[t._v("Android App Store")]),t._v(" from the "),i("strong",[t._v("Device")]),t._v(" drop-down list. A wizard appears asking you key pieces of information to package your application:")]),t._v(" "),i("ul",[i("li",[i("p",[i("strong",[t._v("Distribution Location")]),t._v("**😗* Path where the Android application package (APK) file will be copied to.")])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("Keystore Location")]),t._v(": Path to your keystore file that is used to sign your application. Click the "),i("strong",[t._v("New")]),t._v(" button to create a new keystore.")])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("Keystore Password")]),t._v("**😗* Password to your keystore.")])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("Key Alias")]),t._v(": Alias associated with your application's certificate.")])])]),t._v(" "),i("p",[t._v("Click the "),i("strong",[t._v("Publish")]),t._v(" button once you have entered all of the above information. Studio builds your application and generates an APK file in the specified location.")]),t._v(" "),i("p",[t._v("Before uploading your APK file to the Google Play store or another Android marketplace for distribution, you can verify and test the APK file.")]),t._v(" "),i("p",[t._v("To verify your APK is correctly signed, run the following command:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("jarsigner -verify -verbose YOUR_PACKAGE.apk\n")])])]),i("p",[t._v("To install your APK file to a single Android device or emulator, run the following command:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("android-sdk/platform-tools/adb install YOUR_PACKAGE.apk\n")])])]),i("p",[t._v("Refer to "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Android_apps/"}},[t._v("Distributing Android apps")]),t._v(" for more information about the Google Play store and generating a keypair and certificate.")],1),t._v(" "),i("h2",{attrs:{id:"ios"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[t._v("#")]),t._v(" iOS")]),t._v(" "),i("p",[t._v("The process of packaging iOS applications is more involved. Refer to "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/"}},[t._v("Distributing iOS apps")]),t._v(" for more information about distributing your application through the App Store or using the ad hoc method to distribute IPA files to testers.")],1),t._v(" "),i("h2",{attrs:{id:"mobile-web"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mobile-web"}},[t._v("#")]),t._v(" Mobile Web")]),t._v(" "),i("p",[t._v("To package a Mobile Web application, first select the project in the "),i("strong",[t._v("Project Explorer")]),t._v(" view, then in the global tool bar, select "),i("strong",[t._v("Publish")]),t._v(" from the "),i("strong",[t._v("Launch Mode")]),t._v(" drop-down list and "),i("strong",[t._v("Mobile Web")]),t._v(" from the "),i("strong",[t._v("Device")]),t._v(" drop-down list. A wizard appears asking you how you want to package your mobile project. You can either:")]),t._v(" "),i("ul",[i("li",[i("p",[i("strong",[t._v("Copy Mobile Web app to a directory in the local file system")]),t._v(": this option copies the Mobile Web app to the specified location. These files can be copied to a local or remote web site for deployment.")])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("Copy Mobile Web app to an exisiting project")]),t._v(": this option copies the Mobile Web app to an existing project.")])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("Create a new project for the Mobile Web app")]),t._v(": this option creates a new Web project (not a Mobile project) based on your Mobile Web app.")])])]),t._v(" "),i("p",[t._v("Click the "),i("strong",[t._v("Publish")]),t._v(" button. Studio builds your Mobile Web app and copies it to the specified location.")])])}),[],!1,null,null,null);o.default=a.exports},542:function(t,o,e){t.exports=e.p+"assets/img/Packaging.632eaefe.png"}}]);