/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
       // EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus"),
        NativeApp      = brackets.getModule("utils/NativeApp");

    function Mozilla() {
        //var thisEditor = EditorManager.getCurrentFullEditor();
       // var query = thisEditor._codeMirror.getSelection();
        NativeApp.openURLInDefaultBrowser("https://developer.mozilla.org");
    }

    function W3Shools() {
       // var thisEditor = EditorManager.getCurrentFullEditor();
       // var query = thisEditor._codeMirror.getSelection();
        NativeApp.openURLInDefaultBrowser("http://w3schools.com");
    }

    function Forum() {
       // var thisEditor = EditorManager.getCurrentFullEditor();
       // var query = thisEditor._codeMirror.getSelection();
        NativeApp.openURLInDefaultBrowser("https://groups.google.com/forum/#!forum/brackets-dev");
    }


    var MOZILLA_MDN = "Denisov.Mozilla";
    var W3_SCHOOLS = "Denisov.W3Schools";
    var FORUM_BRACKETS = "Denisov.Forum";

    CommandManager.register("Mozilla MDN", MOZILLA_MDN, Mozilla);
    CommandManager.register("W3 Schools Tutorial", W3_SCHOOLS, W3Shools);
    CommandManager.register("Brackets-Dev", FORUM_BRACKETS, Forum);

    var helpMenu = Menus.getMenu(Menus.AppMenuBar.HELP_MENU);
    //var contextMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU);*/
    helpMenu.addMenuDivider();
    helpMenu.addMenuItem(MOZILLA_MDN, "Ctrl-Alt-M");
    helpMenu.addMenuItem(W3_SCHOOLS, "Ctrl-Alt-W");
    helpMenu.addMenuItem(FORUM_BRACKETS, "Ctrl-Alt-B");
    helpMenu.addMenuDivider();
    //contextMenu.addMenuDivider();
    //contextMenu.addMenuItem(W3_SCHOOLS, "Ctrl-Alt-W");
});
