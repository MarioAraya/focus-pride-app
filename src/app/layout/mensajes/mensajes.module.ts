import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensajesComponent } from './Mensajes.component';
import { MensajesRoutingModule } from './Mensajes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MensajesRoutingModule
    ],
    declarations: [MensajesComponent]
})
export class MensajesModule { }
