(window.webpackJsonp=window.webpackJsonp||[]).push([[870],{2109:function(t,e,o){"use strict";o.r(e);var r=o(21),d=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"editor-class"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#editor-class"}},[t._v("#")]),t._v(" Editor Class")]),t._v(" "),o("p",[t._v("The Editor class contains methods and properties for interacting with an editor inside Studio.")]),t._v(" "),o("h2",{attrs:{id:"usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),o("p",[t._v("Examples of how you might interact with instance and static methods of the editor class.")]),t._v(" "),o("h3",{attrs:{id:"instance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#instance"}},[t._v("#")]),t._v(" Instance:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("caret_offset = context.editor.caret_offset\n")])])]),o("h3",{attrs:{id:"static"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[t._v("#")]),t._v(" Static")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("Ruble::Editor.active.insert_as_snippet(text)\n")])])]),o("h2",{attrs:{id:"editor-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#editor-methods"}},[t._v("#")]),t._v(" Editor Methods")]),t._v(" "),o("p",[t._v("Editor objects have the following properties and methods.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Property")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("close(save = true)")])]),t._v(" "),o("td",[t._v("Close the editor. Save or not based on the "),o("code",[t._v("save")]),t._v(" argument.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("close!")])]),t._v(" "),o("td",[t._v("Close without saving.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("save")])]),t._v(" "),o("td",[t._v("Save the editor. Confirm or not based on the "),o("code",[t._v("confirm")]),t._v(" argument.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("save!")])]),t._v(" "),o("td",[t._v("Save the editor without confirming.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("dirty?")])]),t._v(" "),o("td",[t._v("Return true if the editor dirty (has unsaved contents) else false.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("hide")])]),t._v(" "),o("td",[t._v("Hide the editor.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("show")])]),t._v(" "),o("td",[t._v("Show the editor.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("document=(src)")])]),t._v(" "),o("td",[t._v("Set the contents of the editor's document to "),o("code",[t._v("src.")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("document")])]),t._v(" "),o("td",[t._v("Returns editor's document.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("editable?")])]),t._v(" "),o("td",[t._v("Returns true if the editor is editable otherwise false.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("file")])]),t._v(" "),o("td",[t._v("(Not Yet Implemented) The File currently being edited or nil.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("[]=(offset, length, src)")])]),t._v(" "),o("td",[t._v("Replace a portion of the editor's contents.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("selection")])]),t._v(" "),o("td",[t._v("Return the current selection. It has properties length, offset, text, start_line, or end_line.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("selection=(array_or_range)")])]),t._v(" "),o("td",[t._v("The argument is a two integer array with first being offset, second being length, or a Range object with the range of offsets - first and last.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("current_scope")])]),t._v(" "),o("td",[t._v("Returns current scope.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("scope_at_offset(offset)")])]),t._v(" "),o("td",[t._v("Return scope at given "),o("code",[t._v("offset.")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("caret_column")])]),t._v(" "),o("td",[t._v("The caret column.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("caret_line")])]),t._v(" "),o("td",[t._v("The line containing the caret.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("caret_offset")])]),t._v(" "),o("td",[t._v("The caret offset.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("current_line")])]),t._v(" "),o("td",[t._v("The current line.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("current_line.length")])]),t._v(" "),o("td",[t._v("Length of the current line.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("line(line)")])]),t._v(" "),o("td",[t._v("Text of the specified line # (0-based).")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("line_number")])]),t._v(" "),o("td",[t._v("The starting line number of "),o("code",[t._v("input")]),t._v(", numbered starting with 1.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("line_index")])]),t._v(" "),o("td",[t._v("The starting position on the line of "),o("code",[t._v("input")]),t._v(", numbered from 0.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("line_information(line)")])]),t._v(" "),o("td",[t._v("Offset of the line in the document, and length of the line.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("offset_at_line(line)")])]),t._v(" "),o("td",[t._v("Offset in the document at which this line begins.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("soft_tabs")])]),t._v(" "),o("td",[t._v("Boolean indicating whether or not soft tabs are being used for the current file.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("tab_size")])]),t._v(" "),o("td",[t._v("Tab width for the current file.")])])])]),t._v(" "),o("p",[t._v("There are also several useful static methods defined in the Ruble::Editor class that can be useful in ruby code outside of a command:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Method")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("open(absolute_path)")])]),t._v(" "),o("td",[t._v("Open a file specified by the absolute path.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("active")])]),t._v(" "),o("td",[t._v('Returns the "active" editor.')])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("go_to(options)")])]),t._v(" "),o("td",[t._v("Where the options are a hash that can contains keys :file (active editor if not specified), :line (default to 1), or :column (defaults to 1).")])])])])])}),[],!1,null,null,null);e.default=d.exports}}]);