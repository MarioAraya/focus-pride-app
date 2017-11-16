import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from './../bs-component/bs-component.module';

import { MyProfileComponent } from './my-profile.component';
import { MyProfilePostComponent } from './../my-profile/my-profile-post/my-profile-post.component';
import { PostComponent } from './../subcomponents/post/post.component';
import { ListadoUsuariosComponent } from './../subcomponents/listado-usuarios/listado-usuarios.component';

import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        BsComponentModule,
        NgbModule,
        TranslateModule,
        FormsModule
    ],
    declarations: [
        MyProfileComponent,
        MyProfilePostComponent,
        PostComponent,
        ListadoUsuariosComponent
    ]
})
export class MyProfileModule { }
