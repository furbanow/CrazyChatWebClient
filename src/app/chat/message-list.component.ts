import { Component, OnInit, Input } from "@angular/core";
import { ChatService } from "./chat.service";
import { IChatMessage } from "./message";
import { IUserProfile } from "./userProfile";
import { IFriend } from "./friend";

@Component({
    selector : "cc-message-list",
    templateUrl: "app/chat/message-list.component.html",

})
export class MessageListComponent {
    @Input()
    selectedRecipient : IFriend;
    
    _messages : IChatMessage[];
    @Input()
    set messages(messages : IChatMessage[])  {
        this._messages = messages;
        let container = document.getElementById("cc-message-list-container");
        setTimeout(() => {container.scrollTop = container.scrollHeight;}, 0);
        
    }
    get messages() : IChatMessage[]{
        return this._messages;

    }
}