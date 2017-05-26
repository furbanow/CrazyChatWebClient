import { Component, EventEmitter, Output } from '@angular/core';
import { IFriend } from "./friend";
import { IChatMessage } from "./message";
import { ChatService } from "./chat.service";

@Component({
    templateUrl: 'app/chat/chat.component.html',

})
export class ChatComponent {
  public pageTitle : string = 'Discussions';
  public selectedRecipient : IFriend;
  public messages : IChatMessage[];

  constructor(private _chatService : ChatService){ }

  onRecipientSelected(friend: IFriend) : void {
    console.log("ChatComponent :" + friend.Name + " has been selected");
    this.pageTitle = `Discussions with ${friend.Name}`;
    this.selectedRecipient = friend;
    this.refreshMessages();
  }

  refreshMessages() : void{
      if(! this.selectedRecipient) return;
      console.log("MessageList : new selected recipient");
      this.messages = this._chatService.GetAllMessagesOfDiscussion(this.selectedRecipient, this._chatService.GetCurrentUserProfile());
  }

  

}