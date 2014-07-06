/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus");

    function W3CShools() {
        var thisEditor = EditorManager.getCurrentFullEditor();
        var query = thisEditor._codeMirror.getSelection();
        window.open("http://www.w3schools.com/" + encodeURIComponent(query));
    }


    var W3C_SCHOOLS = "Denisov.W3CSchools";

    CommandManager.register("W3C Schools Tutorial", W3C_SCHOOLS, W3CShools);

    var helpMenu = Menus.getMenu(Menus.AppMenuBar.HELP_MENU);
    /*var contextMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU);*/
    helpMenu.addMenuDivider();
    helpMenu.addMenuItem(W3C_SCHOOLS, "Ctrl-Alt-W");
    /*contextMenu.addMenuDivider();
    contextMenu.addMenuItem(W3C_SCHOOLS, "Ctrl-Alt-W");*/
});
