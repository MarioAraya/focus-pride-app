import { IModelPerfil } from './../subcomponents/my-profile-post/my-profile-post.component';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'app/router.animations';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  animations: [routerTransition()]  
})
export class MyProfileComponent implements OnInit {
  usuarios: any[]
  gimnasios: any[]
  model: IModelPerfil

  // para componente hijo "posteos" (tab "Noticias")
  posts: any[]

  constructor() { 
  }

  
  ngOnInit() {
    this.fillDataDummy()    
    this.getPosts()
  }

  private getPosts() {
    this.posts = this.fillDataDummyPosts();
  }

  private fillDataDummyPosts(): any[] {
    return [
      {
      usuarioAvatar: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
      usuarioPost: "Michael Rickoso",
      postTexto: "Hola chicos, mi estimada red, me preguntaba a quién le gustaría ver el partido de football NFL en el GYM, tendremos comida y bebestibles para apoyar a la selección.",
      comentarios: [{
        img: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
        texto: "Me parece genial, vamos"
      },
      {
        img: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
        texto: "Puedo llegar al 2do tiempo. Déjenme comida, por favor"
      }]},
      {usuarioAvatar: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
      usuarioPost: "Araya Romero",
      postTexto: "Probando posteo.",
      comentarios: [{
        img: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
        texto: "Me parece genial, vamos"
      }]},
      {usuarioAvatar: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
      usuarioPost: "Francisco Poveda",
      postTexto: "Aca esto es un posteo de texto simple. Debería tambien poderse postear cosas más complejas como links y fotos.. creo yo.",
      comentarios: [{
        img: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
        texto: "Claro que si, eso se va a poder, postear imagenes y noticias, tal como lo hace facebook B-|"
      }]}
    ]
  }

  // Llena data dummy
  private fillDataDummy() {
    this.model = {
      urlFotoPerfil: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
      nombre: "Mario Araya Romero",
      email: "mario.araya@timestamp.cl",
      ciudad: "Santiago",
      pais: "Chile",
      genero: "Masculino",
      edad: 33,
    }

    this.usuarios = [{
        imagen:  "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
        texto: "Mike Rickoso"
      },
      {
        imagen:  "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
        texto: "Pedro Perez"
      },
      {
        imagen:  "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
        texto: "Romero Araya"
      },
      {
        imagen:  "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
        texto: "Francisco Poveda"
      },
      {
        imagen:  "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
        texto: "Shane McMahon"
      }]

    this.gimnasios = [{
        imagen:  "https://d30y9cdsu7xlg0.cloudfront.net/png/231854-200.png",
        texto: "Power Fitness Barnechea"
      },
      {
        imagen:  "https://d30y9cdsu7xlg0.cloudfront.net/png/659113-200.png",
        texto: "Gimnasio Santiago"
      },
      {
        imagen:  "https://d30y9cdsu7xlg0.cloudfront.net/png/883-200.png",
        texto: "Ultra Fitness Providencia"
      },
      {
        imagen:  "https://d30y9cdsu7xlg0.cloudfront.net/png/75699-200.png",
        texto: "Nameless Heroes Gym"
      },
      {
        imagen:  "https://d30y9cdsu7xlg0.cloudfront.net/png/231855-200.png",
        texto: "Muscle Pride Santiago"
      }]
  }

}