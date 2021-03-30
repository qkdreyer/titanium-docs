(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{2018:function(t,s,a){"use strict";a.r(s);var n=a(21),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-progressbar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-progressbar"}},[t._v("#")]),t._v(" Titanium.UI.ProgressBar")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Android")]),t._v(" "),n("th",[t._v("iOS")]),t._v(" "),n("th",[t._v("Windows")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("img",{attrs:{src:a(471),alt:"Android"}})]),t._v(" "),n("td",[n("img",{attrs:{src:a(472),alt:"iOS"}})]),t._v(" "),n("td",[n("img",{attrs:{src:a(473),alt:"Windows"}})])])])]),t._v(" "),n("p",[t._v("A progress bar is used for displaying an ongoing activity with a defined progression.\nFor an activity without a defined progression, you can use "),n("type-link",{attrs:{type:"Titanium.UI.ActivityIndicator"}},[t._v("Titanium.UI.ActivityIndicator")]),t._v(".")],1),t._v(" "),n("p",[t._v("Unlike most views, progress bars are hidden by default, so you must explicitly\nshow the progress bar.")]),t._v(" "),n("p",[t._v("Use the "),n("type-link",{attrs:{type:"Titanium.UI.createProgressBar"}},[t._v("Titanium.UI.createProgressBar")]),t._v(" method or "),n("strong",[n("code",[t._v("<ProgressBar>")])]),t._v(" Alloy element to create a progress bar.")],1),t._v(" "),n("h3",{attrs:{id:"android-platform-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-notes"}},[t._v("#")]),t._v(" Android Platform Notes")]),t._v(" "),n("p",[t._v("In SDK 3.0, use "),n("type-link",{attrs:{type:"Titanium.UI.Android.ProgressIndicator"}},[t._v("Titanium.UI.Android.ProgressIndicator")]),t._v(" to display a progress indicator\nin a modal dialog or window title bar. Use "),n("code",[t._v("ProgressBar")]),t._v(" to display the progress bar inside\nanother view.")],1),t._v(" "),n("h3",{attrs:{id:"ios-platform-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform-notes"}},[t._v("#")]),t._v(" iOS Platform Notes")]),t._v(" "),n("p",[t._v("On iOS, to display the progress bar in the window title bar, assign the progress bar object\nto the window's "),n("type-link",{attrs:{type:"Titanium.UI.Window.titleControl"}},[t._v("titleControl")]),t._v(" property.\nMake sure the window is modal and not full screen, and that the navigation bar is not hidden.")],1),t._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("h3",{attrs:{id:"simple-progress-bar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-progress-bar"}},[t._v("#")]),t._v(" Simple Progress Bar")]),t._v(" "),n("p",[t._v("In this example we create a progress bar with the min value of "),n("code",[t._v("0")]),t._v(" and the max value\nof "),n("code",[t._v("10")]),t._v(" and the current value of "),n("code",[t._v("0")]),t._v(". Changing the "),n("code",[t._v("value")]),t._v(" property causes the\ndisplayed progress bar to update.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createProgressBar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    top"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    min"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    max"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    color"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    message"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Downloading 0 of 10'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    font"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fontSize"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fontWeight"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bold'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    style"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProgressBarStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PLAIN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        pb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Downloading '")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("pb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' of 10'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"alloy-xml-markup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup"}},[t._v("#")]),t._v(" Alloy XML Markup")]),t._v(" "),n("p",[t._v("Previous example as an Alloy view.")]),t._v(" "),n("p",[t._v("index.xml:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("win"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("backgroundColor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("white"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("incPB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ProgressBar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("index.js:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("incPB")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Downloading '")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' of 10'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("win"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("index.tss:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#pb"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    top"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    min"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    max"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    color"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    message"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Downloading 0 of 10'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    font"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fontSize"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fontWeight"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bold'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    style"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProgressBarStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PLAIN")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);s.default=r.exports},471:function(t,s){t.exports="data:image/png;base64,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"},472:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAAAZCAMAAAAWhXJ4AAAAOVBMVEX////d6v9Eav/09PSzs7N8qv/S0tLT09N/q//w9v/6/P75+fnJzNG50fzm7/udu/BcieTi4uKgq7379vYFAAAARElEQVRYw+3Bxw3AIBBFwXVkCY79F+sCOJnDlxBvxgAAAMaRDt8U/Crhl71NeJJVos8a97tKlGy1OGmci0Y2AAAAoDsfUDUJWO+RlLMAAAAASUVORK5CYII="},473:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAAZCAMAAAAhS71MAAAA0lBMVEUCAgIkJCQqKioCAkYDA/8DA1GGhoYGBgYRERGvr68NDQ0YGBinp6caGhoKCgq2traampqXl5cwMDAhISEeHh57e3tzc3OsrKxkZGRdXV1UVFSenp5hYWFXV1c0NDQtLS2RkZGBgYFHR0cyMjIVFRXBwcG5ubmhoaGMjIx3d3dnZ2dDQ0MnJyexsbF/f39aWlpRUVE+Pj45OTk1NTWUlJRNTU1MTEw3NzeJiYl+fn7R0dFvb29paWlLS0sRET0DAyQAAP84ONOOjn0DA3wDA1MCAlKaGpfEAAAB9UlEQVRIx+3R14rbQBSA4V9OYo1677Lk3rvX9vZNff9XiryBBbMQkENgL/xJMJwzNz8MV1dXf1N2Zwbv7Y5no9+SXflso8265dvgNV0qhgzukZosu23FvJOf73qZHKtnm6nVXr0N41iACCyTaaSE1CLrKoZV0mv16Am2siil+dolydHSg4mUbqBc72+Yy415KsFmX3pAM+eV15rRs3IVtsuF2V8IYWk1CzQI03QRWt3Oqn/vHh4CPRhIq0SLls4NeajMiuFEz0xbzZzO0Iz1cDAFHiPrAPSUQJ9sBss+oEVy4YDi1i+YrEcShbMdPzlx2LtLCFppK38A3d2P7+Ngz9Y2HdUuGG1GBpNHKvJxoEJnjaqYtwYVX5F3DkRlzQLBXPF1l5ljZmPXbsvLLmFVkNxVl61oHsRByjqrCtoezkz3uZ0CMv1TwV2OFqlj70+BqS3UfiSoZZjZSpenoaMcuR0xatM8MFmlidCzaOJbbWXqDuyRXb3CjUS2TYbtYQyE9iKBqt5WEqqb1wKVUFFy6pGKQgDeTgOhYVS/QBNCoBYNMNx+H78Qhlx9Jr6K53VWgLGTOBGn0zepyJ4MZYP/rDsNLY1/8fLpQs/SidftLDeeVIfBuR+fL/P12/fmSScIOs06xgnnXn5+uciv58aFfK6urj6Y3/YxM1udMBmtAAAAAElFTkSuQmCC"}}]);