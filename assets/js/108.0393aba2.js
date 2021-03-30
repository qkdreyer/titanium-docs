(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1145:function(t,e,v){"use strict";v.r(e);var o=v(21),_=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"installing-the-ios-sdk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-ios-sdk"}},[t._v("#")]),t._v(" Installing the iOS SDK")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),o("p",[t._v("Due to Apple's terms and conditions, the iOS SDK may only be installed on Apple products, hence only instructions for installing to Apple's macOS operating system are provided here.")])]),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("p",[t._v("This guide describes where to obtain and how to install the Xcode developer tools including the iOS and watchOS SDKs.")]),t._v(" "),o("h2",{attrs:{id:"compatibility-and-download"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-and-download"}},[t._v("#")]),t._v(" Compatibility and download")]),t._v(" "),o("p",[t._v("Titanium requires Xcode to be installed in order for you to develop iOS applications.")]),t._v(" "),o("p",[o("img",{attrs:{src:"/images/guide/download/attachments/29004836/download_05.png",alt:"download_05"}})]),t._v(" "),o("p",[t._v("There are two ways to obtain Xcode, the application that installs and manages iOS SDKs:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Launch the "),o("em",[t._v("App Store")]),t._v(" application, found in the "),o("code",[t._v("Applications")]),t._v(' folder, and search for and install "Xcode" (includes the stable iOS and watchOS SDKs).')])]),t._v(" "),o("li",[o("p",[t._v("Enroll with the Apple Developer website and browse the "),o("a",{attrs:{href:"https://developer.apple.com/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Center"),o("OutboundLink")],1),t._v(" page to manually download the installer application (includes all previously-released iOS SDKs and new Beta versions).")])])]),t._v(" "),o("p",[t._v("Both of the above options are free of charge, although may require credit card details to be entered. Since 2016, you can also test your apps on your device using the free Apple developer program. If you wish to deploy your applications to the App Store for production, however, you will need to become a member of the "),o("em",[t._v("iOS Developer Program")]),t._v(", by way of an annual subscription charge of $99 at the time of writing.")]),t._v(" "),o("h3",{attrs:{id:"xcode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#xcode"}},[t._v("#")]),t._v(" Xcode")]),t._v(" "),o("p",[t._v("To develop for iOS, Titanium requires Apple's Xcode suite of tools.")]),t._v(" "),o("p",[t._v("Each Titanium SDK supports a specific range of Xcode versions, shown in the table below.")]),t._v(" "),o("h4",{attrs:{id:"supported-versions-of-xcode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-of-xcode"}},[t._v("#")]),t._v(" Supported versions of Xcode")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Titanium SDK Version")]),t._v(" "),o("th",[t._v("Min Xcode Version")]),t._v(" "),o("th",[t._v("Max Xcode Version")]),t._v(" "),o("th",[t._v("Notes")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("9.3.0 - latest")]),t._v(" "),o("td",[t._v("11.0.0")]),t._v(" "),o("td",[t._v("12.x")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("9.2.0 - 9.2.2")]),t._v(" "),o("td",[t._v("11.0.0")]),t._v(" "),o("td",[t._v("12.x")]),t._v(" "),o("td",[t._v("Full support for iOS 14 and beta support for macOS via Mac Catalyst")])]),t._v(" "),o("tr",[o("td",[t._v("9.0.0 - 9.1.0")]),t._v(" "),o("td",[t._v("9.0.0")]),t._v(" "),o("td",[t._v("11.x")]),t._v(" "),o("td",[t._v("Dropped iOS 9 support")])]),t._v(" "),o("tr",[o("td",[t._v("8.3.0 - 8.3.1")]),t._v(" "),o("td",[t._v("8.0.0")]),t._v(" "),o("td",[t._v("11.x")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("8.2.0 - 8.2.1")]),t._v(" "),o("td",[t._v("8.0.0")]),t._v(" "),o("td",[t._v("11.x")]),t._v(" "),o("td",[t._v("Full support for iOS 13")])]),t._v(" "),o("tr",[o("td",[t._v("8.0.0 - 8.1.1")]),t._v(" "),o("td",[t._v("8.0.0")]),t._v(" "),o("td",[t._v("10.x")]),t._v(" "),o("td")])])]),t._v(" "),o("h4",{attrs:{id:"unsupported-versions-of-xcode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unsupported-versions-of-xcode"}},[t._v("#")]),t._v(" Unsupported versions of Xcode")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Titanium SDK Version")]),t._v(" "),o("th",[t._v("Min Xcode Version")]),t._v(" "),o("th",[t._v("Max Xcode Version")]),t._v(" "),o("th",[t._v("Notes")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("7.5.0 - 7.5.2")]),t._v(" "),o("td",[t._v("8.0.0")]),t._v(" "),o("td",[t._v("10.x")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("7.4.0 - 7.4.2")]),t._v(" "),o("td",[t._v("8.0.x")]),t._v(" "),o("td",[t._v("10.x")]),t._v(" "),o("td",[t._v("Full support for iOS 12")])]),t._v(" "),o("tr",[o("td",[t._v("7.0.0 - 7.3.1")]),t._v(" "),o("td",[t._v("6.0.x")]),t._v(" "),o("td",[t._v("9.0.x")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("6.3.0")]),t._v(" "),o("td",[t._v("6.0.x")]),t._v(" "),o("td",[t._v("9.0.x")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("6.2.x")]),t._v(" "),o("td",[t._v("6.0.x")]),t._v(" "),o("td",[t._v("9.0.x")]),t._v(" "),o("td",[t._v("Full support for iOS 11")])]),t._v(" "),o("tr",[o("td",[t._v("5.5.x - 6.1.x")]),t._v(" "),o("td",[t._v("6.0.x")]),t._v(" "),o("td",[t._v("8.0.x")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("5.0.0 - 5.4.0")]),t._v(" "),o("td",[t._v("6.0.x")]),t._v(" "),o("td",[t._v("7.0.x")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("4.0.0 - 4.1.x")]),t._v(" "),o("td",[t._v("6.0.x")]),t._v(" "),o("td",[t._v("6.4.x")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("3.4.0 - 3.5.x")]),t._v(" "),o("td",[t._v("6.0.x")]),t._v(" "),o("td",[t._v("6.0.x")]),t._v(" "),o("td")])])]),t._v(" "),o("p",[t._v("Deploying for iOS 11.x requires Xcode 9.x, and macOS 10.12.4 and later.")]),t._v(" "),o("p",[t._v("Deploying for iOS 12.x requires Xcode 10.x, and macOS 10.13.6 and later.")]),t._v(" "),o("p",[t._v("As per apple guidelines, Starting April 2020 all apps submitted to App Store must be built with iOS 13 SDK or later, included in Xcode 11 or later.")]),t._v(" "),o("h3",{attrs:{id:"ios-sdk-target-ios-platform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-sdk-target-ios-platform"}},[t._v("#")]),t._v(" iOS SDK / Target iOS platform")]),t._v(" "),o("p",[t._v("Each Titanium SDK supports a specific range of iOS base SDKs and deployment targets. To build an application for a specific iOS target version, you must have the appropriate iOS SDK installed.")]),t._v(" "),o("h4",{attrs:{id:"supported-versions-of-ios-sdk-target-ios-platform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-of-ios-sdk-target-ios-platform"}},[t._v("#")]),t._v(" Supported versions of iOS SDK / Target iOS platform")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Titanium SDK version")]),t._v(" "),o("th",[t._v("Minimum iOS SDK version")]),t._v(" "),o("th",[t._v("Maximum iOS SDK version")]),t._v(" "),o("th",[t._v("Minimum target iOS version")]),t._v(" "),o("th",[t._v("Maximum target iOS version")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("9.2.0 - latest")]),t._v(" "),o("td",[t._v("13.0.0")]),t._v(" "),o("td",[t._v("14.x")]),t._v(" "),o("td",[t._v("10.0")]),t._v(" "),o("td",[t._v("14.x")])]),t._v(" "),o("tr",[o("td",[t._v("9.0.0 - 9.1.2")]),t._v(" "),o("td",[t._v("11.0.0")]),t._v(" "),o("td",[t._v("13.x")]),t._v(" "),o("td",[t._v("10.0")]),t._v(" "),o("td",[t._v("13.x")])]),t._v(" "),o("tr",[o("td",[t._v("8.2.0 - 8.3.1")]),t._v(" "),o("td",[t._v("10.0.0")]),t._v(" "),o("td",[t._v("13.x")]),t._v(" "),o("td",[t._v("9.0")]),t._v(" "),o("td",[t._v("13.x")])]),t._v(" "),o("tr",[o("td",[t._v("8.0.0 - 8.1.1")]),t._v(" "),o("td",[t._v("10.0.0")]),t._v(" "),o("td",[t._v("12.x")]),t._v(" "),o("td",[t._v("9.0")]),t._v(" "),o("td",[t._v("12.x")])])])]),t._v(" "),o("h4",{attrs:{id:"unsupported-versions-of-ios-sdk-target-ios-platform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unsupported-versions-of-ios-sdk-target-ios-platform"}},[t._v("#")]),t._v(" Unsupported versions of iOS SDK / Target iOS platform")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Titanium SDK version")]),t._v(" "),o("th",[t._v("Minimum SDK version")]),t._v(" "),o("th",[t._v("Maximum SDK version")]),t._v(" "),o("th",[t._v("Minimum target iOS version")]),t._v(" "),o("th",[t._v("Maximum target iOS version")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("7.4.0 - 7.5.x")]),t._v(" "),o("td",[t._v("8.0.0")]),t._v(" "),o("td",[t._v("12.x")]),t._v(" "),o("td",[t._v("8.0")]),t._v(" "),o("td",[t._v("12.x")])]),t._v(" "),o("tr",[o("td",[t._v("7.0.0 - 7.3.x")]),t._v(" "),o("td",[t._v("8.0.0")]),t._v(" "),o("td",[t._v("11.x")]),t._v(" "),o("td",[t._v("8.0")]),t._v(" "),o("td",[t._v("12.x")])]),t._v(" "),o("tr",[o("td",[t._v("6.2.0 - 6.3.x")]),t._v(" "),o("td",[t._v("8.0.x")]),t._v(" "),o("td",[t._v("11.x")]),t._v(" "),o("td",[t._v("8.0")]),t._v(" "),o("td",[t._v("12.x")])]),t._v(" "),o("tr",[o("td",[t._v("6.0.0 - 6.1.x")]),t._v(" "),o("td",[t._v("8.0.x")]),t._v(" "),o("td",[t._v("10.x")]),t._v(" "),o("td",[t._v("8.0")]),t._v(" "),o("td",[t._v("12.x")])]),t._v(" "),o("tr",[o("td",[t._v("5.5.x")]),t._v(" "),o("td",[t._v("8.0.x")]),t._v(" "),o("td",[t._v("10.x")]),t._v(" "),o("td",[t._v("7.1.x")]),t._v(" "),o("td",[t._v("9.3.x")])]),t._v(" "),o("tr",[o("td",[t._v("5.0.0 - 5.4.x")]),t._v(" "),o("td",[t._v("8.0.x")]),t._v(" "),o("td",[t._v("9.3.x")]),t._v(" "),o("td",[t._v("7.1.x")]),t._v(" "),o("td",[t._v("9.3.x")])]),t._v(" "),o("tr",[o("td",[t._v("4.0.0 - 4.1.x")]),t._v(" "),o("td",[t._v("8.0.x")]),t._v(" "),o("td",[t._v("8.4.x")]),t._v(" "),o("td",[t._v("7.1.x")]),t._v(" "),o("td",[t._v("8.4.x")])]),t._v(" "),o("tr",[o("td",[t._v("3.4.0 - 3.5.x")]),t._v(" "),o("td",[t._v("8.0.x")]),t._v(" "),o("td",[t._v("8.0.x")]),t._v(" "),o("td",[t._v("7.1.x")]),t._v(" "),o("td",[t._v("8.0.x")])]),t._v(" "),o("tr",[o("td",[t._v("3.2.2 - 3.3.0")]),t._v(" "),o("td",[t._v("7.0.x")]),t._v(" "),o("td",[t._v("7.1.x")]),t._v(" "),o("td",[t._v("6.1.x")]),t._v(" "),o("td",[t._v("7.1.x")])]),t._v(" "),o("tr",[o("td",[t._v("3.1.3 - 3.2.1")]),t._v(" "),o("td",[t._v("7.0.x")]),t._v(" "),o("td",[t._v("7.0.x")]),t._v(" "),o("td",[t._v("6.1.x")]),t._v(" "),o("td",[t._v("7.0.x")])]),t._v(" "),o("tr",[o("td",[t._v("3.1.1 - 3.1.2")]),t._v(" "),o("td",[t._v("5.0.x")]),t._v(" "),o("td",[t._v("6.1.x")]),t._v(" "),o("td",[t._v("5.0.x")]),t._v(" "),o("td",[t._v("6.1.x")])]),t._v(" "),o("tr",[o("td",[t._v("3.1.0")]),t._v(" "),o("td",[t._v("4.3.x")]),t._v(" "),o("td",[t._v("6.1.x")]),t._v(" "),o("td",[t._v("4.3.x")]),t._v(" "),o("td",[t._v("6.1.x")])]),t._v(" "),o("tr",[o("td",[t._v("2.1.3 - 3.0.x")]),t._v(" "),o("td",[t._v("4.0.x")]),t._v(" "),o("td",[t._v("6.1.x")]),t._v(" "),o("td",[t._v("4.0.x")]),t._v(" "),o("td",[t._v("6.1.x")])]),t._v(" "),o("tr",[o("td",[t._v("2.1.0 - 2.1.2")]),t._v(" "),o("td",[t._v("4.0.x")]),t._v(" "),o("td",[t._v("5.1.x")]),t._v(" "),o("td",[t._v("4.0.x")]),t._v(" "),o("td",[t._v("5.1.x")])]),t._v(" "),o("tr",[o("td",[t._v("2.0.x")]),t._v(" "),o("td",[t._v("4.0.x")]),t._v(" "),o("td",[t._v("5.1.x")]),t._v(" "),o("td",[t._v("4.0.x")]),t._v(" "),o("td",[t._v("5.1.x")])]),t._v(" "),o("tr",[o("td",[t._v("1.8.x")]),t._v(" "),o("td",[t._v("4.0.x")]),t._v(" "),o("td",[t._v("5.0.x")]),t._v(" "),o("td",[t._v("4.0.x")]),t._v(" "),o("td",[t._v("5.0.x")])]),t._v(" "),o("tr",[o("td",[t._v("1.7.1+")]),t._v(" "),o("td",[t._v("3.1.2")]),t._v(" "),o("td",[t._v("5.0.x")]),t._v(" "),o("td",[t._v("3.1.2")]),t._v(" "),o("td",[t._v("5.0.x")])])])]),t._v(" "),o("h2",{attrs:{id:"installation-ios-only"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation-ios-only"}},[t._v("#")]),t._v(" Installation (iOS-only)")]),t._v(" "),o("p",[t._v("Note that the typical file system location of this software can be found in the "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/#macos-software-locations"}},[t._v("mac OS Software Locations")]),t._v(" section of these guides.")],1),t._v(" "),o("h3",{attrs:{id:"install-xcode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-xcode"}},[t._v("#")]),t._v(" Install Xcode")]),t._v(" "),o("p",[o("strong",[t._v("To install the current version of Xcode")]),t._v(", use the Mac App Store:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Launch the "),o("strong",[t._v("App Store")]),t._v(" application from the "),o("em",[t._v("Applications")]),t._v(" folder")])]),t._v(" "),o("li",[o("p",[t._v('Search for "Xcode"')])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Free")]),t._v(" button, then "),o("strong",[t._v("Install App")]),t._v(" button")])])]),t._v(" "),o("p",[t._v("The App Store starts the download and installation process.")]),t._v(" "),o("p",[o("strong",[t._v("To install previous versions of Xcode")]),t._v(", download and run the installer application from "),o("a",{attrs:{href:"https://developer.apple.com/download/more/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Center: Downloads for Apple Developers"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Go to "),o("a",{attrs:{href:"https://developer.apple.com/download/more/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.apple.com/download/more/"),o("OutboundLink")],1),t._v(" (Requires an Apple Developer account)")])]),t._v(" "),o("li",[o("p",[t._v('Search for "Xcode"')])]),t._v(" "),o("li",[o("p",[t._v("Locate the Xcode version you want to install and click the link to start downloading it.")])]),t._v(" "),o("li",[o("p",[t._v("Once the download completes, launch the installer application and follow the directions.")])])]),t._v(" "),o("h3",{attrs:{id:"launch-xcode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#launch-xcode"}},[t._v("#")]),t._v(" Launch Xcode")]),t._v(" "),o("p",[t._v("To confirm that Xcode has been installed correctly, launch it from "),o("em",[t._v("Applications.")]),t._v(" When installing Xcode the first time, you are also prompted to accept the End User License Agreement (EULA) and are being asked to installed required components. These will be downloaded once accepted.")]),t._v(" "),o("h3",{attrs:{id:"update-xcode-using-xcode-installer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-xcode-using-xcode-installer"}},[t._v("#")]),t._v(" Update Xcode using Xcode installer")]),t._v(" "),o("p",[t._v("When new versions of the SDK are released, launch the "),o("em",[t._v("App Store")]),t._v(" and click the "),o("strong",[t._v("Updates")]),t._v(" icon. If Xcode appears, click the "),o("strong",[t._v("Update")]),t._v(" button.")]),t._v(" "),o("h2",{attrs:{id:"install-the-command-line-tools-and-previous-simulators"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-the-command-line-tools-and-previous-simulators"}},[t._v("#")]),t._v(" Install the Command Line tools and previous simulators")]),t._v(" "),o("p",[t._v("The Xcode command-line tools are required for native add-on module development and recommended to be installed for mobile application development. You can either install the command-line tools from Xcode or by running the xcode-select command from a terminal.")]),t._v(" "),o("p",[t._v("To install the command-line tools or older simulator from Xcode:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Launch Xcode.")])]),t._v(" "),o("li",[o("p",[t._v("Select "),o("strong",[t._v("Xcode")]),t._v(" > "),o("strong",[t._v("Preferences.")])])]),t._v(" "),o("li",[o("p",[t._v("Select the "),o("strong",[t._v("Components")]),t._v(" icon and click the "),o("strong",[t._v("Install")]),t._v(" button next to the Command Line Tools item.")])]),t._v(" "),o("li",[o("p",[t._v("If desired, you can install older simulators.")])])]),t._v(" "),o("p",[t._v('To install the command-line tools from a terminal, run the following command under "sudo" permissions:')]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" xcode-select --install\n")])])]),o("h2",{attrs:{id:"select-the-active-xcode-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#select-the-active-xcode-version"}},[t._v("#")]),t._v(" Select the active Xcode version")]),t._v(" "),o("p",[t._v("For systems with multiple Xcode versions installed, the current version can be selected by running "),o("code",[t._v("sudo xcode-select")]),t._v(" at the command-line.")]),t._v(" "),o("p",[t._v("For example:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" xcode-select -switch /Applications/Xcode.app/Contents/Developer/\n")])])]),o("p",[t._v("If you are using Studio, you need to restart Studio for your changes to take effect.")]),t._v(" "),o("h2",{attrs:{id:"configure-studio-and-the-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-studio-and-the-cli"}},[t._v("#")]),t._v(" Configure Studio and the CLI")]),t._v(" "),o("p",[t._v("Both Studio and the CLI use the "),o("code",[t._v("xcode-select")]),t._v(" command to obtain the location of the Xcode tool to use when building your iOS applications. Neither tool requires any additional configuration.")]),t._v(" "),o("p",[t._v("You can select a default iOS simulator type to launch after building your application. Open the "),o("strong",[t._v("Preferences")]),t._v(" dialog by selecting "),o("strong",[t._v("Axway Appcelerator Studio")]),t._v(" > "),o("strong",[t._v("Preference")]),t._v(" from the menu bar, then navigate to "),o("strong",[t._v("Studio > Platforms > iOS")]),t._v(" and select a simulator type from the "),o("strong",[t._v("Default Display")]),t._v(" drop-down menu.")]),t._v(" "),o("h2",{attrs:{id:"note-for-mavericks-and-later"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#note-for-mavericks-and-later"}},[t._v("#")]),t._v(" Note for Mavericks (and later)")]),t._v(" "),o("p",[t._v("If you are using maxOS 10.9+ and packaging an iOS application to the iTune Stores, after the Xcode Organizer is launched, a dialog from your maxOS may open stating, 'UI element scripting is not enabled. Check \"Enable access for assitive devices\"'.")]),t._v(" "),o("p",[o("img",{attrs:{src:v(724),alt:"Screen_Shot_2013-12-03_at_9.38.50_AM"}})]),t._v(" "),o("p",[t._v("This message is misleading as this was the name of the setting in previous versions of macOS, which is already enabled by default on the older versions.")]),t._v(" "),o("p",[t._v("On Mavericks and later, to fix this issue:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Open "),o("strong",[t._v("System Preferences")]),t._v(" from the Apple Menu.")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Security & Privacy")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Privacy")]),t._v(" tab.")])]),t._v(" "),o("li",[o("p",[t._v("If the dialog is locked (bottom-left corner), unlock it.")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Accessibility")]),t._v(" from the left list.")])]),t._v(" "),o("li",[o("p",[t._v("Enable either "),o("strong",[t._v("Terminal")]),t._v(" (if you are using the CLI) or "),o("strong",[t._v("AppceleratorStudio")]),t._v(" when using Studio.")])]),t._v(" "),o("li",[o("p",[t._v("Close the "),o("strong",[t._v("System Preferences")]),t._v(".")])])]),t._v(" "),o("p",[o("img",{attrs:{src:v(725),alt:"Screen_Shot_2016-10-27_at_14.38.14"}})])])}),[],!1,null,null,null);e.default=_.exports},724:function(t,e,v){t.exports=v.p+"assets/img/Screen_Shot_2013-12-03_at_9.38.50_AM.43d6ca4c.png"},725:function(t,e,v){t.exports=v.p+"assets/img/Screen_Shot_2016-10-27_at_14.38.14.fe219c44.png"}}]);