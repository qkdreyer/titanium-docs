(window.webpackJsonp=window.webpackJsonp||[]).push([[861],{1944:function(t,e,a){"use strict";a.r(e);var n=a(21),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"changing-the-vm-used-with-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-vm-used-with-studio"}},[t._v("#")]),t._v(" Changing the VM Used with Studio")]),t._v(" "),a("p",[t._v("Some Studio users may need to change the VM they use for running Studio. These instructions describe how to switch between GCJ and Sun's JVM.")]),t._v(" "),a("p",[t._v("1. Open a command prompt and type "),a("strong",[t._v("java -version")]),t._v(" to see which VM you are currently running. If you are running GCJ, the command output will look like:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('java version "1.5.(some number)"\ngij (GNU libgcy) version 5.1.0 (some number) (Red Hat some version number)\n')])])]),a("p",[t._v("If you're running Sun's JVM, the output will look like:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('java version "1.5.2_12"\nJava(TM) 2 Runtime Enrivonment, Standard Edition (build 1.4.5_12)\n')])])]),a("p",[t._v("2. At the command prompt, type the path for the VM that Studio should use. An example of this for GCJ is:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd <path-to-aptana-root-directory>\n./aptanastudio3 -vm /etc/alternatives/java\n")])])]),a("p",[t._v('3. To check that the correct VM is running, replace the path with the path to Sun\'s "java" executable, or update your "java" soft link to point to Sun\'s java.')])])}),[],!1,null,null,null);e.default=s.exports}}]);