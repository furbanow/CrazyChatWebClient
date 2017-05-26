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
var ChatService = (function () {
    function ChatService() {
        this._allMessages = [];
        this._allMessages.push({
            Sender: this.GetFriends()[3],
            Receiver: this.GetFriends()[1],
            Content: "Hey James how are you ?",
            SentDateTime: "14:10"
        });
        this._allMessages.push({
            Sender: this.GetFriends()[1],
            Receiver: this.GetFriends()[3],
            Content: "Yeah fine, and you ?",
            SentDateTime: "14:15"
        });
    }
    ChatService.prototype.GetFriends = function () {
        var friends = [];
        friends.push({
            Id: 1,
            Name: "Roulio",
            ImageUrl: "app/assets/images/Unknown_Person.png",
            State: "Connected"
        }, {
            Id: 2,
            Name: "James",
            ImageUrl: "app/assets/images/Unknown_Person.png",
            State: "Connected"
        }, {
            Id: 3,
            Name: "Mike",
            ImageUrl: "app/assets/images/Unknown_Person.png",
            State: "Disconnected"
        }, {
            Id: 4,
            Name: "Filou",
            ImageUrl: "app/assets/images/Unknown_Person.png",
            State: "Connected"
        });
        return friends;
    };
    ChatService.prototype.GetCurrentUserProfile = function () {
        return {
            Id: 4,
            Name: "Filou",
            ImageUrl: "app/assets/images/Unknown_Person.png",
            Friends: [],
        };
    };
    ChatService.prototype.GetCurrentUserFriendInstance = function () {
        var allFriends = this.GetFriends();
        var userProfile = this.GetCurrentUserProfile();
        var currentUser = allFriends.find(function (friend) { return friend.Id === userProfile.Id; });
        return currentUser;
    };
    ChatService.prototype.GetAllMessages = function () {
        return this._allMessages;
    };
    ChatService.prototype.GetAllMessagesOfDiscussion = function (friend, currentUser) {
        var allMessages = this.GetAllMessages();
        return allMessages.filter(function (msg) {
            return (msg.Receiver.Id === currentUser.Id && msg.Sender.Id === friend.Id) ||
                (msg.Receiver.Id === friend.Id && msg.Sender.Id === currentUser.Id);
        });
    };
    ChatService.prototype.SendMessage = function (text, recipient) {
        this._allMessages.push({
            Sender: this.GetCurrentUserFriendInstance(),
            Receiver: recipient,
            Content: text,
            SentDateTime: "14:15"
        });
    };
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map