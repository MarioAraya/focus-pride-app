import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionesComponent } from './evaluaciones.component';
import { EvaluacionesRoutingModule } from './evaluaciones-routing.module';

@NgModule({
    imports: [
        CommonModule,
        EvaluacionesRoutingModule
    ],
    declarations: [EvaluacionesComponent]
})
export class EvaluacionesModule { }
