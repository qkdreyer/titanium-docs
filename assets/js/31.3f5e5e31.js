(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1908:function(A,t,e){"use strict";e.r(t);var o=e(21),n=Object(o.a)({},(function(){var A=this,t=A.$createElement,o=A._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[A._v("#")]),A._v(" Introduction")]),A._v(" "),o("p",[A._v("This walkthrough will instruct you how to install the JavaScript debugger in Firefox, add a breakpoint to your code, and display the current values of your variables.")]),A._v(" "),o("ol",[o("li",[o("p",[A._v("Import the debugging sample as a project.")]),A._v(" "),o("ol",[o("li",[o("p",[A._v("In the Samples View, expand the "),o("strong",[A._v("Studio Samples")]),A._v(" node.")])]),A._v(" "),o("li",[o("p",[A._v("Select the "),o("strong",[A._v("Debugger Sample")]),A._v(".")])]),A._v(" "),o("li",[o("p",[A._v("Right-click the "),o("strong",[A._v("Debugger Sample")]),A._v(" and select "),o("strong",[A._v("Import sample as project")]),A._v(" from the context menu.")])]),A._v(" "),o("li",[o("p",[A._v("Follow the prompts to import the sample. Studio creates a new "),o("strong",[A._v("Debugger Sample")]),A._v(" project, which includes a "),o("strong",[A._v("debug_tests.html")]),A._v(" file (which will automatically open) and a "),o("strong",[A._v("debug_timer.html")]),A._v(" file. You will be using "),o("strong",[A._v("debug_timer.html")]),A._v(" later on in this tutorial.")])]),A._v(" "),o("li",[o("p",[A._v("In your App Explorer or Project Explorer views, navigate to the new "),o("strong",[A._v("Debugger Sample")]),A._v(" project.")])]),A._v(" "),o("li",[o("p",[A._v("Expand the "),o("strong",[A._v("Debugger Sample")]),A._v(" project node.")])]),A._v(" "),o("li",[o("p",[A._v("Open the "),o("strong",[A._v("debug_timer.html")]),A._v(" file in your Editor.")])])])]),A._v(" "),o("li",[o("p",[A._v("Install the debugger.")]),A._v(" "),o("ol",[o("li",[o("p",[A._v("From the "),o("strong",[A._v("Run")]),A._v(" menu, select "),o("strong",[A._v("Debug...")]),A._v(" to open a "),o("strong",[A._v("Debug")]),A._v(" window.")])]),A._v(" "),o("li",[o("p",[A._v("In the lower-left corner of the "),o("strong",[A._v("Debug")]),A._v(" window, under the list of Configurations, click the "),o("strong",[A._v("New")]),A._v(" button to create a new configuration.")])]),A._v(" "),o("li",[o("p",[A._v("In the "),o("strong",[A._v("Name")]),A._v(' field, type a name for your new configuration (for example, "debug").')])]),A._v(" "),o("li",[o("p",[A._v("Under Web Browser, browse to your Firefox installation, if it is not there by default.")])]),A._v(" "),o("li",[o("p",[A._v("Click the "),o("strong",[A._v("Debug")]),A._v(" button to install the debugger into Firefox. A browser window opens, checks for the Debugger extension, and then closes. Studio displays a prompt asking if you would like to install the Debugger Extension.")])]),A._v(" "),o("li",[o("p",[A._v("On the prompt, click "),o("strong",[A._v("Yes")]),A._v(" to install the Debugger Extension for your browser. A browser window opens and displays a "),o("strong",[A._v("Software Installation")]),A._v(" prompt.")])]),A._v(" "),o("li",[o("p",[A._v("Click the "),o("strong",[A._v("Install Now")]),A._v(" button to start installing the debugger. An "),o("strong",[A._v("Extensions")]),A._v(" pop-up window displays the list of extensions installed in your browser.")])]),A._v(" "),o("li",[o("p",[A._v("Close the "),o("strong",[A._v("Extensions")]),A._v(" pop-up window.")])]),A._v(" "),o("li",[o("p",[A._v("Close your browser window. Studio opens an "),o("strong",[A._v("Install Debugger Extension")]),A._v(" pop-up window.")])]),A._v(" "),o("li",[o("p",[A._v("On the "),o("strong",[A._v("Install Debugger Extension")]),A._v(" pop-up window, click "),o("strong",[A._v("OK")]),A._v(". A browser window opens, which installs the debugger.")])]),A._v(" "),o("li",[o("p",[A._v("Close the browser window. Studio displays a prompt telling you that the debugger was successfully installed.")])]),A._v(" "),o("li",[o("p",[A._v("Click "),o("strong",[A._v("OK")]),A._v(". A browser window opens that contains the start page that you specified in your configuration.")])])])]),A._v(" "),o("li",[o("p",[A._v("Start debugging.")]),A._v(" "),o("ol",[o("li",[o("p",[A._v("Return to Studio, and switch to the Debug perspective. To access the Debug perspective for the first time, click the "),o("strong",[A._v("Perspective")]),A._v(" button "),o("img",{attrs:{src:e(372),alt:"IconPerspective"}}),A._v(" and select "),o("strong",[A._v("Other... > Debug")]),A._v(" from the pop-up menu. Studio switches to the Debug Perspective.")])]),A._v(" "),o("li",[o("p",[A._v("On the Debug View in the upper-left corner of the Debug Perspective, select the main thread for "),o("strong",[A._v("timer.html")]),A._v(" and click the "),o("strong",[A._v("Suspend")]),A._v(" button "),o("img",{attrs:{src:e(341),alt:"IconSuspend"}}),A._v(" to suspend the current JavaScript thread.")])]),A._v(" "),o("li",[o("p",[A._v("Switch back to Firefox, and click the "),o("strong",[A._v("Start")]),A._v(" button on the timer page to start executing the JavaScript for the page.")])]),A._v(" "),o("li",[o("p",[A._v("Switch back to Studio to continue debugging.")])])])]),A._v(" "),o("li",[o("p",[A._v("Add a breakpoint to your code.")]),A._v(" "),o("ol",[o("li",[o("p",[A._v("In "),o("strong",[A._v("timer.html")]),A._v(", navigate to the "),o("strong",[A._v("timerUpdate()")]),A._v(" function.")])]),A._v(" "),o("li",[o("p",[A._v("On the second line of the "),o("strong",[A._v("timerUpdate")]),A._v(" function (for example, "),o("code",[A._v("if( timerID ) {")]),A._v("), right-click in the gray margin and select "),o("strong",[A._v("Toggle Breakpoint")]),A._v(" from the context menu.")])]),A._v(" "),o("li",[o("p",[A._v("Click the "),o("strong",[A._v("Resume")]),A._v(" button "),o("img",{attrs:{src:e(371),alt:"IconResume"}}),A._v(" to resume execution of your code.")]),o("p",[A._v("Execution of your JavaScript code will automatically suspend on this breakpoint.")])])])]),A._v(" "),o("li",[o("p",[A._v("Inspect the values of your variables.")]),A._v(" "),o("ol",[o("li",[o("p",[A._v("In the upper-right part of the Debug perspective, click the "),o("strong",[A._v("Variables")]),A._v(" tab. The Variables View displays the values for the variables in the current stack frame.")])]),A._v(" "),o("li",[o("p",[A._v("Click the "),o("strong",[A._v("Show Type Names")]),A._v(" button "),o("img",{attrs:{src:e(570),alt:"IconShowTypeNames"}}),A._v(" to display what types your variables are.")])]),A._v(" "),o("li",[o("p",[A._v("Right-click a variable and select "),o("strong",[A._v("Change Value...")]),A._v(" from the context menu, if you want to change a variable value.")])])])]),A._v(" "),o("li",[o("p",[A._v("Quit the debugger.")]),A._v(" "),o("ol",[o("li",[A._v("Click the "),o("strong",[A._v("Terminate")]),A._v(" button "),o("img",{attrs:{src:e(342),alt:"IconTerminate"}}),A._v(" to stop debugging and close your Firefox window.")])])])])])}),[],!1,null,null,null);t.default=n.exports},341:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAIAAACkFJBSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH1gofFykW44KVtQAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABAElEQVR4nO3UMUoDQRTG8W/WyWIhG4sNSAQbG7s0HkAJXsQL5Bq2XsDeU8QbiJ2lphDc3SJNIMnOe5/FumPIrsxCSJdXPX4wf2aaMcX3O3aeaPfEofLv2CZ9vT0Ws2m1pxe3w9GkKeFKMZve3L8CAuDl6Xo4mjRl60jLi6gEBCzrvUXCdxEhyjl1YaITEf6JLMzRr4QrKuQqQ5mjN1ChF5a5qaVLRbHKdPkRHVNFvWD5yVrCFedIN8c6pz11jl64zmD7lYQr4tT0EsSpsX1x2iodXuSIeAAo4lQdvRjQS4e7CI1NjE2q3Qs2JFw5uxw/P4yr/fzqrlW2xhx+qT1WfgCoyLlAXpjddQAAAABJRU5ErkJggg=="},342:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAIAAACkFJBSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH1gofFykmxVulGQAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAAwUlEQVR4nO2UoQ7CQBBEpwRRuQKBPInkE/oJxVUiK5F8ChJZBxJZiUQiTx5JxciVCGTnAkmD68iZvZfZy+WK4fXEZC2mI2ZKVsuxNVx69tfcAavq1a76TuGt2+7bHOVxPv1EAQAHu04UaRo5rij0SJqLJJKgCDJdALjCZKTuxbGJ0clxtI5RuNkudNkcdGkLihGwElaKcStNlREUTymFYKWgpBA8pZ8oAIIZDuLJGCAYeqO6vrdHSf+kY7OYf6k/Ut4XDUJAk80/SQAAAABJRU5ErkJggg=="},371:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAIAAACkFJBSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH1gsBADYsfBv+cAAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABAElEQVR4nGN88/IGA8WAiXIjRk3BCViQOU/OT3j35MCvPwwMDAwSCg4yhgVeM9sYGBi2pVeRYMqLGzscMk5A2AdmWMgYFjAwMJT5GhA0iwVd4McJNIFvf/7meOoyMvzHYxaKKT9+QKgXDBwSUDYDw8dfvyGMWGdNBgYGx8kNIkrcq71L8bnlx4cfHD9e/OAQgIscffYaWYG2niQDI4Pj5Ib9uQ24fYQKvv/69fXPVxjvP5RgxOsjBgYGDgEOhg8cHAIcUKf9/CHCwQmVY/zPwMBw5OgHGU1hZIegm/IDEhgCGgg2AwMP2z+IQ3Yc+MTAwHC8pAPTyRg+4rBAE+Bm/b92N0796QOQ6wAAACJJREFUWEyRUPBY0WAAYStoeEAYa3d/wqMfAhhHy5dBbwoAnLFmium1LfwAAAAASUVORK5CYII="},372:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAIAAABfOGuuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH1QwCEhw217G9bAAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABAElEQVR4nLWTT0hUURTGf+feO2O60YXRQiFbpiAtxElBXShuhJmhCNuIiPSHQLECI5QQUUHB7WyKSFypKBXMQoSgEGQ2Ci7ERYs2LoSpNjWO773htnj2Rh9vkYsOd/Ed7v1xvvPBlfzxIZcv9Y/vdjeSl8Z2N5I9D3PnSROorpEsyljR6DgqXq9+tLa1tCca7ecEAuC6pdxKX6I/C0iwW8dc/n7qZlyrKzGpiunqKn3jauXRu4bUk/cAFgDhQybdObhZxrpGsiiNGFTM6opg2s+PzUD/g/nV1y+w9D7+dMHk86a1xLMdXx+sjzfeXfD19adHublrtvCteOIlx76Ed/OrNh4WodirjQAAAJRJREFUQN/U8duJ2lu370Uk6ZSU3yvBKxlfKM7Ondn83v5+RJJFVwNageXr9zpn6VXIiP8gjBXc2PbyDH7Y1KSHpoMrEawl87I7AvvtmtTAZEMlwJvMghakHDsIv5zIaY4GtPh+KoyARQQLYrFCwTURWNEzAeaUjJa/fs+McuJFYaeeWhxNB+2j4S3CVY5d/u/HCdUf1yx+TLQugWkAAAAASUVORK5CYII="},570:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAIAAACkFJBSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH1gsBFjIMO7LEfgAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABAElEQVR4nM2Uz0sUYRjHv69rA5tLqwamVkrB4CXF/MEqYYJRdOhUUBCd9OBlD3boH+gkeJXsJATiQVBcWVBYgw3aQmuqjSFaY2FHBqR1dX/gFIzvvE+HUXBmZ5H04gMvfJ/D+3mf75f3fVnu90+cuqpOjzj7lK1S3UyskMxIJ6dsleoi8dS7T7+yuwaAZEZ6vZT9b0oknlJUzdbJjDQ5mwj4jx/KQZmJFQC8DN8DkNbzk7OJx/c7n92tPZZSfbRplxuaWYyjDYCiauGnt9ov5/4UNo2iXth2Xyu5Z9Sb0kir12+OvP+6CWCwVx7oaiVqCXod/iX2oqKj88GrAD5+1wFculgD+865eAAAAO5JREFUYEPbmZr7XE6xhK+io73qrok3H+x003p+fvVHWs/3d1wRAgQwBhCIgYG4cBzvaCLxVMAv2ekqqja38i3gl/o6W7ggSxAXxAVZFnGBfe7zpiQzUsAv3Qlda22uH+yV7WiGH3abprD3c05cELfAOUzLYYIdfdOG8fdCww0AdLDs4Q97xkAAAxEllscHhp5451IqFs8FremFdQDDj0LT82suYW68Mo0d08jJNY6wHblkt7NcQFE1RdW4ReXCRgBoDI1VdBSNRm8/CAPEiIERAS5hrD0vR7gd7XPf28UpVK7+Jg+Ee5YT11n66/4BMgv88T0hXtUAAAAASUVORK5CYII="}}]);