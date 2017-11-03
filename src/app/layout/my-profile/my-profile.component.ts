import { IModelPerfil } from './../subcomponents/my-profile-post/my-profile-post.component';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'app/router.animations';
import { DatosUsuarioService } from 'app/servicios/datos-usuario.service';
import { PosteosService } from 'app/servicios/posteos.service';

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
  model: IModelPerfil

  // para componente hijo "posteos" (tab "Noticias")
  posts: any[]

  constructor(
    private datosUsuarioService: DatosUsuarioService,
    private posteosService: PosteosService) { 
  }

  
  ngOnInit() {
    this.fillDataDummy()    
    this.getPosts()
  }

  private getPosts() {
    this.posts = this.posteosService.getPostsDummy()
  }

  // Llena data dummy
  private fillDataDummy() {
    this.model = this.datosUsuarioService.getDataPerfilDummy()

    this.usuarios = this.datosUsuarioService.getUsuariosDummy()

    this.gimnasios = this.datosUsuarioService.getGimnasiosDummy()
  }

}