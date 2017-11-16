/**
 * The auth service is where most of the magic happens. It facilitates the sign-in process, 
 * watches the user session, and allows us to save custom user data to the Firestore database.  
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  following?: string
}

@Injectable()
export class AuthService {

  user: Observable<User>
  users: Observable<Array<User>>

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {

    /// Obtenemos auth data, luego el firestore user document.... o bien NULL
    this.user = this.afAuth.authState
    .switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
      } else {
        return Observable.of(null)
      }
    })
  }

  getUser(): Observable<User> {
    return this.user;
  }

  followUser(uidToFollow: string): Observable<User> {
    return this.user = this.afAuth.authState
    .switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).update({ following: uidToFollow })
      } else {
        return Observable.of(null)
      }
    })
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.oAuthLogin(provider);
  }

  emailPassLogin(email, password): any {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(credentials => {
        this.updateUserData(credentials);
        return this.user;
      });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
      .catch(err => console.error(err))
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    debugger
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      following: user.following || ''
    }
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/profile']);
    return userRef.set(data)
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        console.log('signOut !!')
        localStorage.setItem('isLoggedin', 'false'); 
        this.router.navigate(['/login']);
    });
  }
}
