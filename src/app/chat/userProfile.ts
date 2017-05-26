import { IFriend } from "./friend";

export interface IUserProfile {
    Id : number;
    Name : string;
    ImageUrl : string;
    Friends : IFriend[];
}