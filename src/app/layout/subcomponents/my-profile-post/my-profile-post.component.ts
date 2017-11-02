import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile-post',
  templateUrl: './my-profile-post.component.html',
  styleUrls: ['./my-profile-post.component.scss']
})
export class MyProfilePostComponent implements OnInit {

  model: IModelPerfil

  constructor() {
    this.fillModelMockData()
  }

  fillModelMockData() {
    this.model = {
      urlFotoPerfil: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
      nombre: "Mario Araya Romero",
      email: "mario.araya@timestamp.cl",
      ciudad: "Santiago",
      pais: "Chile",
      genero: "Masculino",
      edad: 33,
    }
  }

  ngOnInit() {
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