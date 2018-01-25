"use strict";
exports.__esModule = true;
var app_po_1 = require("./app.po");
describe('typescript-chat-client App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.TypescriptChatClientPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to tcc!!');
    });
});
