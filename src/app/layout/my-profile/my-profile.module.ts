import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileComponent } from './my-profile.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from './../bs-component/bs-component.module';

import { MyProfilePostComponent } from './../subcomponents/my-profile-post/my-profile-post.component';
import { PostComponent } from './../subcomponents/post/post.component';
import { ListadoUsuariosComponent } from './../subcomponents/listado-usuarios/listado-usuarios.component';

@NgModule({
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        BsComponentModule,
        NgbModule
    ],
    declarations: [
        MyProfileComponent,
        MyProfilePostComponent,
        PostComponent,
        ListadoUsuariosComponent
    ]
})
export class MyProfileModule { }
