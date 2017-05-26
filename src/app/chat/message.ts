import { IFriend } from "./friend";

export interface IChatMessage {
    Sender : IFriend 
    Receiver : IFriend;
    Content : string;
    SentDateTime : string;
}