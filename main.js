/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus");

    function Mozilla() {
        //var thisEditor = EditorManager.getCurrentFullEditor();
       // var query = thisEditor._codeMirror.getSelection();
        window.open("https://developer.mozilla.org");
    }

    function W3Shools() {
       // var thisEditor = EditorManager.getCurrentFullEditor();
       // var query = thisEditor._codeMirror.getSelection();
        window.open("http://www.w3schools.com/");
    }

    var MOZILLA_MSDN = "Denisov.Mozilla";
    var W3_SCHOOLS = "Denisov.W3Schools";

    CommandManager.register("Mozilla MSDN", MOZILLA_MSDN, Mozilla);
    CommandManager.register("W3 Schools Tutorial", W3_SCHOOLS, W3Shools);

    var helpMenu = Menus.getMenu(Menus.AppMenuBar.HELP_MENU);
    //var contextMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU);*/
    helpMenu.addMenuDivider();
    helpMenu.addMenuItem(MOZILLA_MSDN, "Ctrl-Alt-M");
    helpMenu.addMenuItem(W3_SCHOOLS, "Ctrl-Alt-W");
    helpMenu.addMenuDivider();
    //contextMenu.addMenuDivider();
    //contextMenu.addMenuItem(W3_SCHOOLS, "Ctrl-Alt-W");
});
