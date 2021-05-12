(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1872:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-ios-stepper"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-ios-stepper"}},[t._v("#")]),t._v(" Titanium.UI.iOS.Stepper")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Default")]),t._v(" "),n("th",[t._v("Custom")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("img",{attrs:{src:s(464),alt:"Stepper"}})]),t._v(" "),n("td",[n("img",{attrs:{src:s(465),alt:"Custom"}})])])])]),t._v(" "),n("p",[t._v("A Stepper displays its selected state while it is being pressed.\nYou can specify background images for each state on iOS.\nUse the "),n("type-link",{attrs:{type:"Titanium.UI.iOS.createStepper"}},[t._v("Titanium.UI.iOS.createStepper")]),t._v(" method or a "),n("strong",[n("code",[t._v("<Stepper>")])]),t._v(' Alloy element to create a stepper\n(see the "Examples" section details).')],1),t._v(" "),n("ul",[n("li",[n("p",[t._v("When assigning a custom image to the "),n("code",[t._v("backgroundImage")]),t._v(" property, the image must be\npartially or wholly transparent for the background color or background gradient to be visible.")])]),t._v(" "),n("li",[n("p",[t._v("Similarly, for an assigned background gradient to show through, the "),n("code",[t._v("backgroundColor")]),t._v(" may need to be\nset to 'transparent'.")])]),t._v(" "),n("li",[n("p",[t._v("Note that the stepper cannot be re-sized.")])])]),t._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("h3",{attrs:{id:"simple-stepper-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-stepper-example"}},[t._v("#")]),t._v(" Simple Stepper Example")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stepper "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStepper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    tintColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"green"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    steps"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    maximum"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    minimum"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nstepper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"change"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stepper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"alloy-xml-markup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup"}},[t._v("#")]),t._v(" Alloy XML Markup")]),t._v(" "),n("p",[t._v("Previous example as an Alloy view.")]),t._v(" "),n("p",[t._v("stepper.xml:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Stepper")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stepper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doClick"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tintColor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("steps")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("stepper.js:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("doClick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=e.exports},464:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAAyCAMAAACNpwIVAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAGcaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE0ODwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41MDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpebYb0AAAA+VBMVEUA/wAB/wEC/wIF/wUG/wYI/wgJ/wkK/woL/wsN/w0O/w4Q/xAR/xEW/xYX/xca/xob/xsd/x0e/x4f/x8g/yAi/yIk/yQr/yss/ywt/y0v/y83/zdA/0BH/0dI/0hL/0tM/0xa/1pb/1tf/19h/2Fl/2Vt/21u/25y/3Jz/3N1/3V3/3d6/3p7/3t8/3x9/31+/35//3+A/4CB/4GM/4yN/42Y/5iZ/5mi/6Kj/6Or/6us/6y4/7i5/7nL/8vM/8zN/83P/8/R/9Hd/93e/97h/+Hi/+Lr/+vs/+zt/+31//X4//j5//n6//r7//v8//z9//3+//7///8l88jaAAABO0lEQVRYw+3Z2VLCMBQG4DQgWCooKosisS6AyKLUvVrFtS1UIL7/w3B1CjcM65ijc/67XuTv15kzmWbCfhCGEWo+lPdopuOcqQyPbZm2O4ZqC12UGy1rqbDllluNitCL7RDlipTjB1LxJMhv30kJF5ps/QnJeDq6DU1m0UeC8sUhNG2WAySooJKGplhdIkHJZhyaeAvNlmdxaGJ4UFcaRhT7bVRu+osIRShCEYpQiFG5MGssOXpYFDXhZ3pO1ISDglrUaGGSHUxroUEnFKEIRShC/atz399HRS7QoC4j0LRx3keC6tcMaNo/6SBBdU73oOks/44E9ZGvQtPbTslDgfJK26/Q1LtJFO6/ulIpSnY/HwqJ617YNLjNGlGuKb1x0HjUyN4Nxj/v+XhX9TXIeuboZYWby6pDqFkzBHEaW3zkI1HHAAAAAElFTkSuQmCC"},465:function(t,a){t.exports="data:image/png;base64,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"}}]);