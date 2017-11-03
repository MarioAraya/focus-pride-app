import { Injectable } from '@angular/core';

@Injectable()
export class DatosUsuarioService {

  constructor() { }

  getDataPerfilDummy() {
    return {
      urlFotoPerfil: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
      nombre: "Mario Araya Romero",
      email: "mario.araya@timestamp.cl",
      ciudad: "Santiago",
      pais: "Chile",
      genero: "Masculino",
      edad: 33,
    }
  }

  getUsuariosDummy() {
    return [{
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
  }

  getGimnasiosDummy() {
    return [{
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
