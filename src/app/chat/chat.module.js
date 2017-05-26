"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var chat_component_1 = require("./chat.component");
var chat_service_1 = require("./chat.service");
var friends_list_component_1 = require("./friends-list.component");
var message_list_component_1 = require("./message-list.component");
var message_sender_component_1 = require("./message-sender.component");
var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule
        ],
        declarations: [chat_component_1.ChatComponent, friends_list_component_1.FriendsListComponent, message_list_component_1.MessageListComponent, message_sender_component_1.MessageSenderComponent],
        providers: [
            chat_service_1.ChatService
        ]
    })
], ChatModule);
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map