(window.webpackJsonp=window.webpackJsonp||[]).push([[879],{2126:function(e,t,n){"use strict";n.r(t);var a=n(21),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"a-simple-snippet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-simple-snippet"}},[e._v("#")]),e._v(" A Simple Snippet")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("In this recipe, we show how to create a simple Ruble snippet, bind it to an activation trigger, and optionally place it in a menu.")]),e._v(" "),n("h2",{attrs:{id:"the-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-code"}},[e._v("#")]),e._v(" The Code")]),e._v(" "),n("p",[e._v('In the snippet below, we create a very simple snippet, bind it to the activation character "foo", and place it in a menu. This is the entire Ruble file, though you could ad the menu items and commands to your existing file.')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("require 'ruble'\n\nbundle do |bundle|\n  bundle.display_name = 'My Ruble'\n  bundle.menu 'My Ruble' do |menu|\n    menu.command 'My Snippet'\n  end\nend\n\nsnippet \"My Snippet\" do |snip|\n  snip.trigger = \"foo\"\n  snip.expansion = \"my_super_snippet\"\nend\n")])])]),n("p",[e._v('Once created and activated, type "foo" + TAB in your document and see "my_super_snippet" added to the document.')])])}),[],!1,null,null,null);t.default=i.exports}}]);