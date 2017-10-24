import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajesComponent } from './Mensajes.component';

const routes: Routes = [
    { path: '', component: MensajesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MensajesRoutingModule { }
