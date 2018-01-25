"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var socketIo = require("socket.io-client");
var SERVER_URL = 'http://localhost:8080';
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.initSocket = function () {
        this.socket = socketIo(SERVER_URL);
    };
    SocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    SocketService = __decorate([
        core_1.Injectable()
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;
