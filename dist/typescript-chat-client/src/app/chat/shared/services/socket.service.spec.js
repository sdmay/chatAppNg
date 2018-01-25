"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var socket_service_1 = require("./socket.service");
describe('SocketService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [socket_service_1.SocketService]
        });
    });
    it('should be created', testing_1.inject([socket_service_1.SocketService], function (service) {
        expect(service).toBeTruthy();
    }));
});
