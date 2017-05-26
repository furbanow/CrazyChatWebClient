
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ChatService } from "./chat.service";
import { IFriend } from "./friend";


@Component({
    selector: 'cc-friends-list',
    templateUrl: 'app/chat/friends-list.component.html'
})
export class FriendsListComponent implements OnInit{
    friends : IFriend[];
    imageWidth : number= 64;
    
    constructor(private _chatService : ChatService){

    }
    
    ngOnInit(): void {
        this.friends = this._chatService.GetFriends();
    }

    @Output()
    onReceiverSelected: EventEmitter<IFriend> = new EventEmitter<IFriend>();
    
    onReceiverClick(friend : IFriend) : void {
        console.log("FriendsList : user has selected a receiver : " + friend.Name);
        this.onReceiverSelected.emit(friend);
    }

    getContextualStateCss(friend : IFriend ){
        switch(friend.State)
        {
            case "Connected" : return "success";
            case "Disconnected" : return "warning";
            default: return "";
        }

    }

   
}