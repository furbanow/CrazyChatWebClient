import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router/router";

import { SharedModule } from "../shared/shared.module";
import { ChatComponent } from "./chat.component";
import { ChatService } from "./chat.service";
import { FriendsListComponent } from "./friends-list.component";
import { MessageListComponent } from "./message-list.component";
import {MessageSenderComponent } from "./message-sender.component";

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [ ChatComponent, FriendsListComponent, MessageListComponent,  MessageSenderComponent ],
    providers: [
        ChatService
    ]

})
export class ChatModule { }