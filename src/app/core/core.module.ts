/**
 * It is a good design pattern to keep your authentication setup in a core module. 
 * The purpose of a core module is to provide services that your app will use globally, 
 * such as authentication, logging, toast messages, etc. 
 * */
import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
