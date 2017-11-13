import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/core/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'app/router.animations';
import { DatosUsuarioService } from 'app/servicios/datos-usuario.service';
import { PosteosService } from 'app/servicios/posteos.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  providers: [DatosUsuarioService, PosteosService],
  animations: [routerTransition()]  
})
export class MyProfileComponent implements OnInit {
  usuarios: any[]
  gimnasios: any[]

  // para componente hijo "posteos" (tab "Noticias")
  postsCol: AngularFirestoreCollection<Post>
  posts: Observable<Post[]>

  usersCol: AngularFirestoreCollection<User>
  users: Observable<User[]>

  constructor(
    private datosUsuarioService: DatosUsuarioService,
    private posteosService: PosteosService,
    private translate: TranslateService,
    private afs: AngularFirestore,
    public auth: AuthService) {   
  }

  
  ngOnInit() {
    this.usersCol = this.afs.collection('users')
    this.users = this.usersCol.valueChanges()

    //this.postsCol = this.afs.collection('posts')
    //let query = this.postsCol.where('uid', '==', 'VjEMKCPf8HdHe0zE1C4dCZUXVnJ3')
    this.auth.getUser().subscribe(user => {
      if (user) {
        console.log('user.following: '+user.following)
        this.postsCol = this.afs.collection('posts', posts => posts.where('uid', '==', user.following))
        this.posts = this.postsCol.valueChanges()
      }
      else {
        this.postsCol = this.afs.collection('posts')
        this.posts = this.postsCol.valueChanges()
      }
    })

    this.fillDataDummy()    
    //this.getPosts()
  }

  private getPosts() {
    //this.posts = this.posteosService.getPostsDummy()
  }

  // Llena data dummy
  private fillDataDummy() {
    //this.model = this.datosUsuarioService.getDataPerfilDummy()

    this.usuarios = this.datosUsuarioService.getUsuariosDummy()

    this.gimnasios = this.datosUsuarioService.getGimnasiosDummy()
  }
}

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

interface Post {
  content: string
  fecha: string
  photoURL: string
  uid: string
}