"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var action_1 = require("./shared/model/action");
var event_1 = require("./shared/model/event");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketService) {
        this.socketService = socketService;
        this.action = action_1.Action;
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.initToConnection = function () {
        var _this = this;
        this.socketService.initSocket();
        this.ioConnection = this.socketService.onMessage()
            .subscribe(function (message) {
            _this.messages.push(message);
        });
        this.socketService.onEvent(event_1.Event.CONNECT)
            .subscribe(function () {
            console.log('CONNECTED');
        });
        this.socketService.onEvent(event_1.Event.DISCONNECT)
            .subscribe(function () {
            console.log('DISCONNECTED');
        });
    };
    ChatComponent.prototype.sendMessage = function (message) {
        if (!message) {
            return;
        }
        this.socketService.send({
            from: this.user,
            content: message
        });
        this.messageContent = null;
    };
    ChatComponent.prototype.sendNotification = function (params, action) {
        var message;
        if (action === action_1.Action.JOINED) {
            message = {
                from: this.user,
                action: action
            };
        }
        else if (action === action_1.Action.RENAME) {
            message = {
                action: action,
                content: {
                    username: this.user.name,
                    previousUsername: params.previousUsername
                }
            };
        }
        this.socketService.send(message);
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'tcc-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css']
        })
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
