(window.webpackJsonp=window.webpackJsonp||[]).push([[1117],{1424:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"buffer-and-codec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buffer-and-codec"}},[t._v("#")]),t._v(" Buffer and Codec")]),t._v(" "),s("h2",{attrs:{id:"objective"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),s("p",[t._v("In this section, you'll learn about using the "),s("code",[t._v("Buffer")]),t._v(" object and the "),s("code",[t._v("Codec")]),t._v(" module to interact with binary data streams.")]),t._v(" "),s("h2",{attrs:{id:"definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"#!/api/Titanium.Buffer"}},[t._v("Titanium.Buffer")]),t._v(" is a container for bytes. It differs from "),s("a",{attrs:{href:"#!/api/Titanium.Blob"}},[t._v("Titanium.Blob")]),t._v(" in that a `Buffer` is mutable and resizable.")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"#!/api/Titanium.Codec"}},[t._v("Titanium.Codec")]),t._v(" provides utility methods to convert to and from binary data.")]),t._v(" "),s("p",[s("code",[t._v("Buffer")]),t._v(" and "),s("code",[t._v("Codec")]),t._v(" are primarily used in conjunction with "),s("a",{attrs:{href:"#!/api/Titanium.IOStream"}},[t._v("Titanium.IOStream")]),t._v(" objects, including "),s("a",{attrs:{href:"#!/api/Titanium.Network.Socket.TCP"}},[t._v("Titanium.Network.Socket.TCP")]),t._v(" and "),s("a",{attrs:{href:"#!/api/Titanium.Filesystem.FileStream"}},[t._v("Titanium.Filesystem.FileStream")]),t._v(".")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"#!/api/Titanium.Stream"}},[t._v("Titanium.Stream")]),t._v(" module provides additional utility methods for working with streams.")]),t._v(" "),s("h2",{attrs:{id:"titanium-buffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-buffer"}},[t._v("#")]),t._v(" Titanium.Buffer")]),t._v(" "),s("p",[t._v("Buffers are created from the Titanium module using "),s("code",[t._v("Titanium.createBuffer()")]),t._v(". Buffers are similar to byte arrays in other programming languages but have the ability to be resized. Buffers may be grown by setting the "),s("code",[t._v("length")]),t._v(" property to a larger value, or when using the "),s("code",[t._v("insert()")]),t._v(" or "),s("code",[t._v("append()")]),t._v(" methods. Their length may also be reduced by setting the "),s("code",[t._v("length")]),t._v(" property to a smaller value or using the "),s("code",[t._v("release()")]),t._v(" method.")]),t._v(" "),s("p",[t._v("You can create an empty buffer with a specified initial size, or use a string or numeric value as the initial value of a buffer. The following code excerpt show several ways to initialize a buffer.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a Buffer with initial length of 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a buffer with initial size of 512 bytes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a buffer, initialized with a string value.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a string, which will form the contents of a new buffer."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The following code excerpt shows some other manipulations on a buffer, including appending one buffer to another and truncating buffers.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"One buffer full of data. "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Another buffer full of data."')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Append the contents of one buffer to another")]),t._v("\nbuffer1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Truncate the buffer to 32 bytes")]),t._v("\nbuffer1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set buffers to zero length and release underlying storage.")]),t._v("\nbuffer1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("release")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuffer2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("release")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Buffers can also be addressed directly as if they were arrays of byte values, as shown in the following code excerpt.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuffer2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// writes 123")]),t._v("\nTi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("Buffer")]),t._v(" object's "),s("code",[t._v("append")]),t._v(", "),s("code",[t._v("copy")]),t._v(", and "),s("code",[t._v("insert")]),t._v(" methods resize the buffer as needed. However, when you access a buffer as an array, the buffer is "),s("em",[t._v("not")]),t._v(" automatically extended like a JavaScript array. For example, the following code throws an exception, because the value is being assigned to a position past the end of the buffer.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Also note that when assigning values to the buffer this way, the values must be byte values.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// Assigning a string value -- throws an exception\nbuffer[0] = "a";\n// Assigning a byte value works\nbuffer[0] = "a".charCodeAt(0);\n')])])]),s("h2",{attrs:{id:"titanium-codec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-codec"}},[t._v("#")]),t._v(" Titanium.Codec")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Titanium.Codec")]),t._v(" module provides methods for encoding and decoding binary data from buffers into JavaScript primitives. The "),s("code",[t._v("Codec")]),t._v(" module supports conversion of two basic primitive types: Numbers and Strings. "),s("code",[t._v("Codec")]),t._v(" also handles byte order conversion.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Codec")]),t._v(" module methods do "),s("strong",[t._v("not")]),t._v(" resize the target buffer.")]),t._v(" "),s("h3",{attrs:{id:"numeric-conversions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#numeric-conversions"}},[t._v("#")]),t._v(" Numeric conversions")]),t._v(" "),s("p",[t._v("Numeric conversion is provided for the following types: "),s("code",[t._v("byte")]),t._v(", "),s("code",[t._v("short")]),t._v(", "),s("code",[t._v("int")]),t._v(", "),s("code",[t._v("long")]),t._v(", "),s("code",[t._v("float")]),t._v(", and "),s("code",[t._v("double")]),t._v(".")]),t._v(" "),s("p",[t._v("The following code excerpt encodes a 4-byte integer into the buffer, starting at index 10 (the 11th byte of the integer).")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Encode a 4 byte integer into position 10 using BIG_ENDIAN encoding")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x3456789a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dest"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    byteOrder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BIG_ENDIAN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The following code excerpt "),s("strong",[t._v("decodes")]),t._v(" the 4-byte integer written to the buffer in the previous example.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Decode a 4 byte integer from position 10 using BIG_ENDIAN encoding")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    byteOrder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BIG_ENDIAN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"string-conversions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-conversions"}},[t._v("#")]),t._v(" String conversions")]),t._v(" "),s("p",[t._v("String conversion is provided using the following character sets: "),s("code",[t._v("ISO_LATIN1")]),t._v(", "),s("code",[t._v("UTF8")]),t._v(", "),s("code",[t._v("UTF16")]),t._v(", "),s("code",[t._v("UTF16BE")]),t._v(", and "),s("code",[t._v("UTF16LE")]),t._v(". The default is UTF-8. Titanium.Codec also suports both Big Endian and Little Endian byte ordering.")]),t._v(" "),s("p",[t._v("The following excerpt encodes a string into a buffer, then trims the buffer to the length of the encoded string.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" encodedLength "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dest"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" buffer\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" encodedLength"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The following excerpt decodes a UTF-8 string from a buffer.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" buffer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"buffer-creation-with-encode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buffer-creation-with-encode"}},[t._v("#")]),t._v(" Buffer creation with encode")]),t._v(" "),s("p",[s("code",[t._v("Titanium.createBuffer()")]),t._v(" has convenience options for creating a buffer from existing data. These options are just a convenient alternative to calling `createBuffer` and `encodeString` or `encodeNumber` separately, as shown in the following excerpt.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a buffer and encode a string at the same time.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Using default encoding of Ti.Codec.CHARSET_UTF8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer_utf8 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a buffer and encode a string to UTF16")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer_utf16 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHARSET_UTF16")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);