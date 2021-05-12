(window.webpackJsonp=window.webpackJsonp||[]).push([[850],{1291:function(t,e,a){"use strict";a.r(e);var o=a(21),l=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"alloy-command-line-interface-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alloy-command-line-interface-reference"}},[t._v("#")]),t._v(" Alloy Command-Line Interface Reference")]),t._v(" "),a("p",[t._v("The Alloy Command-Line Interface (CLI) is a command-line tool for managing and building Alloy projects.")]),t._v(" "),a("h2",{attrs:{id:"command-line-interface-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface-installation"}},[t._v("#")]),t._v(" Command-Line Interface Installation")]),t._v(" "),a("p",[t._v("The Alloy command-line interface and plugin will be automatically installed by Appcelerator Studio or the Appcelerator CLI.")]),t._v(" "),a("p",[t._v("If there were installation problems or if you wish to install the Alloy CLI independent of the other tools, refer to the manual installation instructions below.")]),t._v(" "),a("h3",{attrs:{id:"manual-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-installation"}},[t._v("#")]),t._v(" Manual Installation")]),t._v(" "),a("p",[t._v("The Appcelerator CLI needs to be installed and configured before installing the Alloy CLI. The following steps install the latest released version of Alloy:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download and install Node.js from "),a("a",{attrs:{href:"http://nodejs.org/#download",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://nodejs.org/#download"),a("OutboundLink")],1),t._v(", which includes the npm package manager needed to install Alloy.")])]),t._v(" "),a("li",[a("p",[t._v("From a console window, run the following command to install Alloy:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g alloy\n")])])])])]),t._v(" "),a("p",[t._v("By default, these installation directions will install the latest Alloy release. To install a specific released version, use the same directions, except after 'alloy', add the at symbol ('@') with the version number. For instance, executing sudo npm install -g alloy@1.10.0 will install version 1.10.0.")]),t._v(" "),a("h3",{attrs:{id:"bleeding-edge-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bleeding-edge-installation"}},[t._v("#")]),t._v(" Bleeding Edge Installation")]),t._v(" "),a("p",[t._v("To install the latest development version of Alloy, after installing "),a("a",{attrs:{href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),a("OutboundLink")],1),t._v(" , clone the Alloy GitHub repository and perform an npm install from the Alloy project's root directory:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/appcelerator/alloy.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" alloy\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("h2",{attrs:{id:"new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[t._v("#")]),t._v(" New")]),t._v(" "),a("p",[t._v("Creates a new Alloy project on top of an existing new Titanium project, that is, create a classic Titanium project first, then run the command from inside the project directory.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("alloy new [<project_path>] [<project_template>] [--force] [--no-colors]\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Options")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("<project_path>")])]),t._v(" "),a("td",[t._v("Path to a skeleton Titanium project, otherwise the current working directory is used.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<project_template>")])]),t._v(" "),a("td",[t._v("Selects the template. Choose between "),a("strong",[t._v("default")]),t._v(" for a single pane application or "),a("strong",[t._v("two_tabbed")]),t._v(" or a tabbed application. Defaults to "),a("strong",[t._v("default")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--testapp <test_app_path>")])]),t._v(" "),a("td",[t._v("Relative path after the "),a("code",[t._v("alloy/ test / apps /")]),t._v(" path to a test application in the Alloy Github repo to use as the new application.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-f, --force")])]),t._v(" "),a("td",[t._v("Forces the command to execute.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-n, --no-colors")])]),t._v(" "),a("td",[t._v("Disables color output.")])])])]),t._v(" "),a("h2",{attrs:{id:"generate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate"}},[t._v("#")]),t._v(" Generate")]),t._v(" "),a("p",[t._v("Creates skeleton Alloy components.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("alloy generate <component> [--widgetname <widget_name>] [--outputPath <output_path>] [--platform <platform>] [--force] [--no-colors]\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Options")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("<component>")])]),t._v(" "),a("td",[t._v("Format is component specific.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("controller <name>")])]),t._v(" "),a("td",[t._v("Create a skeleton controller, view and style.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("jmk")])]),t._v(" "),a("td",[t._v("Creates "),a("code",[t._v("alloy.jmk")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("model <name> <adapter> [schema]")])]),t._v(" "),a("td",[t._v("Creates a model with the specified "),a("code",[t._v("name")]),t._v(". See "),a("a",{attrs:{href:"#model-format"}},[t._v("Model Format")]),t._v(" below.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("migration <model_name>")])]),t._v(" "),a("td",[t._v("Creates a skeleton migration file for the specified model.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("style <<name> | --all>")])]),t._v(" "),a("td",[t._v("Creates a skeleton style file with the specified name.  "),a("br"),t._v("If the name is associated with a view-controller, Alloy uses the id and class names from the markup file to populate the style file.  "),a("br"),t._v("If "),a("code",[t._v("--all")]),t._v(" flag is specified, Alloy generates skeleton style files for all view-controllers.  "),a("br"),t._v("If you add new id or class attributes to the markup file, running this command updates the style file with the new attributes.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("view <name>")])]),t._v(" "),a("td",[t._v("Creates a skeleton view and style with the specified "),a("code",[t._v("name")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("widget <name>")])]),t._v(" "),a("td",[t._v("Creates a basic widget with the specified "),a("code",[t._v("name")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--widgetname <name>")])]),t._v(" "),a("td",[t._v("Creates a component for the specified widget. Can only be used to create controllers, views or styles.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-o, --outputPath <outputPath>")])]),t._v(" "),a("td",[t._v("Output path for generated code. Point to the 'app' directory.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--platform <platform>")])]),t._v(" "),a("td",[t._v("Create a platform-specific view or controller component, where "),a("code",[t._v("<platform>")]),t._v(" is either "),a("code",[t._v("android")]),t._v(", "),a("code",[t._v("ios")]),t._v(" or "),a("code",[t._v("windows")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-f, --force")])]),t._v(" "),a("td",[t._v("Forces the command to execute.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-n, --no-colors")])]),t._v(" "),a("td",[t._v("Disables color output.")])])])]),t._v(" "),a("h3",{attrs:{id:"model-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model-format"}},[t._v("#")]),t._v(" Model Format")]),t._v(" "),a("p",[t._v("To generate a model, first select the adapter type:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("sql")]),t._v(" for the SQLite database for the Android and iOS platform.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("properties")]),t._v(" for storing models locally in Titanium SDK context.")])])]),t._v(" "),a("p",[t._v("For the "),a("code",[t._v("sql")]),t._v(" and "),a("code",[t._v("properties")]),t._v(" adapters, you will also need to specify a table schema. The "),a("code",[t._v("sql")]),t._v(" adapter type will also generate a migration file with the model.")]),t._v(" "),a("p",[t._v("The table schema format for generating models is a space-delimited list of the field name, followed by a colon ('😂, followed by the data type. For example, specifying 'name:string age:number sex:varchar dob:date' will create a table with four columns: 'name' which stores a string, 'age' which stores a number, 'sex' which stores a character, and 'dob' which stores a date.")]),t._v(" "),a("p",[t._v("Actually, in the above example, since both the Android and iOS platforms use SQLite, none of these datatypes are available. Instead, they will be mapped based on the following:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Datatype")]),t._v(" "),a("th",[t._v("SQLite Datatype")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("string  "),a("br"),t._v("varchar  "),a("br"),t._v("text")]),t._v(" "),a("td",[t._v("TEXT")])]),t._v(" "),a("tr",[a("td",[t._v("int  "),a("br"),t._v("tinyint  "),a("br"),t._v("smallint  "),a("br"),t._v("bigint  "),a("br"),t._v("integer")]),t._v(" "),a("td",[t._v("INTEGER")])]),t._v(" "),a("tr",[a("td",[t._v("double  "),a("br"),t._v("float  "),a("br"),t._v("real")]),t._v(" "),a("td",[t._v("REAL")])]),t._v(" "),a("tr",[a("td",[t._v("blob")]),t._v(" "),a("td",[t._v("BLOB")])]),t._v(" "),a("tr",[a("td",[t._v("decimal  "),a("br"),t._v("number  "),a("br"),t._v("date  "),a("br"),t._v("datetime  "),a("br"),t._v("boolean")]),t._v(" "),a("td",[t._v("NUMERIC")])]),t._v(" "),a("tr",[a("td",[t._v("null")]),t._v(" "),a("td",[t._v("NULL")])]),t._v(" "),a("tr",[a("td",[t._v("unknown datatype")]),t._v(" "),a("td",[t._v("TEXT")])])])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("Installs special Alloy project components.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("alloy install <module> [<project_path>]\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Options")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("<module>")])]),t._v(" "),a("td",[t._v("Format is module specific.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("plugin")])]),t._v(" "),a("td",[t._v("Installs the compiler plugin to hook the Alloy project to Studio.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<project_path>")])]),t._v(" "),a("td",[t._v("Path to the Alloy project, otherwise the current working directory is used.")])])])]),t._v(" "),a("h2",{attrs:{id:"compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[t._v("#")]),t._v(" Compile")]),t._v(" "),a("p",[t._v("Compiles Alloy code to Titanium SDK code.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("alloy compile [<project_path>] [--config <compiler_options>] [--no-colors]\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Options")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("<project_path>")])]),t._v(" "),a("td",[t._v("Path to the Alloy project, otherwise the current working directory is used.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-c, --config <compiler_options>")])]),t._v(" "),a("td",[t._v("Compiler configuration options to use. See "),a("a",{attrs:{href:"#compiler-options"}},[t._v("Compiler Options")]),t._v(" below.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-n, --no-colors")])]),t._v(" "),a("td",[t._v("Disables color output.")])])])]),t._v(" "),a("h3",{attrs:{id:"compiler-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-options"}},[t._v("#")]),t._v(" Compiler Options")]),t._v(" "),a("p",[t._v('The compiler options are a list of comma-delimited assignment statements (variable=value) without any spaces. For example, specifying "beautify=false,deploytype=test" overrides the default compiler behavior to disable beautifying the generated JavaScript files and building the application for the test environment.')]),t._v(" "),a("p",[t._v("Refer to the "),a("code",[t._v("event.alloyConfig")]),t._v(" object in "),a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_How-tos/Alloy_Reference_Guides/Build_Configuration_File_(alloy.jmk)/"}},[t._v("Build Configuration File (alloy.jmk)")]),t._v(" for a list of settable compiler options.")],1),t._v(" "),a("h2",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[t._v("#")]),t._v(" Run")]),t._v(" "),a("p",[t._v("Use the "),a("code",[t._v("titanium build")]),t._v(" command to run Alloy projects. See the "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_Command-Line_Interface_Reference/"}},[t._v("Titanium Command-Line Interface Reference guide")]),t._v(" for more information.")],1),t._v(" "),a("h2",{attrs:{id:"i18n-extract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i18n-extract"}},[t._v("#")]),t._v(" i18n-extract")]),t._v(" "),a("p",[t._v("Inspects your TSS and JS files for instances of Titanium's localization functions, extracts the i18n key from each function and adds it to the target language's strings.xml file.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("alloy extract-i18n [<language>] [--apply]\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Options")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("<language>")])]),t._v(" "),a("td",[t._v("Optional. A two-letter language code that specifies the target language. Default is "),a("strong",[a("code",[t._v("en")])]),t._v(" (English).")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--apply")])]),t._v(" "),a("td",[t._v("Optional. If present, the command writes new localization entries to the target language's strings.xml file. If absent, a preview of the changes are displayed in the terminal window.")])])])]),t._v(" "),a("p",[t._v("The following localization functions are supported:")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#!/api/Titanium.Locale-method-getString"}},[t._v("Ti.Locale.getString()")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#!/api/Global-method-L"}},[t._v("L()")])])])]),t._v(" "),a("p",[t._v("The syntax options for calling "),a("code",[t._v("alloy extract-i18n")]),t._v(" are shown below.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// Show a before and after of your i18n file. Does NOT write changes to the file.\nalloy extract-i18n\n\n// Write changes to "app/i18n/en/strings.xml":\nalloy extract-i18n --apply\n\n// Specify "es" as the language and write the changes to "app/i18n/es/strings.xml":\nalloy extract-i18n es --apply\n\n// Specify a different language ("es") and preview changes:\nalloy extract-i18n es\n')])])]),a("p",[t._v("Also see "),a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Tasks/Alloy_Tasks_with_the_CLI/#ExtractingLocalizationStrings"}},[t._v("Extracting localization strings")]),t._v(" in the "),a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Tasks/Alloy_Tasks_with_the_CLI/"}},[t._v("Alloy Tasks with the CLI")]),t._v(" guide.")],1),t._v(" "),a("h2",{attrs:{id:"copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[t._v("#")]),t._v(" Copy")]),t._v(" "),a("p",[t._v("Make a copy of an existing view-controller, which includes the controller, XML and TSS files.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("alloy copy <CONTROLLER_NAME> <COPIED_CONTROLLER_NAME>\n")])])]),a("h2",{attrs:{id:"move"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#move"}},[t._v("#")]),t._v(" Move")]),t._v(" "),a("p",[t._v("Rename a view-controller, which includes the controller, XML and TSS files.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("alloy move <CONTROLLER_NAME> <NEW_CONTROLLER_NAME>\n")])])]),a("h2",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[t._v("#")]),t._v(" Remove")]),t._v(" "),a("p",[t._v("Removes / Deletes a view-controller, which includes the controller, XML and TSS files.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("alloy remove <CONTROLLER_NAME>\n")])])]),a("h2",{attrs:{id:"additional-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-options"}},[t._v("#")]),t._v(" Additional Options")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Options")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-h, --help")]),t._v(" "),a("td",[t._v("Outputs command usage.")])]),t._v(" "),a("tr",[a("td",[t._v("-v, --version")]),t._v(" "),a("td",[t._v("Outputs the version number.")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);