"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var chat_service_1 = require("./chat.service");
var MessageSenderComponent = (function () {
    function MessageSenderComponent(_chatService) {
        this._chatService = _chatService;
        this.onMessageSent = new core_1.EventEmitter();
        this.text = "";
    }
    MessageSenderComponent.prototype.send = function (e) {
        if (this.selectedRecipient) {
            if (!e || e.keyCode === 13) {
                console.log("sending message : " + this.text);
                this._chatService.SendMessage(this.text, this.selectedRecipient);
                this.text = "";
                this.onMessageSent.emit();
            }
        }
    };
    return MessageSenderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MessageSenderComponent.prototype, "selectedRecipient", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MessageSenderComponent.prototype, "onMessageSent", void 0);
MessageSenderComponent = __decorate([
    core_1.Component({
        selector: "cc-message-sender",
        templateUrl: "app/chat/message-sender.component.html"
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], MessageSenderComponent);
exports.MessageSenderComponent = MessageSenderComponent;
//# sourceMappingURL=message-sender.component.js.map