(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1964:function(t,e,o){"use strict";o.r(e);var r=o(21),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"importing-an-existing-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#importing-an-existing-project"}},[t._v("#")]),t._v(" Importing an Existing Project")]),t._v(" "),r("p",[t._v("This page describes how to import a project into Studio.")]),t._v(" "),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),r("p",[t._v("You can import an existing set of files into Studio by creating a new project and pointing Studio to the home directory for your existing project.")]),t._v(" "),r("h2",{attrs:{id:"using-the-import-wizard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-the-import-wizard"}},[t._v("#")]),t._v(" Using the import wizard")]),t._v(" "),r("p",[t._v("To import an existing project into Studio, from the menu bar, select "),r("strong",[t._v("File")]),t._v(" > "),r("strong",[t._v("Import")]),t._v(" to open the Import Wizard.")]),t._v(" "),r("p",[r("strong",[t._v("For a Titanium Classic or Alloy application:")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Select "),r("strong",[t._v("Axway Appcelerator")]),t._v(" > "),r("strong",[t._v("Existing Mobile Project")]),t._v(", then click "),r("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),r("li",[r("p",[t._v("In the "),r("strong",[t._v("Project directory")]),t._v(" text field, browse to the directory that contains your project.")])]),t._v(" "),r("li",[r("p",[t._v("You can optionally change the name of the project or copy the files to your current workspace. If you do not copy the files, the project will remain in its directory but linked to the current workspace.")])]),t._v(" "),r("li",[r("p",[t._v("Click "),r("strong",[t._v("Finish")]),t._v(".")])])]),t._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),r("p",[t._v("If you are importing an older Alloy or Titanium application that was not created on the AMPLIFY Appcelerator Services, the import process will generate a new app GUID for the application and attempt to activate AMPLIFY Appcelerator Services.")])]),t._v(" "),r("p",[r("strong",[t._v("For a Github project:")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Select "),r("strong",[t._v("Git")]),t._v(" and either select:")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("Fork Github Repository")]),t._v(" to fork and clone a Github repo.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Git Repository as New Project")]),t._v(" to clone a Github repo.")])])])]),t._v(" "),r("li",[r("p",[t._v("Enter your Github credentials, then click "),r("strong",[t._v("Validate")]),t._v(".")])]),t._v(" "),r("li",[r("p",[t._v("If you are forking a repo, enter the owner's name and repo name in the "),r("strong",[t._v("Owner")]),t._v(" and "),r("strong",[t._v("Repository")]),t._v(" "),r("strong",[t._v("Name")]),t._v(" fields, respectively.")])]),t._v(" "),r("li",[r("p",[t._v("If you are not forking a repo, select the Github repo or enter the Git URI to the repo.")])]),t._v(" "),r("li",[r("p",[t._v("In the "),r("strong",[t._v("Destination")]),t._v(" text field, enter a path to an empty directory to clone the repo.")])]),t._v(" "),r("li",[r("p",[t._v("Click "),r("strong",[t._v("Finish")]),t._v(".")])])]),t._v(" "),r("p",[r("strong",[t._v("For a Native Module, API Builder, AMPLIFY Runtime Services or other Web projects:")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Select "),r("strong",[t._v("General")]),t._v(" > "),r("strong",[t._v("Existing Folder as New Project")]),t._v(", then click "),r("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),r("li",[r("p",[t._v("In the "),r("strong",[t._v("Select folder")]),t._v(" text field, browse to the directory that contains your project.")])]),t._v(" "),r("li",[r("p",[t._v("In the "),r("strong",[t._v("Project Name")]),t._v(" text field, enter the name of your project.")])]),t._v(" "),r("li",[r("p",[t._v("Choose the natures/Project Type for your project.")])]),t._v(" "),r("li",[r("p",[t._v("Click "),r("strong",[t._v("Finish")]),t._v(".")])])]),t._v(" "),r("h2",{attrs:{id:"using-drag-and-drop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-drag-and-drop"}},[t._v("#")]),t._v(" Using drag and drop")]),t._v(" "),r("p",[t._v("Starting with Studio 4.1.0, you can drag a project directory, previously created with either Eclipse or Studio, and drop it to the "),r("strong",[t._v("Project Explorer")]),t._v(" view to import the project to Studio and add it to your current workspace.")]),t._v(" "),r("p",[t._v("Once you drag and drop your project directory, you can choose to either "),r("strong",[t._v("Copy Projects")]),t._v(" or "),r("strong",[t._v("Link Projects")]),t._v(". The dialog to choose these options is shown if you have not previously chosen one of these options to be the default.")]),t._v(" "),r("p",[t._v("With Copy Projects options, the project directory and all its files are copied to the current workspace.")]),t._v(" "),r("p",[t._v("When the Link Projects option is selected, the files are not copied to the workspace directory. Studio only links to the project directory.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(518),alt:"DragNDropImport"}})]),t._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("⚠️ Import Error")]),t._v(" "),r("p",[t._v('If you receive the error, "Invalid project, could not find .project file in the selected directory," the project was not created in Studio or Eclipse and did not contain a '),r("code",[t._v(".project")]),t._v(" file, which tells Studio the nature of the project. Currently, only projects created in Studio or Eclipse support the drag-and-drop import process ("),r("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-7233",target:"_blank",rel:"noopener noreferrer"}},[t._v("TISTUD-7233"),r("OutboundLink")],1),t._v("). Projects created with the CLI cannot be imported using the drag-and-drop mechanism. Use the Import Wizard instead.")])]),t._v(" "),r("h2",{attrs:{id:"using-promote-to-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-promote-to-project"}},[t._v("#")]),t._v(" Using promote to project")]),t._v(" "),r("p",[t._v("Promoting a directory to a project allows you to take any directory on disk and convert it into a project. You will see the project in your workspace, but the files live on disk in the former spot.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Open the Project Explorer view.")])]),t._v(" "),r("li",[r("p",[t._v("Expand the local filesystem node to the directory in question.")])]),t._v(" "),r("li",[r("p",[t._v("Choose "),r("strong",[t._v("Promote to Project")]),t._v(".")])]),t._v(" "),r("li",[r("p",[t._v("Name your project appropriately and click "),r("strong",[t._v("OK")]),t._v(".")])]),t._v(" "),r("li",[r("p",[t._v('Depending on the type of project, you may need to change the "natures" associated with the project. See below.')])])]),t._v(" "),r("h2",{attrs:{id:"changing-project-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changing-project-type"}},[t._v("#")]),t._v(" Changing project type")]),t._v(" "),r("p",[t._v('You may also want to change the "type" of your project.')])])}),[],!1,null,null,null);e.default=i.exports},518:function(t,e,o){t.exports=o.p+"assets/img/DragNDropImport.2b08c947.png"}}]);