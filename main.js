/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus");

    function W3CShool() {
        var thisEditor = EditorManager.getCurrentFullEditor();
        var query = thisEditor._codeMirror.getSelection();
        window.open("http://www.w3schools.com/" + encodeURIComponent(query));
    }


    var W3C_SCHOOL = "Denisov.W3CSchool";

    CommandManager.register("W3C School Tutorial", W3C_SCHOOL, W3CShool);

    var fileMenu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    var contextMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU);
    fileMenu.addMenuDivider();
    fileMenu.addMenuItem(W3C_SCHOOL, "Ctrl-Alt-W");
    contextMenu.addMenuDivider();
    contextMenu.addMenuItem(W3C_SCHOOL, "Ctrl-Alt-W");
});
