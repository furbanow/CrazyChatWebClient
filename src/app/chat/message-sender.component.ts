import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ChatService } from "./chat.service";
import { IFriend } from "./friend";

@Component({
    selector:"cc-message-sender",
    templateUrl: "app/chat/message-sender.component.html"
})
export class MessageSenderComponent {

    @Input()
    selectedRecipient : IFriend;

    @Output()
    onMessageSent : EventEmitter<void> = new EventEmitter<void>();

    text : string = "";

    constructor(private _chatService : ChatService){
    }

    send(e : any) : void{
        if(this.selectedRecipient)
        {
            if(!e || e.keyCode === 13)
            {
                console.log("sending message : " + this.text);
                this._chatService.SendMessage(this.text, this.selectedRecipient);
                this.text = "";
                this.onMessageSent.emit();
            }
        }
    }
}