(window.webpackJsonp=window.webpackJsonp||[]).push([[908],{1400:function(t,e,i){"use strict";i.r(e);var a=i(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"administration-api-for-the-developer-toolbox"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#administration-api-for-the-developer-toolbox"}},[t._v("#")]),t._v(" Administration API for the Developer Toolbox")]),t._v(" "),i("h2",{attrs:{id:"about"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[t._v("#")]),t._v(" About")]),t._v(" "),i("p",[t._v("This document provides the Admin API for the developer toolbox usage.")]),t._v(" "),i("h2",{attrs:{id:"design-background"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#design-background"}},[t._v("#")]),t._v(" Design & Background")]),t._v(" "),i("p",[t._v("The Developer Toolbox is designed to interact with the Studio through a controller-action mechanism that uses JSON to pass commands and information.")]),t._v(" "),i("p",[t._v("On the Studio side, the main plugin that takes part in handling remote requests and communicating with the toolbox is the com.aptana.portal.ui. The plugin provides the core implementation for a controller-action-like scheme.")]),t._v(" "),i("h2",{attrs:{id:"capabilities"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[t._v("#")]),t._v(" Capabilities")]),t._v(" "),i("p",[t._v("This is what the Studio side is capable of handling at the moment (this list will grow as we add more capabilities in time):")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Version check of these items:")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Plugins")])]),t._v(" "),i("li",[i("p",[t._v("Ruby (native call)")])]),t._v(" "),i("li",[i("p",[t._v("Rails (native call)")])]),t._v(" "),i("li",[i("p",[t._v("SqLite3 (native call)")])]),t._v(" "),i("li",[i("p",[t._v("Preferences check of version for other applications that were installed through a supported installer (see below).")])])])]),t._v(" "),i("li",[i("p",[t._v("Installations:")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Ruby (Windows only)")])]),t._v(" "),i("li",[i("p",[t._v("XAMPP (Windows only)")])]),t._v(" "),i("li",[i("p",[t._v("Python (Windows only)")])])])]),t._v(" "),i("li",[i("p",[t._v("Add to Project:")]),t._v(" "),i("ol",[i("li",[t._v("JavaScript libraries")])])]),t._v(" "),i("li",[i("p",[t._v("Other Studio interactions")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Open views")])]),t._v(" "),i("li",[i("p",[t._v("List the latest opened files")])]),t._v(" "),i("li",[i("p",[t._v("Open files")])])])])]),t._v(" "),i("h2",{attrs:{id:"administration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#administration"}},[t._v("#")]),t._v(" Administration")]),t._v(" "),i("p",[t._v("The admin of the toolbox database controls what will be displayed and available for installation.")]),t._v(" "),i("p",[t._v("The toolbox gets the information from the ‘items’ table. This table contains multiple columns and a lot of information. However, this document will describe only the columns that are critical for the Toolbox-Studio interactions.")]),t._v(" "),i("p",[t._v("This list contains the columns we will be dealing with:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("name - The item’s name")])]),t._v(" "),i("li",[i("p",[t._v("version - The version we are looking for or installing.")])]),t._v(" "),i("li",[i("p",[t._v("item_type - The general type definition of an item. It can be ‘Plugin’, ‘Application’, ‘Template’, ‘Ruble’ and ‘Gem’ (for now, only the first two are in use). More about the item_type below.")])]),t._v(" "),i("li",[i("p",[t._v("action - Holds the JSON command that will be inspected and partially transferred to the Studio side.")])])]),t._v(" "),i("h3",{attrs:{id:"name-field"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#name-field"}},[t._v("#")]),t._v(" ‘name’ field")]),t._v(" "),i("p",[t._v("As hinted by its name... this field will be displayed in the Toolbox as the item’s name.")]),t._v(" "),i("h3",{attrs:{id:"version-field"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#version-field"}},[t._v("#")]),t._v(" ‘version’ field")]),t._v(" "),i("p",[t._v("The version field is used when the toolbox tries to determine what item version is installed. For example, a Plugin item will be displayed as ‘Installed’ if the Studio reports a matching plugin version for it. It will be displayed as ‘Update’ if the Studio reports a lower version exists.")]),t._v(" "),i("p",[t._v("This field should be given in the form of an x.y.z pattern and should include numbers only.")]),t._v(" "),i("h3",{attrs:{id:"item-type-field"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#item-type-field"}},[t._v("#")]),t._v(" ‘item_type’ field")]),t._v(" "),i("p",[t._v("This field defines the internal type of the item. Note that this type can be different then what is specified in the ‘category_list’ field, which defines the UI arrangement of the items in the toolbox.")]),t._v(" "),i("p",[t._v("The field must hold one of the supported integer types:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("1: Plugin")])]),t._v(" "),i("li",[i("p",[t._v("2: Application")])]),t._v(" "),i("li",[i("p",[t._v("3: Template")])]),t._v(" "),i("li",[i("p",[t._v("4: Ruble")])]),t._v(" "),i("li",[i("p",[t._v("5: Gem")])])]),t._v(" "),i("p",[t._v("Note that for the moment, only the first two (plugins (1) and applications (2)) are being handled by the Javascript part of the toolbox. The rest are there for future use and are defined in the item.rb model of the toolbox rails-application.")]),t._v(" "),i("h3",{attrs:{id:"action-field"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#action-field"}},[t._v("#")]),t._v(" ‘action’ field")]),t._v(" "),i("p",[t._v("The action field is the most important and complex part of the Toolbox-Studio interaction. It holds the JSON instructions that specify how to download and install the item.")]),t._v(" "),i("p",[t._v("Here is the structure outline of the JSON command, followed by an example:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('{\n    "command":"<command_name>",\n    "os": {\n        "<windows | linux | macosx | all>": {\n            "action": "<action>",\n            "attributes": {"<key>": "<value>" ... },\n            "urls": <array of strings or a single string>\n        }\n    }\n}\n')])])]),i("p",[i("em",[t._v("Example:")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('{\n    "command":"ruby",\n    "os": {\n        "windows": {\n            "action": "install",\n            "attributes": {"install_dir": "C:\\/Ruby"},\n            "urls": [\n                "http://rubyforge.org/frs/download.php/71492/rubyinstaller-1.8.7-p299.exe",\n                "http://rubyforge.org/frs/download.php/66888/devkit-3.4.5r3-20091110.7z"\n            ]\n        },\n        "all": {\n            "action":"open",\n            "urls": "http://www.ruby-lang.org/en/downloads/"\n        }\n    }\n}\n')])])]),i("p",[t._v("In the following example, we call for the ‘ruby’ command. The toolbox JavaScript framework looks at the ‘item_type’ value and decides how to proceed and which controller to call.")]),t._v(" "),i("p",[t._v("The ‘os’ attribute defines that for Windows, the action ‘install’ should be invoked. For any other OS, the action ‘open’ is called. The ‘all’ is the default operation that will be called if a specific OS match was not found.")]),t._v(" "),i("p",[t._v("For the ‘Windows’ OS, the install action is requested, and the toolbox will dispatch the ‘install’ on the ‘portal.ruby.installer’ Studio controller, and will pass it the attributes map and the URLs that will be used to download the content.")]),t._v(" "),i("p",[t._v("For any other, non-Windows, OS, the action ‘open’ will be called to open an internal browser with the given URL string that was defined for the ‘urls’ key.")]),t._v(" "),i("p",[t._v("Note that some "),i("strong",[t._v("installers")]),t._v(", such as Ruby, require a specific order of URLs. The Studio-side installation expects a specific order and will execute the download and install it in that order. The specific instructions for any supported installer will be described at the end of this document.")]),t._v(" "),i("p",[t._v("Here are a couple of more examples that will install a plugin and a JavaScript library:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('{\n    "command":"plugins",\n    "os": {\n        "all": {\n            "attributes": {\n                "feature_id": "com.aptana.php.feature",\n                "plugin_id": "com.aptana.editor.php",\n                "plugin_version": "3.0.0"},\n            "action": "install",\n            "urls": "http://download.aptana.com/studio3/plugin/install"\n        }\n    }\n}\n')])])]),i("p",[t._v("---------------------------------------------------------------------------------------")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('{\n    "command":"js_library",\n    "os": {\n        "all": {\n            "attributes": {"name" : "prototype 1.6.1"},\n            "action": "install",\n            "urls": "http://prototypejs.org/assets/2009/8/31/prototype.js"\n        }\n    }\n}\n')])])]),i("p",[t._v("Pay attention that installing a Plug-in or a JavaScript library is more generic then installing a specific application. The command for installing a Plug-in is always ‘plugins’, and the command for installing a JS library is always ‘js_library’.")]),t._v(" "),i("p",[t._v('The application installers are more complex, so they require specific support for each app we want to provide our users. See the "'),i("strong",[i("em",[t._v("Supported Application Installers")])]),t._v('" section below.')]),t._v(" "),i("p",[t._v("The ‘"),i("strong",[i("em",[t._v("attributes")])]),t._v("’ JSON value contains extra information that is used by the different types of installers. Here is a table of attributes that are expected to be given for each installer type:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Command")]),t._v(" "),i("th",[t._v("Attributes")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("plugins")]),t._v(" "),i("td",[t._v("feature_id  "),i("br"),t._v("plugin_id  "),i("br"),t._v("plugin_version")])]),t._v(" "),i("tr",[i("td",[t._v("js_library")]),t._v(" "),i("td",[t._v("name")])]),t._v(" "),i("tr",[i("td",[t._v("ruby")]),t._v(" "),i("td",[t._v("install_dir [optional]")])]),t._v(" "),i("tr",[i("td",[t._v("xampp")]),t._v(" "),i("td",[t._v("install_dir [optional]")])]),t._v(" "),i("tr",[i("td",[t._v("python")]),t._v(" "),i("td",[t._v("install_dir [optional]")])])])]),t._v(" "),i("h2",{attrs:{id:"supported-application-installers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#supported-application-installers"}},[t._v("#")]),t._v(" Supported Application Installers")]),t._v(" "),i("p",[t._v("The specific supported applications, as mentioned above, are:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Ruby - Through the ‘ruby’ command (see the example)")])]),t._v(" "),i("li",[i("p",[t._v("XAMPP - Through the ‘xampp’ command.")])]),t._v(" "),i("li",[i("p",[t._v("Python - Through the ‘python’ command.")])])]),t._v(" "),i("p",[t._v("Each of these applications has its installer support that runs the native installer with its expected attributes.")]),t._v(" "),i("p",[t._v("Each of the application is downloaded from the web, and then, the downloaded content is handled by executing the native installer process and unzipping it.")]),t._v(" "),i("p",[t._v("Special requirements:")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Ruby - The installer requires two URLs in the JSON ‘urls’ array, in that order. The first URL should be pointed to the Windows ‘RubyInstaller’. The second URL should be pointed to the ‘DevKit’ zip file. The RubyInstaller will be executed natively, while the DevKit will be later extracted into the installed directory, and some modifications will be made to its configuration files.")])]),t._v(" "),i("li",[i("p",[t._v("XAMPP - The installer expects a single URL for the native XAMPP installer.")])]),t._v(" "),i("li",[i("p",[t._v("Python - The installer expects a single URL for the native Python installer.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);