/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus");

    function W3Shools() {
        var thisEditor = EditorManager.getCurrentFullEditor();
        var query = thisEditor._codeMirror.getSelection();
        window.open("http://www.w3schools.com/");
    }


    var W3_SCHOOLS = "Denisov.W3Schools";

    CommandManager.register("W3 Schools Tutorial", W3_SCHOOLS, W3Shools);

    var helpMenu = Menus.getMenu(Menus.AppMenuBar.HELP_MENU);
    /*var contextMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU);*/
    helpMenu.addMenuDivider();
    helpMenu.addMenuItem(W3_SCHOOLS, "Ctrl-Alt-W");
    /*contextMenu.addMenuDivider();
    contextMenu.addMenuItem(W3_SCHOOLS, "Ctrl-Alt-W");*/
});
