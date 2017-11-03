import { Injectable } from '@angular/core';

@Injectable()
export class PosteosService {

  constructor() { }

  getPostsDummy() {
    return [{
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

}
