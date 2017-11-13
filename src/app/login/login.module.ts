import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { CoreModule } from 'app/core/core.module';
import { environment } from 'environments/environment';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,      
        CoreModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
