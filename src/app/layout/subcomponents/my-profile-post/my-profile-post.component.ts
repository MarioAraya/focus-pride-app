import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';

@Component({
  selector: 'app-my-profile-post',
  templateUrl: './my-profile-post.component.html',
  styleUrls: ['./my-profile-post.component.scss']
})
export class MyProfilePostComponent implements OnInit {

  model: IModelPerfil
  user: any

  constructor(public auth: AuthService) {
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