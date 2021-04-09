(window.webpackJsonp=window.webpackJsonp||[]).push([[919],{2088:function(e,t,o){"use strict";o.r(t);var a=o(21),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"accessing-the-log-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-log-file"}},[e._v("#")]),e._v(" Accessing the Log File")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("The Studio "),o("code",[e._v(".log")]),e._v(" file records most application exceptions that occur while you are using the Studio application, and is helpful to the Studio development team in troubleshooting bugs that you may encounter during normal usage.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Hint")]),e._v(" "),o("p",[o("em",[e._v("Always")]),e._v(" file a Studio Log when reporting an issue in the bug tracker")])]),e._v(" "),o("h2",{attrs:{id:"accessing-the-log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-log"}},[e._v("#")]),e._v(" Accessing the Log")]),e._v(" "),o("p",[e._v("You can access your log either through the "),o("strong",[e._v("Help")]),e._v(" menu in Studio or manually through the filesystem on your computer.")]),e._v(" "),o("h3",{attrs:{id:"accessing-the-log-from-studio-eclipse"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-log-from-studio-eclipse"}},[e._v("#")]),e._v(" Accessing the Log from Studio/Eclipse")]),e._v(" "),o("p",[e._v("In the Studio-specific submenu, navigate to "),o("strong",[e._v("Help")]),e._v(" > "),o("strong",[e._v("Studio")]),e._v(" > "),o("strong",[e._v("View Log File")]),e._v(" to open the log file in an editor window, where you can then save to a separate file in order to attach it to a support ticket.")]),e._v(" "),o("h3",{attrs:{id:"accessing-the-log-from-the-file-system"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-log-from-the-file-system"}},[e._v("#")]),e._v(" Accessing the Log from the File System")]),e._v(" "),o("p",[e._v("Your current .log file is located in a .metadata folder in your current workspace directory. The following is the path if you are working on the default workspace.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Windows XP: "),o("code",[e._v("C:\\Documents and Settings\\username\\My Documents\\<Studio Workspace>\\.metadata\\.log")])])]),e._v(" "),o("li",[o("p",[e._v("Windows Vista/Windows 7: "),o("code",[e._v("C:\\Users\\username\\Documents\\<Studio Workspace>\\.metadata\\.log")])])]),e._v(" "),o("li",[o("p",[e._v("Mac OS X: "),o("code",[e._v("~/Documents/<Studio Workspace>/.metadata/.log")])])])]),e._v(" "),o("h2",{attrs:{id:"diagnostic-test"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#diagnostic-test"}},[e._v("#")]),e._v(" Diagnostic Test")]),e._v(" "),o("p",[e._v("In the Studio-specific submenu, navigate to "),o("strong",[e._v("Help > Studio > Run Diagnostic Test")]),e._v(" to run a set of tests on the system environment that will help diagnose the issues. You could then copy the content to a separate file and attach it to a support ticket.")]),e._v(" "),o("h2",{attrs:{id:"mobile-projects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mobile-projects"}},[e._v("#")]),e._v(" Mobile Projects")]),e._v(" "),o("p",[e._v("If you get a console error when building a project, the correct log to submit depends on the platform you are building. An example error:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('Traceback (most recent call last):\n  File "/Users/loganbest/Library/Application Support/Titanium/mobilesdk/osx/1.7.1/iphone/builder.py", line 1397, in <module>\n    main(sys.argv)\n  ...\n')])])]),o("h3",{attrs:{id:"ios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[e._v("#")]),e._v(" iOS")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Inside Studio, open the "),o("strong",[e._v("Project Explorer")]),e._v(" view")])]),e._v(" "),o("li",[o("p",[e._v("Click the small down arrow in the upper-right-corner of the view")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Customize View")])])]),e._v(" "),o("li",[o("p",[e._v("Scroll down to the bottom of the "),o("strong",[e._v("Filters")]),e._v(" tab and uncheck "),o("strong",[e._v("Appcelerator Build Folders")]),e._v(" or "),o("strong",[e._v("Titanium Build Folders")])])])]),e._v(" "),o("p",[e._v("You can now see the build folder inside your Titanium projects")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Expand the "),o("strong",[e._v("build/iphone/build")]),e._v(" folder")])]),e._v(" "),o("li",[o("p",[e._v("Attach the "),o("strong",[e._v("build.log")]),e._v(" file, and the output from the console.")])])]),e._v(" "),o("p",[e._v("Once you have found the log file, you can reverse the above steps to hide the build folders once again.")]),e._v(" "),o("h3",{attrs:{id:"android-and-other-platforms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-and-other-platforms"}},[e._v("#")]),e._v(" Android and other platforms")]),e._v(" "),o("p",[e._v("Submit the output from the console.")]),e._v(" "),o("h2",{attrs:{id:"javascript-web-debugger-log-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#javascript-web-debugger-log-file"}},[e._v("#")]),e._v(" JavaScript Web Debugger Log File")]),e._v(" "),o("p",[e._v("See "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Accessing_your_debugger_log/"}},[e._v("Accessing your debugger log")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);