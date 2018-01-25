"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var TypescriptChatClientPage = /** @class */ (function () {
    function TypescriptChatClientPage() {
    }
    TypescriptChatClientPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    TypescriptChatClientPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('tcc-root h1')).getText();
    };
    return TypescriptChatClientPage;
}());
exports.TypescriptChatClientPage = TypescriptChatClientPage;
