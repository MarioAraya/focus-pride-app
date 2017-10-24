import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaComponent } from './Agenda.component';
import { AgendaRoutingModule } from './Agenda-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AgendaRoutingModule
    ],
    declarations: [AgendaComponent]
})
export class AgendaModule { }
