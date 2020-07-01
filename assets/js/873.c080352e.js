(window.webpackJsonp=window.webpackJsonp||[]).push([[873],{2115:function(t,e,r){"use strict";r.r(e);var a=r(21),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"project-class"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#project-class"}},[t._v("#")]),t._v(" Project Class")]),t._v(" "),r("p",[t._v("The Project class contains methods and properties for interacting with a project inside Studio.")]),t._v(" "),r("h2",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),r("p",[t._v("Examples of how you might interact with instance and static methods of the project class.")]),t._v(" "),r("h3",{attrs:{id:"instance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#instance"}},[t._v("#")]),t._v(" Instance:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('cmd.invoke {|context|  Ruble::Terminal.open("rake test", context.project.to_dir.path) }\n')])])]),r("h3",{attrs:{id:"static"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[t._v("#")]),t._v(" Static")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("# Also generate a project for the bundle and add it in the workspace?\nproj = Ruble::Project.create(base_name, :location => converted_bundle_path)\n")])])]),r("h2",{attrs:{id:"project-methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#project-methods"}},[t._v("#")]),t._v(" Project Methods")]),t._v(" "),r("p",[t._v("Project objects have the following properties and methods:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Property")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("name")])]),t._v(" "),r("td",[t._v("The name of the project. Usually, the basename of the root project directory.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("exists?")])]),t._v(" "),r("td",[t._v("True if the project exists on disk.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("to_dir")])]),t._v(" "),r("td",[t._v("Returns the "),r("code",[t._v("Dir")]),t._v(" corresponding to the project's root.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("refresh(shallow = false)")])]),t._v(" "),r("td",[t._v("Forces a refresh of the project. Pass in true to force only a shallow refresh of the project and direct members.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("is_open?")])]),t._v(" "),r("td",[t._v("Returns true if the project is open.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("is_closed?")])]),t._v(" "),r("td",[t._v("Opposite of "),r("code",[t._v("is_open?.")])])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("open")])]),t._v(" "),r("td",[t._v("If the project isn't currently open, open it.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("close")])]),t._v(" "),r("td",[t._v("Close the project.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("make_current")])]),t._v(" "),r("td",[t._v("Make the project the current/active one highlighted by the App Explorer.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("rails?")])]),t._v(" "),r("td",[t._v("Query method to tell if a project has a rails nature.")])])])]),t._v(" "),r("p",[t._v("There are also several useful static methods defined on the Ruble::Project class that can be useful in ruby code outside of a command:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Method")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("find(name)")])]),t._v(" "),r("td",[t._v("Find the named project in the workspace.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("all")])]),t._v(" "),r("td",[t._v("Return all projects in an array.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("create(name, PROJECT_OPTIONS = {})")])]),t._v(" "),r("td",[t._v("Create a new project with the given name and PROJECT_OPTIONS.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("current")])]),t._v(" "),r("td",[t._v('Returns the "current"/"active" project.')])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);