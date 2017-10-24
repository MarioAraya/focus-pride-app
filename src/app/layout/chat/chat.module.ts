import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './Chat.component';
import { ChatRoutingModule } from './Chat-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ChatRoutingModule
    ],
    declarations: [ChatComponent]
})
export class ChatModule { }
