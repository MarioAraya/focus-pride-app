import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-profile-post',
  templateUrl: './my-profile-post.component.html',
  styleUrls: ['./my-profile-post.component.scss']
})
export class MyProfilePostComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>
  posts: Observable<Post[]>

  content: string

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService) {
  }

  ngOnInit() { 
    this.postsCol = this.afs.collection('posts')
    //this.postsCol = this.afs.collection<Post>('posts', ref => ref.where('uid', '==', 'VjEMKCPf8HdHe0zE1C4dCZUXVnJ3'))
    this.posts = this.postsCol.valueChanges()
  }

  postear() {    
    this.auth.getUser().subscribe(user => {
      this.afs.collection('posts').add({
        fecha: new Date().toISOString(),
        content: this.content,
        photoURL: user.photoURL,
        uid: user.uid,
        displayName: user.displayName
      }).then(res => {
        console.log('Correctamente posteado')
        this.content = ''
      })
      .catch(err => console.log('error al postear: ', err))
    })
  }

}

export interface IModelPerfil {
  urlFotoPerfil: string
  nombre: string
  email: string
  ciudad: string
  pais: string
  genero: string
  edad: number
}

export interface Post {
  uid: string
  photoURL: string
  content: string
  date: string
}