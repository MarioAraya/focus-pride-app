import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileComponent } from './my-profile.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from './../bs-component/bs-component.module';


// import {
//     TabsComponent,
// } from './../bs-component/components';

@NgModule({
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        BsComponentModule,
        NgbModule
    ],
    declarations: [
        MyProfileComponent,
        // TabsComponent
    ]
})
export class MyProfileModule { }
