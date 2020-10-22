(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1057:function(e,s,t){"use strict";t.r(s);var n=t(21),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"modules-cloud-pushschedules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-pushschedules"}},[e._v("#")]),e._v(" Modules.Cloud.PushSchedules")]),e._v(" "),t("TypeHeader"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("The following APIs are only available for Appcelerator Platform customers.  You must be an\napplication admin to use these APIs.")]),e._v(" "),t("p",[e._v("The PushSchedules API lets you schedule push notifications to be delivered to your application users\non a recurring or one-time basis.")]),e._v(" "),t("p",[e._v("You may create up to 100 scheduled push notifications for your application.\nDatetime fields use the ISO 8601 format, for example, "),t("code",[e._v("YYYY-MM-DDTHH:mm:ss+ZZZZ")]),e._v(".")]),e._v(" "),t("p",[e._v("For information on configuring and setting up push notifications,\nsee the "),t("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Push_Notifications",target:"_blank",rel:"noopener noreferrer"}},[e._v("Push Notifications guide"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"create-a-scheduled-push-notification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-scheduled-push-notification"}},[e._v("#")]),e._v(" Create a scheduled push notification")]),e._v(" "),t("p",[e._v("This example schedules a push notification to be sent only once within the five-day perid.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PushSchedules.create({\n    schedule: {\n        name: 'push schedule',\n        start_time: '2015-09-05T10:11',\n        recurrence: {\n            interval: 'weekly',\n            end_time: '2015-09-10T10:11'\n        },\n        push_notification: {\n            payload: 'hello world',\n            channel: 'channelOne'\n        }\n    }\n}, function(e) {\n    if (e.success) {\n        Ti.API.info('Success! \\n id: ' + e.push_schedules[0].id);\n    } else {\n        Ti.API.error('Error: ' + ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"remove-a-scheduled-push-notification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-scheduled-push-notification"}},[e._v("#")]),e._v(" Remove a scheduled push notification")]),e._v(" "),t("p",[e._v("This example deletes the specified scheduled push notification.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PushSchedules.remove({\n    ids: savedPushId\n}, function(e){\n    if (e.success) {\n        Ti.API.info(\"Success!\");\n    } else {\n        Ti.API.error('Error: ' + ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"query-scheduled-push-notifications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-scheduled-push-notifications"}},[e._v("#")]),e._v(" Query scheduled push notifications")]),e._v(" "),t("p",[e._v("This example retrieves all scheduled push notifications.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('Cloud.PushSchedules.query({}, function(e) {\n    if (e.success) {\n        Ti.API.info("List of scheduled push notifications:");\n        e.push_schedules.forEach(function(push){\n            Ti.API.info("\\t" + push.name);\n        });\n    } else {\n        Ti.API.error(\'Error: \' + ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n')])])]),t("ApiDocs")],1)}),[],!1,null,null,null);s.default=a.exports}}]);