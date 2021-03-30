(window.webpackJsonp=window.webpackJsonp||[]).push([[985],{1487:function(e,a,i){"use strict";i.r(a);var t=i(21),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"node-js-support"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#node-js-support"}},[e._v("#")]),e._v(" Node.js Support")]),e._v(" "),i("p",[e._v("Titanium SDK has full NodeJS support so users can use NPM modules Android and iOS platforms.")]),e._v(" "),i("h2",{attrs:{id:"minor-differences"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#minor-differences"}},[e._v("#")]),e._v(" Minor differences")]),e._v(" "),i("p",[e._v("This implementation includes the NodeJS require algorithm with some minor differences:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("SDK doesn't attempt to load *.node files")])]),e._v(" "),i("li",[i("p",[e._v("SDK doesn't have replacements for Node's core modules")])]),e._v(" "),i("li",[i("p",[e._v("If the required string doesn't have the prefix of "),i("code",[e._v("./")]),e._v(", "),i("code",[e._v("/")]),e._v(", or "),i("code",[e._v("../")]),e._v(', and its not a native module, the SDK will fall back to legacy Titanium behavior of assuming the require is meant as "absolute" inside the app (as in starting at "'),i("code",[e._v("Resources/")]),e._v('")')])]),e._v(" "),i("li",[i("p",[e._v("The SDK will load JSON files and directories (package.json's main property (look at it, resolve it, and try to load it), index.js, and index.json)")])])]),e._v(" "),i("h2",{attrs:{id:"algorithm-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-summary"}},[e._v("#")]),e._v(" Algorithm summary")]),e._v(" "),i("p",[e._v("To summarize the algorithm the SDK uses, here are three summaries for requiring a module, loading as file, and loading as directory:")]),e._v(" "),i("h3",{attrs:{id:"require-x-from-module-at-path-y"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#require-x-from-module-at-path-y"}},[e._v("#")]),e._v(" Require(X) from module at path Y")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("If X is a core module,")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("return the core module")])]),e._v(" "),i("li",[i("p",[e._v("STOP")])])])]),e._v(" "),i("li",[i("p",[e._v("If X begins with ./, or ../,")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("LOAD_AS_FILE(Y + X)")])]),e._v(" "),i("li",[i("p",[e._v("LOAD_AS_DIRECTORY(Y + X)")])])])]),e._v(" "),i("li",[i("p",[e._v("If X begins with /,")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("LOAD_AS_FILE(X)")])]),e._v(" "),i("li",[i("p",[e._v("LOAD_AS_DIRECTORY(X)")])])])]),e._v(" "),i("li",[i("p",[e._v("If X does not contain '/', assume it should try and load CommonJS module first....")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('LOAD_AS_FILE(X/X.js): try to load "legacy" CommonJS file named '),i("code",[e._v("module.id/module.id.js")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("LOAD_AS_DIRECTORY(X): try to load CommonJS module as a directory")])])])]),e._v(" "),i("li",[i("p",[e._v('WARN user about possible bad require being treated as absolute THROW "not found"')]),e._v(" "),i("ol",[i("li",[i("p",[e._v("LOAD_AS_FILE(X)")])]),e._v(" "),i("li",[i("p",[e._v("LOAD_AS_DIRECTORY(X)")])])])])]),e._v(" "),i("h3",{attrs:{id:"load-as-file-x"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#load-as-file-x"}},[e._v("#")]),e._v(" LOAD_AS_FILE(X)")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("If X is a file, load X as JavaScript text or JavaScript Object (JSON). STOP")])]),e._v(" "),i("li",[i("p",[e._v("If X.js is a file, load X.js as JavaScript text. STOP")])]),e._v(" "),i("li",[i("p",[e._v("If X.json is a file, parse X.json to a JavaScript Object. STOP")])])]),e._v(" "),i("h3",{attrs:{id:"load-as-directory-x"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#load-as-directory-x"}},[e._v("#")]),e._v(" LOAD_AS_DIRECTORY(X)")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("If X/package.json is a file, If X/index.js is a file, load X/index.js as JavaScript text. STOP")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Parse X/package.json and look for "main" field.')])]),e._v(" "),i("li",[i("p",[e._v("let M = X + (json main field)")])]),e._v(" "),i("li",[i("p",[e._v("LOAD_AS_FILE(M)")])])])]),e._v(" "),i("li",[i("p",[e._v("If X/index.json is a file, parse X/index.json to a JavaScript object. STOP")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);