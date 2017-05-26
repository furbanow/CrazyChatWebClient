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
var ChatComponent = (function () {
    function ChatComponent(_chatService) {
        this._chatService = _chatService;
        this.pageTitle = 'Discussions';
    }
    ChatComponent.prototype.onRecipientSelected = function (friend) {
        console.log("ChatComponent :" + friend.Name + " has been selected");
        this.pageTitle = "Discussions with " + friend.Name;
        this.selectedRecipient = friend;
        this.refreshMessages();
    };
    ChatComponent.prototype.refreshMessages = function () {
        if (!this.selectedRecipient)
            return;
        console.log("MessageList : new selected recipient");
        this.messages = this._chatService.GetAllMessagesOfDiscussion(this.selectedRecipient, this._chatService.GetCurrentUserProfile());
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/chat/chat.component.html',
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map