(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1226:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"spotlight-search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spotlight-search"}},[t._v("#")]),t._v(" Spotlight Search")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Starting with iOS 9.0, Apple lets you index your application content and activities to be used by the spotlight search in iOS. When a user searches for keywords you indexed, your application or activity will be displayed in the results of the search.")]),t._v(" "),s("p",[t._v("To add a search index of your application for iOS, the Titanium SDK exposes the following APIs:")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"#!/api/Titanium.App.iOS.SearchableItemAttributeSet"}},[t._v("Titanium.App.iOS.SearchableItemAttributeSet")]),t._v(": define keywords and properties to describe the item you want to index. Note that this object can be added to either a SearchableItem object or an UserActivity object to index application content or activities, respectively.")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"#!/api/Titanium.App.iOS.SearchableItem"}},[t._v("Titanium.App.iOS.SearchableItem")]),t._v(": assembles the SearchableItemAttributeSet as an unique object package to be indexed.")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"#!/api/Titanium.App.iOS.SearchableIndex"}},[t._v("Titanium.App.iOS.SearchableIndex")]),t._v(": exposes the iOS search index to add the SearchableItems to the index.")])])]),t._v(" "),s("p",[t._v("In addition to the APIs exposed by the Titanium SDK, if some of your content is available as web content, you can add special markup to make it discoverable by Apple.")]),t._v(" "),s("h3",{attrs:{id:"private-vs-public-indexing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#private-vs-public-indexing"}},[t._v("#")]),t._v(" Private vs. public indexing")]),t._v(" "),s("p",[t._v("You have the option of adding searchable content to either a private index (on-device index) or a public index (Apple's server-side index). The private index will make the searchable content only available on the user's device. The public index makes content available to other users. Only user activities and web content may be added to the public index.")]),t._v(" "),s("p",[t._v("To make content available for public indexing, you need to set the "),s("code",[t._v("eligibleForPublicIndexing")]),t._v(" property of a UserActivity object to true and add specific mark up notation to your web site to allow Apple to index it.")]),t._v(" "),s("h2",{attrs:{id:"index-application-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index-application-content"}},[t._v("#")]),t._v(" Index application content")]),t._v(" "),s("p",[t._v("To index application content:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a SearchableItemAttributeSet object and define the keywords and properties to describe the item to index.")])]),t._v(" "),s("li",[s("p",[t._v("Create a SearchableItem object and set its "),s("code",[t._v("attributeSet")]),t._v(" property to the previously created SearchItemAttributeSet object.")])]),t._v(" "),s("li",[s("p",[t._v("Create an instance of a SearchableIndex and pass the SearchableItem object to the "),s("code",[t._v("AddToDefaultSearchableIndex()")]),t._v(" method.")])])]),t._v(" "),s("p",[t._v("To create a SearchableItemAttributeSet object, use the "),s("code",[t._v("Titanium.App.iOS.createSearchableItemAttributeSet()")]),t._v(" method and pass the method a dictionary with the "),s("code",[t._v("itemContentType")]),t._v(" attribute set to a "),s("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniform type identifier"),s("OutboundLink")],1),t._v(". You must set this property when creating the object. Use either the "),s("code",[t._v("Titanium.App.iOS.UTTYPE_*")]),t._v(" constants or the string indentifier. The property describes the content type of the item you will be indexing, for example, an image ("),s("code",[t._v("public.image")]),t._v("), movie ("),s("code",[t._v("public.movie")]),t._v(") or PDF ("),s("code",[t._v("com.adobe.pdf")]),t._v(").")]),t._v(" "),s("p",[t._v("Besides the "),s("code",[t._v("itemContentType")]),t._v(" property, set other document-specific properties to describe the content to be indexed. For example, the code below describes an item for an audio file.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" itemAttr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSearchableItemAttributeSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    itemContentType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTTYPE_AUDIO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'While My Guitar Gently Weeps'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    artist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The Beatles'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    album"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The Beatles (White Album)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    musicalGenre"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Rock'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    keywords"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'love'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sleeping'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'floor'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sweeping'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("To create a SearchableItem object, use the "),s("code",[t._v("Titanium.App.iOS.createSearchableItem()")]),t._v(" method. Pass the method a dictionary with the following properites defined. Only the "),s("code",[t._v("attributeSet")]),t._v(" property is required to be set.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("attributeSet:")]),t._v(" set to the previously created SearchableItemAttributeSet object to associate the metadata with the SearchItem object.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("domainIdentifier:")]),t._v(" user-defined string that identifies the domain or owner the item belongs to, for example, if the item describes a song, the domain identifier could be an album.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("expirationDate:")]),t._v(" set to have the content removed by that date. By default, the indexed data will be removed after one month.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("uniqueIdentifier:")]),t._v(" user-defined string that uniquely identifiers the object within the application.")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSearchableItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    identifier"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beatles-white-album-lp-1-track-7'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    domainIdentifier"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beatles-white-album'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    attributeSet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" itemAttr\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("To index the item, create an instance of a SearchableIndex with the "),s("code",[t._v("Titanium.App.iOS.createSearchableIndex()")]),t._v(" method. Invoke the "),s("code",[t._v("addToDefaultSearchAbleIndex()")]),t._v(" method on the instance, and pass the method an array of SearchableItem objects to index and a callback function to handle the success and error cases.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" indexer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSearchableIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nindexer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addToDefaultSearchableIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Press the home button and now search for your keywords'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Error: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("When you run the above code, after the success dialog appears, close the application and go to Spotlight search by swiping to the right on the home screen. Searching for any of the terms from the attribute set will display the item and application as a result.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(827),alt:"appsearch"}})]),t._v(" "),s("h2",{attrs:{id:"index-activities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index-activities"}},[t._v("#")]),t._v(" Index activities")]),t._v(" "),s("p",[t._v("To index an activity:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a SearchableItemAttributeSet object and define the keywords and properties to describe the activity to index.")])]),t._v(" "),s("li",[s("p",[t._v("Create the UserActivity and set its "),s("code",[t._v("eligibleForSearch")]),t._v(" property to true, which gives the activity permission to be added to the on-device index.")])]),t._v(" "),s("li",[s("p",[t._v("Optional. To make the activity searchable to other users, you need to set the "),s("code",[t._v("eligibleForPublicIndexing")]),t._v(" property to "),s("code",[t._v("true")]),t._v(", and set either the "),s("code",[t._v("webpageURL")]),t._v(" or "),s("code",[t._v("requiredUserInfoKeys")]),t._v(" property. The activity will be added to Apple's server-side index.")])]),t._v(" "),s("li",[s("p",[t._v("Invoke the UserActivity object's "),s("code",[t._v("addContentAttributeSet()")]),t._v(" and pass it the SearchableItemAttributeSet object, which adds the attribute set to the device's index and optionally Apple's server-side index.")])])]),t._v(" "),s("p",[t._v("For example, if the user activity is editing a document, you may want to advertise the activity to spotlight.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" itemAttr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSearchableItemAttributeSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    itemContentType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.microsoft.word.doc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'How to Make Activities Searchable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    contentDescription"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'How-to guide about making a handoff activity appear in spotlight'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    editors"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user@foo.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'editor@apple.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    keywords"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'titanium'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'activity'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handoff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'spotlight'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" activity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUserActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    activityType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.foo.edit.docx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Edit the Document'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    userInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'howto.docx'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    eligibleForSearch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nactivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addContentAttributeSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("itemAttr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nactivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("becomeCurrent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(828),alt:"activitysearch"}})]),t._v(" "),s("h2",{attrs:{id:"respond-to-an-application-launch-from-spotlight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#respond-to-an-application-launch-from-spotlight"}},[t._v("#")]),t._v(" Respond to an application launch from Spotlight")]),t._v(" "),s("p",[t._v("To know if the application was launched from Spotlight, monitor the "),s("a",{attrs:{href:"#!/api/Titanium.App.iOS-event-continueactivity"}},[s("code",[t._v("continueactivity")])]),t._v(" event of the "),s("code",[t._v("Ti.App.iOS")]),t._v(" module. Note that the event is also fired when an activity is handed off to another device.")]),t._v(" "),s("p",[t._v("The event will be passed an object with the following properties:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("activityType")]),t._v(": Will be set to "),s("code",[t._v("com.apple.corespotlightitem")]),t._v(" if the application was launched from Spotlight, else it will be a user activity type")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("searchableItemActivityIdentifier")]),t._v(": Will be set to the unique identifier of the search item")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("title")]),t._v(": Title of the item if available")])])]),t._v(" "),s("p",[t._v("To respond to a launch from Spotlight, check to see if the "),s("code",[t._v("activityType")]),t._v(" is set to "),s("code",[t._v("com.apple.corespotlightitem")]),t._v(", then use the "),s("code",[t._v("searchableItemActivityIdentifier")]),t._v(" to navigate to the item.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'continueactivity'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Not launched from Spotlight")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activityType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.apple.corespotlightitem'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" uniqueIdentifier "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("searchableItemActivityIdentifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Navigate to the content")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"mark-up-web-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mark-up-web-content"}},[t._v("#")]),t._v(" Mark up web content")]),t._v(" "),s("p",[t._v("In order to make web content searchable by Apple, Apple will use the URLs you provide when submitting your application to the iTunes App Store. You will need to update the websites "),s("code",[t._v("robots.txt")]),t._v(" file to tell Applebot which websites to crawl.")]),t._v(" "),s("p",[t._v("In your website HTML, add "),s("a",{attrs:{href:"http://schema.org/docs/schemas.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("schema.org markup"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"http://ogp.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open Graph attributes"),s("OutboundLink")],1),t._v(" to make the search results of your web content more rich. Note that Apple only supports a subset of the available schema.org markup. For more details, see "),s("a",{attrs:{href:"https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/WebContent.html#//apple_ref/doc/uid/TP40016308-CH8-SW1",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Library: App Search Programming Guide - Mark Up Web Content"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Apple also recommends using universal links, which are links in your web content that opens your application if it is installed on the user's device. For more details, see "),s("a",{attrs:{href:"https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Library: App Search Programming Guide - Support Universal Links"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("To test your website with the iOS 9 search APIs, use the following URL: "),s("a",{attrs:{href:"https://search.developer.apple.com/appsearch-validation-tool",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://search.developer.apple.com/appsearch-validation-tool"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further reading")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Library: App Search Programming Guide"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports},827:function(t,e,a){t.exports=a.p+"assets/img/appsearch.e1bce102.png"},828:function(t,e,a){t.exports=a.p+"assets/img/activitysearch.d0dba1fc.png"}}]);