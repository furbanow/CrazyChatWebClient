import { IFriend } from './friend';
import { Injectable } from "@angular/core";
import { IChatMessage } from "./message";
import { IUserProfile } from "./userProfile";

@Injectable()
export class ChatService {
    
    private _allMessages : IChatMessage[] = [];

    constructor(){
        this._allMessages.push({
            Sender : this.GetFriends()[3],
            Receiver : this.GetFriends()[1],
            Content : "Hey James how are you ?",
            SentDateTime: "14:10"
        });

        this._allMessages.push({
            Sender : this.GetFriends()[1],
            Receiver : this.GetFriends()[3],
            Content : "Yeah fine, and you ?",
            SentDateTime: "14:15"
        });
    }

    public GetFriends() : IFriend[]  {
      let friends : IFriend[] = [];

      friends.push(
          {
              Id: 1,
              Name: "Roulio",
              ImageUrl: "app/assets/images/Unknown_Person.png",
              State: "Connected"
           },
        {
              Id: 2,
              Name: "James",
              ImageUrl: "app/assets/images/Unknown_Person.png",
              State: "Connected"
           },
           {
              Id: 3,
              Name: "Mike",
              ImageUrl: "app/assets/images/Unknown_Person.png",
              State: "Disconnected"
           },
           {
              Id: 4,
              Name: "Filou",
              ImageUrl: "app/assets/images/Unknown_Person.png",
              State: "Connected"
           },

      );

      return friends;
    }

    public GetCurrentUserProfile() : IUserProfile {

        return {
            Id : 4,
            Name : "Filou",
            ImageUrl: "app/assets/images/Unknown_Person.png",
            Friends: [],
        };
    }

    public GetCurrentUserFriendInstance() : IFriend {
        let allFriends = this.GetFriends();
        let userProfile = this.GetCurrentUserProfile();
        let currentUser = allFriends.find((friend) => { return friend.Id === userProfile.Id});
        return currentUser;
    }


    public GetAllMessages() : IChatMessage[]{
        return this._allMessages;
    }


    public GetAllMessagesOfDiscussion(friend : IFriend, currentUser : IUserProfile) : IChatMessage[] {
        let allMessages = this.GetAllMessages();
        return allMessages.filter( (msg) => {
                return (msg.Receiver.Id === currentUser.Id && msg.Sender.Id === friend.Id) ||
                    (msg.Receiver.Id === friend.Id && msg.Sender.Id === currentUser.Id);
            }
        );
    }

    public SendMessage(text : string , recipient : IFriend) : void {
        this._allMessages.push(
            {
                Sender : this.GetCurrentUserFriendInstance(),
                Receiver : recipient,
                Content : text,
                SentDateTime: "14:15" 
            }
        );
    }
}