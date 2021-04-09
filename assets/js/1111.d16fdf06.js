(window.webpackJsonp=window.webpackJsonp||[]).push([[1111],{1463:function(e,t,a){"use strict";a.r(t);var n=a(21),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"windows-asset-qualifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-asset-qualifiers"}},[e._v("#")]),e._v(" Windows Asset Qualifiers")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),a("p",[e._v("As of Titanium 9.0.0, building Windows apps is no longer supported.")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),a("p",[e._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Windows Phone OS and Windows OS have a set of qualifiers you can use to select which assets to use based on screen size, language, region, theme, etc. The qualifiers can either be used as a name for a folder or may be included in the name of the file. If you use the qualifier as part of the filename, place the qualifier between the name and extension, for example, "),a("code",[e._v("filename.qualifier.ext")]),e._v(". You may combine qualifiers by concatenating them together with an underscore ("),a("code",[e._v("_")]),e._v("). In your project, reference the files without the qualifiers.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),a("p",[e._v("Not all qualifiers are discussed in this topic, such as home region, direction layout, etc. For a complete list of qualifiers, refer to the "),a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh965324.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Dev Center: How to name resources using qualifiers"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scale"}},[e._v("#")]),e._v(" Scale")]),e._v(" "),a("p",[e._v("Use the qualifiers below to support devices with different DPIs or screen resolutions. The scaling is based on the logical density factor returned by the device. The Windows Phone DPI column is an approximate value.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Qualifier")]),e._v(" "),a("th",[e._v("Logical Density Factor")]),e._v(" "),a("th",[e._v("Windows Phone DPI")]),e._v(" "),a("th",[e._v("Windows Store Resolution")]),e._v(" "),a("th",[e._v("Notes")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("scale-100")]),e._v(" "),a("td",[e._v("1.0")]),e._v(" "),a("td",[e._v("Up to ~96")]),e._v(" "),a("td",[e._v("At least 1024x768")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("scale-140")]),e._v(" "),a("td",[e._v("1.4")]),e._v(" "),a("td",[e._v("Up to ~134 (WVGA emulator)")]),e._v(" "),a("td",[e._v("At least 1440x1080")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("scale-180")]),e._v(" "),a("td",[e._v("1.8")]),e._v(" "),a("td",[e._v("Up to ~172 (720p emulator)")]),e._v(" "),a("td",[e._v("At least 1920x1440")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("scale-240")]),e._v(" "),a("td",[e._v("2.4")]),e._v(" "),a("td",[e._v("Up to ~230 (WXGA and 1080p emulators)")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("Windows Phone OS 8.1 only")])])])]),e._v(" "),a("p",[e._v("Contrast")]),e._v(" "),a("p",[e._v("Windows provides a high contrast theme as an accessibility feature. Use the following qualifiers to select an asset based on the high contrast theme:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Qualifier")]),e._v(" "),a("th",[e._v("Use")]),e._v(" "),a("th",[e._v("Notes")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("contrast_standard")])]),e._v(" "),a("td",[e._v("No contrast theme selected.")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("contrast_high")])]),e._v(" "),a("td",[e._v("High contrast theme selected.")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("contrast_black")])]),e._v(" "),a("td",[e._v("High Contrast Black theme selected.")]),e._v(" "),a("td",[e._v("Only available for Windows OS")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("contrast_white")])]),e._v(" "),a("td",[e._v("High Contrast White theme selected.")]),e._v(" "),a("td",[e._v("Only available for Windows OS")])])])]),e._v(" "),a("p",[a("strong",[e._v("To change the theme")]),e._v(":")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Windows Phone")]),e._v(" "),a("th",[e._v("Windows Tablet")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1. Open "),a("strong",[e._v("Settings")]),a("br"),e._v(" "),a("br"),e._v("2. Tap "),a("strong",[e._v("ease of access")]),a("br"),e._v(" "),a("br"),e._v("3. Turn the "),a("strong",[e._v("High contrast")]),e._v(" switch on or off")]),e._v(" "),a("td",[e._v("1. Open "),a("strong",[e._v("PC Settings")]),a("br"),e._v(" "),a("br"),e._v("2. Click "),a("strong",[e._v("Ease of Access")]),a("br"),e._v(" "),a("br"),e._v("3. Click "),a("strong",[e._v("High contrast")]),a("br"),e._v(" "),a("br"),e._v("4. Select a theme from the drop-down")])])])]),e._v(" "),a("h2",{attrs:{id:"language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[e._v("#")]),e._v(" Language")]),e._v(" "),a("p",[e._v("For the language qualifiers, the notation differs if you place them in a folder or add the qualifier to the filename.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("For folders, name the folder using the "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/ISO_639-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISO 639-1"),a("OutboundLink")],1),e._v(" standard and optionally with the country's "),a("a",{attrs:{href:"https://en.wikipedia.org/?title=ISO_3166-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISO 3166-1"),a("OutboundLink")],1),e._v(" Alpha-2 code, for example, place assets in either "),a("code",[e._v("app/assets/windows/en-US")]),e._v(" or "),a("code",[e._v("Resources/windows/en-US")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("For the file name, add the "),a("code",[e._v("lang-")]),e._v(" qualifier with the "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/ISO_639-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISO 639-1"),a("OutboundLink")],1),e._v(" standard and optionally with the country's "),a("a",{attrs:{href:"https://en.wikipedia.org/?title=ISO_3166-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISO 3166-1"),a("OutboundLink")],1),e._v(" Alpha-2 code, for example, "),a("code",[e._v("name.lang-en-US.png")]),e._v(".")])])]),e._v(" "),a("p",[a("strong",[e._v("To change the language:")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Windows Phone")]),e._v(" "),a("th",[e._v("Windows Tablet")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1. Open "),a("strong",[e._v("Settings")]),a("br"),e._v(" "),a("br"),e._v("2. Tap "),a("strong",[e._v("language")]),a("br"),e._v(" "),a("br"),e._v("3. If the language is present in the list:"),a("br"),e._v(" "),a("br"),e._v("    1. Tap and hold the language you want to use and select "),a("strong",[e._v("move up")]),e._v(" until it is at the top"),a("br"),e._v(" "),a("br"),e._v("    2. Tap "),a("strong",[e._v("restart phone")]),a("br"),e._v(" "),a("br"),e._v("4. If the language is not present in the list:"),a("br"),e._v(" "),a("br"),e._v("    1. Tap "),a("strong",[e._v("+ add language")]),a("br"),e._v(" "),a("br"),e._v("    2. Select the langague you want to use"),a("br"),e._v(" "),a("br"),e._v("    3. Tap the checkmark button"),a("br"),e._v(" "),a("br"),e._v("    4. You may be prompted to download and install the language pack. Tap "),a("strong",[e._v("OK")]),e._v("."),a("br"),e._v(" "),a("br"),e._v("    5. Tap "),a("strong",[e._v("restart phone")]),e._v(".")]),e._v(" "),a("td",[e._v("1. Open "),a("strong",[e._v("PC Settings")]),a("br"),e._v(" "),a("br"),e._v("2. Click "),a("strong",[e._v("Time and language")]),a("br"),e._v(" "),a("br"),e._v("3. Click "),a("strong",[e._v("Region and language")]),a("br"),e._v(" "),a("br"),e._v("4. If the language is present:"),a("br"),e._v(" "),a("br"),e._v("    1. Click the language"),a("br"),e._v(" "),a("br"),e._v("    2. Click "),a("strong",[e._v("Set as primary")]),a("br"),e._v(" "),a("br"),e._v("5. If the language is not present:"),a("br"),e._v(" "),a("br"),e._v("    1. Click "),a("strong",[e._v("+ Add a language")]),a("br"),e._v(" "),a("br"),e._v("    2. Select the language you want to use"),a("br"),e._v(" "),a("br"),e._v('        1. If there is a status message by the language, when the status of the language says, "Language pack available," click the language.'),a("br"),e._v(" "),a("br"),e._v("        2. Click "),a("strong",[e._v("Options")]),a("br"),e._v(" "),a("br"),e._v("        3. Click "),a("strong",[e._v("Download")]),e._v(" to download and install the language pack"),a("br"),e._v(" "),a("br"),e._v("    3. Click the language"),a("br"),e._v(" "),a("br"),e._v("    4. Click "),a("strong",[e._v("Set as primary")]),a("br"),e._v(" "),a("br"),e._v("6. You will need to log out and sign in to display the new language")])])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("A crazy technical writer decides to arrange the assets using the folders and filenames as shown below. Note that this example is to show the different ways to combine qualifiers. Do not structure your project this way.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app\n└── assets\n    └── windows\n        ├── Image.lang-fr-CA_scale-100.png\n        ├── Image.lang-fr-FR.png\n        ├── Image.png\n        ├── en-US\n        │   ├── scale-100\n        │   │   └── Image.png\n        │   ├── scale-140\n        │   │   └── Image.png\n        │   ├── scale-180\n        │   │   └── Image.png\n        │   └── scale-240\n        │       └── Image.png\n        └── en-US_contrast_high\n            └── Image.png\n")])])]),a("p",[e._v("Each image file can be referenced by just using the filename "),a("code",[e._v("Image.png")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Reference the image without any of the qualifiers and the windows platform directory\nimageView.image = 'Image.png';\n")])])]),a("p",[e._v("The qualifiers tell Windows which image file to use.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Image File and Path")]),e._v(" "),a("th",[e._v("Use")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("./Image.lang-fr-CA_scale-100.png")])]),e._v(" "),a("td",[e._v("Canadian French for a device with a 1.0 scale factor")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("./Image.lang-fr-FR.png")])]),e._v(" "),a("td",[e._v("French French")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("./Image.png")])]),e._v(" "),a("td",[e._v("Default image")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("./en-US/scale-100/Image.png")])]),e._v(" "),a("td",[e._v("American English for a device with a 1.0 scale factor")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("./en-US/scale-140/Image.png")])]),e._v(" "),a("td",[e._v("American English for a device with a 1.4 scale factor")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("./en-US/scale-180/Image.png")])]),e._v(" "),a("td",[e._v("American English for a device with a 1.8 scale factor")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("./en-US/scale-240/Image.png")])]),e._v(" "),a("td",[e._v("American English for a device with a 2.4 scale factor")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("./en_contrast_high/Image.png")])]),e._v(" "),a("td",[e._v("English with a high contrast theme")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);