(window.webpackJsonp=window.webpackJsonp||[]).push([[1026],{1142:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"reste"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reste"}},[t._v("#")]),t._v(" RESTe")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("If you have been working with mobile apps very long, you have probably have seen that APIs are a huge chunk of your workload. Everything is connected to APIs these days and mobile is no exception. This document helps developers consume APIs in a very robust and user-friendly fashion.")]),t._v(" "),s("p",[t._v("Written by "),s("a",{attrs:{href:"http://github.com/jasonkneen",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jason Kneen"),s("OutboundLink")],1),t._v(", RESTe wraps HTTP calls and can consume any kind of web-based API (not just REST ones). It also generates a JavaScript API automatically and supports Backbone.js Models and Collections in Alloy.")]),t._v(" "),s("p",[t._v("The idea for RESTe came from a requirement Jason had when developing Titanium apps:")]),t._v(" "),s("blockquote",[s("p",[t._v("“I build a lot of apps that integrate with APIs. These could be written using the open-source Parse Server or a hosted service, but more often they are custom APIs written by another developer. I used to use a basic api.js library to handle the API integration, but this typically involved writing my own module for the API in question, requiring the api.js module, and writing specific methods for the app.”")])]),t._v(" "),s("h2",{attrs:{id:"developing-apps-before-reste"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#developing-apps-before-reste"}},[t._v("#")]),t._v(" Developing apps before RESTe")]),t._v(" "),s("p",[t._v("When developing apps before RESTe, Jason says he would use an "),s("code",[t._v("api.js")]),t._v(" module that had basic "),s("code",[t._v("GET")]),t._v(", "),s("code",[t._v("POST")]),t._v(" methods, then write specific code per project, like this:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getPreviousLocations")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Rest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Alloy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CFG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baseURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" “users"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("“ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" “"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("previouslocations”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    Rest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("or this:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateUser")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Rest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Alloy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CFG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baseURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" “users"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("“ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    Rest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        “name” "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        “email” "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        “password” "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" password\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"reste-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reste-2"}},[t._v("#")]),t._v(" RESTe")]),t._v(" "),s("p",[t._v("The idea behind RESTe was to write a simple module that could take the effort out of hooking up to APIs – he could drop it into any project and configure it easily on a per-project basis.")]),t._v(" "),s("p",[t._v("Getting started is simple — run this in the root of your Alloy project: "),s("code",[t._v("npm install reste")])]),t._v(" "),s("p",[t._v("Then, configuring a basic setup is a case of initializing a configuration in the "),s("code",[t._v("alloy.js")]),t._v(" file, in this case:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reste "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reste"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("reste")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now we can do our one-time configure")]),t._v("\napi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    debug"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// allows logging to console of ::REST:: messages")]),t._v("\n    errorsAsObjects"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Default: false. New in 1.4.5, will break 1.4.4 apps that handle errors")]),t._v("\n    autoValidateParams"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set to true to throw errors if url properties are not passed")]),t._v("\n    validatesSecureCertificate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional: If not specified, default behaviour from http://goo.gl/sJvxzS is kept.")]),t._v("\n    timeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.parse.com/1/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    requestHeaders"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        “"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Parse"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Id”"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("APPID")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        “"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Parse"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Key”"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RESTID")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        “Content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type”"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json”\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “courses”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        post"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “functions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("getCourses”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" globalOnError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“There was an error getting the courses"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “getVideos”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “classes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("videos”\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “getVideoById”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “classes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("videos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("”\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “addVideo”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        post"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “classes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("videos”\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" retry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dialog "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAlertDialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “Connection error”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" “There was an error connecting to the server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" check your network connection and  retry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            buttonNames"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("‘Retry’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“click”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("retry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Once you’ve setup the config, you have these auto generated methods you can call:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("api.getVideoById({\n    videoId: “fUAM4ZFj9X”\n}, function(video) {\n    // do stuff with the video\n});\n")])])]),s("p",[t._v("and:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("api.updateVideo({\n    objectId: “123”,\n    body: {\n        categoryId: 2,\n        name: “My Video2”\n    }\n}, function(video) {\n    // do stuff with the video\n});\n")])])]),s("p",[t._v("RESTe allows you to make it work with almost any API no matter how it’s written — it doesn’t have to be a “pure” REST-based API.")]),t._v(" "),s("p",[t._v("There’s lots of other options mentioned in the "),s("a",{attrs:{href:"https://github.com/jasonkneen/RESTe",target:"_blank",rel:"noopener noreferrer"}},[t._v("readme file"),s("OutboundLink")],1),t._v(" like hooks and events you can intercept if there are errors or if you need to transform or manipulate the data retrieved.")]),t._v(" "),s("p",[t._v("You can even build in your own caching of data. And other contributors have added support for Promises using libraries like "),s("code",[t._v("q.js")]),t._v(".")]),t._v(" "),s("p",[t._v("One of the most powerful features of RESTe is its support for Backbone.js Models and Collections in Alloy and is, without a doubt, one of its most loved features.")]),t._v(" "),s("p",[t._v("By adding some entries to the RESTe configuration, you can add full support for Backbone.js Models and Collections:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('models: [{\n   name: "location",\n   id: "objectId",\n   read: "getLocation",\n   //content: "results" < - use this is your method returns an array object\n   create: "createLocation",\n   update: "updateLocation",\n   delete: "deleteLocation",\n   collections: [{\n     name: "locations",\n     content: "results",\n     read: "getLocations"\n   }, {\n     name: "locationsByName",\n     content: "results",\n     read: "getLocationsByName"\n   }],\n }],\n methods: [{\n   name: "getLocations",\n   get: "classes/locations"\n }, {\n   name: "getLocation",\n   get: "classes/locations/"\n },{\n   name: "getLocationsByName",\n   get: \'classes/locations?where={"name": ""}\'\n }, {\n   name: "updateLocation",\n   put: "classes/locations/"\n }, {\n   name: "createLocation",\n   post: "classes/locations/"\n }, {\n   name: "deleteLocation",\n   delete: "classes/locations/"\n }]\n')])])]),s("p",[t._v("This includes support for fetching, data-binding, transformations and even Backbone.js events like "),s("code",[t._v("sync")]),t._v(", "),s("code",[t._v("change")]),t._v(", and so on.")]),t._v(" "),s("p",[t._v("So after configuring the example above, you can drop this into a controller:")]),t._v(" "),s("p",[s("code",[t._v("Alloy.Collections.locations.fetch();")])]),t._v(" "),s("p",[t._v("And the this into the View XML:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TableView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dataCollection")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“locations”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“selectLocation”")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TableViewRow")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“locationRow”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“{objectId}”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    <Label class=“title” top=“10”left=“20” text=“{name}”/>\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“subTitle”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bottom")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“10”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“20”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“{address}”/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("TableViewRow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("TableView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("You can even fetch based on parameters, or add sorting and much more.")]),t._v(" "),s("p",[t._v("One important thing to note here is that if you use RESTe then you don’t use the "),s("code",[t._v("<Collection>")]),t._v(" or "),s("code",[t._v("<Model>")]),t._v(" tags you’d usually use with Alloy projects. These are an Alloy implementation of its own method of configuring Backbone.js.")]),t._v(" "),s("p",[t._v("A useful feature of the Model and Collection support is the ability to create Models and Collections on-the-fly. This is great if you want to add some simple data binding but aren’t ready to connect to a live API yet and simply want to mockup a user interface.")]),t._v(" "),s("p",[t._v("Using "),s("code",[t._v(".createModel(name, attributes)")]),t._v(" or "),s("code",[t._v(".createCollection(name, array)")]),t._v(" you can create Models and Collections, bind them to Alloy Views all without touching an API.")]),t._v(" "),s("p",[t._v("As Jason says:")]),t._v(" "),s("blockquote",[s("p",[t._v("It’s been so nice developing apps with RESTe where I can create the app screens, create mock data to bind and format them, and make sure everything’s working. I can even add models to collections to test say, adding comments to a post and save the data to local properties to persist it. When the API is ready, I can easily plug in the end points and with very little change, the app “just works”.")])]),t._v(" "),s("p",[t._v("Before RESTe, when binding data in Alloy, many developers often had to write my own API code and wire it up manually, resulting in using various libraries, looping through results, creating TableView rows or adding to an array to bind to a ListView later.")]),t._v(" "),s("p",[t._v("With RESTe, I’m able to setup a configuration once, and use ONE line of code in a controller, and change ONE line in a View, and add some variables and that’s it. I write less code, my app is less complex to manage and everything is setup in one, easy-to-write (and understand) configuration.")]),t._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further reading")]),t._v(" "),s("p",[t._v("Find out more about RESTe and "),s("a",{attrs:{href:"https://www.npmjs.com/package/reste",target:"_blank",rel:"noopener noreferrer"}},[t._v("install it from npm"),s("OutboundLink")],1),t._v(", or check and contribute to "),s("a",{attrs:{href:"https://github.com/jasonkneen/reste",target:"_blank",rel:"noopener noreferrer"}},[t._v("the repo on GitHub"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);