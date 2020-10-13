(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1406:function(t,a,e){"use strict";e.r(a);var n=e(21),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"application-structures-and-core-building-blocks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-structures-and-core-building-blocks"}},[t._v("#")]),t._v(" Application Structures and Core Building Blocks")]),t._v(" "),n("h2",{attrs:{id:"objective"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),n("p",[t._v("In this section, you'll take a look at the core building blocks of a Titanium app. Tab groups, windows, and their core functionality will be discussed here in detail.")]),t._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),n("p",[t._v("In web development parlance, a Titanium "),n("strong",[t._v("window")]),t._v(" is roughly analogous to a "),n("strong",[t._v("web page")]),t._v(". In turn, Titanium "),n("strong",[t._v("view")]),t._v(" is analogous to a "),n("strong",[t._v("div")]),t._v(". We already touched on the fact that Titanium windows can, but aren't required to, run within their own "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Cross-Platform_Mobile_Development_In_Titanium/Coding_Strategies/#execution-contexts"}},[t._v("execution context")]),t._v(" like a web page. Conceptually, windows are a top-level container just like a web page.")],1),t._v(" "),n("p",[t._v("Titanium views are like divs in that both are style-able, generic content containers. Both can enclose other content (buttons, views, etc.) and must be contained within a window, or web page.")]),t._v(" "),n("p",[t._v("Tab groups are a mobile component without a clear equivalent in the web world. Web pages sometimes use the tab UI metaphor, but the contents of those tabs are typically implemented as divs. The closest analog for mobile tab groups would probably be a set of pages listed in a menu or set of navigation links.")]),t._v(" "),n("p",[t._v("Let's see how you'd use tab groups, windows, and views to construct your app's UI. Mobile utility apps generally feature one of two basic layouts: tab-based or window-based. These are illustrated below:")]),t._v(" "),n("p",[n("img",{attrs:{src:e(674),alt:"app_building_blocks"}})]),t._v(" "),n("h3",{attrs:{id:"tab-based-applications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tab-based-applications"}},[t._v("#")]),t._v(" Tab-based applications")]),t._v(" "),n("p",[t._v("In a tab-based app, two or more tabs are contained within a "),n("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("tab group"),n("OutboundLink")],1),t._v(". Each tab contains a window. Each window contains the various controls and graphics of your app. The basic code for creating a two-tabbed app skeleton looks like this:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create tab group")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tabGroup "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTabGroup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tab 1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tab1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTab")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tab1icon.png'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tab 1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" win1\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tab 2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tab2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTab")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tab2icon.png'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tab 2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" win2\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add tabs to the group")]),t._v("\ntabGroup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTab")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tab1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntabGroup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTab")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tab2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// open tab group")]),t._v("\ntabGroup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("In the preceding code, the tab's "),n("code",[t._v("title")]),t._v(' is the text shown on the tab "handle" while the window\'s '),n("code",[t._v("title")]),t._v(" is shown in a title bar across the top of the window. On iOS, you can add navigation buttons ("),n("code",[t._v("leftNavButton")]),t._v(" and "),n("code",[t._v("rightNavButton")]),t._v(") to the window's title bar. Also on iOS, a modal window opened within a tab will fill the entire screen, overlaying the tab group. A non-modal window will open within the tab. On Android, a window automatically fills the entire screen and inherits the Back button functionality. Tapping the Back button closes the window and returns you to the tab group's focused window.")]),t._v(" "),n("h4",{attrs:{id:"tab-recommendations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tab-recommendations"}},[t._v("#")]),t._v(" Tab recommendations")]),t._v(" "),n("p",[t._v("Users expect each tab to be focused on a limited and related set of functionality. Tabs are expected to be related to each other, within the overall purpose of your app. However, they are not expected to be in any sort of hierarchical relationship. Tabs are peers, or siblings, of each other; not children of one another.")]),t._v(" "),n("p",[t._v('On iOS, the tab "handles" have a fixed minimum width. If you define more tabs than will fit, iOS will display an ellipsis on a new tab labeled "More". Tapping that tab opens a table view style window listing additional tabs.')]),t._v(" "),n("p",[t._v('On Android, tab "handles" are not fixed-width. Instead, tabs will shrink to fit the number of tabs you have created. While this behavior is convenient, you need to be aware that using too many tabs in this manner make shrink your tab "handles" to unusable dimensions. Always test the usability of your UI as you develop.')]),t._v(" "),n("p",[t._v("For both platforms, we recommend you limit the tabs in your app to four or less so that all your tabs can be visible at once and remain easily clickable across platforms.")]),t._v(" "),n("h3",{attrs:{id:"window-based-apps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#window-based-apps"}},[t._v("#")]),t._v(" Window-based apps")]),t._v(" "),n("p",[t._v("A window-based app uses views, controls, and graphics that are contained within a full-screen window. All app flow is driven from menu, UI, or navigation components available to the given platform. Both Android and iOS can take advantage of the Titanium Window's "),n("code",[t._v("open()")]),t._v(" function which will create a new window that will present itself on the top of our stack. Conversely, to "),n("em",[t._v("pop")]),t._v(" a window from the stack, we can use its "),n("code",[t._v("close()")]),t._v(" function.")]),t._v(" "),n("p",[t._v("In addition to this cross platform method, let's take a look at some of the platform specific ways you can navigate through your app without the aid of tab groups.")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Android")]),t._v(" "),n("ul",[n("li",[n("p",[t._v('The Menu button can be used to display options for navigation. These can be sections similar to tabs, or more direct instructions like "Back" or "Forward" in a web browser.')])]),t._v(" "),n("li",[n("p",[t._v("The Back button will close the current window and go back to the previous one")])])])]),t._v(" "),n("li",[n("p",[t._v("iOS")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("You can use a "),n("a",{attrs:{href:"#!/api/Titanium.UI.iOS.NavigationWindow"}},[t._v("navigation window")]),t._v(", which is the core of most iOS app navigation.")])]),t._v(" "),n("li",[n("p",[t._v("You could implement a "),n("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("DashboardView"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("img",{attrs:{src:e(675),alt:"dashboard_view"}})])])])])]),t._v(" "),n("p",[t._v("It's also notable that window based apps are the common choice for mobile games. As most games employ only a single screen and use mostly custom UI components, OS level navigation is rarely useful. The game is simply presented full-screen and the gameplay itself dictates how the user interacts with the app.")]),t._v(" "),n("h2",{attrs:{id:"references-and-further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[t._v("#")]),t._v(" References and Further Reading")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("Titanium.UI module"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),n("p",[t._v("In this section, you looked at the core building blocks of a Titanium app, including tab groups and windows and the ways you can use each. In the upcoming sections, we'll look in depth at how to lay out the views and components of your UI in the Titanium model.")])])}),[],!1,null,null,null);a.default=s.exports},674:function(t,a,e){t.exports=e.p+"assets/img/app_building_blocks.056ca2be.png"},675:function(t,a,e){t.exports=e.p+"assets/img/dashboard_view.ebd59b77.png"}}]);