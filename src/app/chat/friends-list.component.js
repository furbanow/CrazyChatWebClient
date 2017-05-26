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
var FriendsListComponent = (function () {
    function FriendsListComponent(_chatService) {
        this._chatService = _chatService;
        this.imageWidth = 64;
        this.onReceiverSelected = new core_1.EventEmitter();
    }
    FriendsListComponent.prototype.ngOnInit = function () {
        this.friends = this._chatService.GetFriends();
    };
    FriendsListComponent.prototype.onReceiverClick = function (friend) {
        console.log("FriendsList : user has selected a receiver : " + friend.Name);
        this.onReceiverSelected.emit(friend);
    };
    FriendsListComponent.prototype.getContextualStateCss = function (friend) {
        switch (friend.State) {
            case "Connected": return "success";
            case "Disconnected": return "warning";
            default: return "";
        }
    };
    return FriendsListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FriendsListComponent.prototype, "onReceiverSelected", void 0);
FriendsListComponent = __decorate([
    core_1.Component({
        selector: 'cc-friends-list',
        templateUrl: 'app/chat/friends-list.component.html'
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], FriendsListComponent);
exports.FriendsListComponent = FriendsListComponent;
//# sourceMappingURL=friends-list.component.js.map