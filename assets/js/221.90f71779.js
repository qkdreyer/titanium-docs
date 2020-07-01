(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1111:function(e,a,s){"use strict";s.r(a);var n=s(21),l=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"modules-cloud-keyvalues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-keyvalues"}},[e._v("#")]),e._v(" Modules.Cloud.KeyValues")]),e._v(" "),s("TypeHeader"),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"set-a-key-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-a-key-value"}},[e._v("#")]),e._v(" Set a Key-Value")]),e._v(" "),s("p",[e._v("This example sets a key-value and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.KeyValues.set({\n    name: 'welcome_message',\n    value: 'Welcome to Appcelerator Cloud Services'\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"get-a-key-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-a-key-value"}},[e._v("#")]),e._v(" Get a Key-Value")]),e._v(" "),s("p",[e._v("This example gets a key-value and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.KeyValues.get({\n    name: 'welcome_message'\n}, function (e) {\n    if (e.success) {\n        var keyvalue = e.keyvalues[0];\n        alert('Success:\\n' +\n            'name: ' + keyvalue.name + '\\n' +\n            'value: ' + keyvalue.value);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"append-a-key-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#append-a-key-value"}},[e._v("#")]),e._v(" Append a Key-Value")]),e._v(" "),s("p",[e._v("This example appends a value to a key-value and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.KeyValues.append({\n    name: 'welcome_message',\n    value: ', take a look around'\n}, function (e) {\n     if (e.success) {\n         var keyvalue = e.keyvalues[0];\n         alert('Success:\\n' +\n             'name: ' + keyvalue.name + '\\n' +\n             'value: ' + keyvalue.value);\n     } else {\n         alert('Error:\\n' +\n             ((e.error && e.message) || JSON.stringify(e)));\n     }\n\n});\n")])])]),s("h3",{attrs:{id:"increment-a-key-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#increment-a-key-value"}},[e._v("#")]),e._v(" Increment a Key-Value")]),e._v(" "),s("p",[e._v("This example increments a key-value and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.KeyValues.increment({\n    name: 'score',\n    value: 1\n}, function (e) {\n     if (e.success) {\n         var keyvalue = e.keyvalues[0];\n         alert('Success:\\n' +\n             'name: ' + keyvalue.name + '\\n' +\n             'value: ' + keyvalue.value);\n     } else {\n         alert('Error:\\n' +\n             ((e.error && e.message) || JSON.stringify(e)));\n     }\n\n});\n")])])]),s("h3",{attrs:{id:"remove-a-key-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-key-value"}},[e._v("#")]),e._v(" Remove a Key-Value")]),e._v(" "),s("p",[e._v("This example deletes a key-value and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.KeyValues.remove({\n    name: 'welcome_message'\n}, function (e) {\n     if (e.success) {\n         alert('Success');\n     } else {\n         alert('Error:\\n' +\n             ((e.error && e.message) || JSON.stringify(e)));\n     }\n\n});\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);a.default=l.exports}}]);