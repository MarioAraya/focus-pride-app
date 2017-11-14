import { AuthService } from 'app/core/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {
  @Input() listado: any[]
  @Input() botones: string
  @Input() tipo: string
  private listadoCompleto: any[]
  private currUser: any
  private usersFollowed: string[]

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.listadoCompleto = this.listado
    this.auth.user.subscribe(user => { 
      this.currUser = user; 
      this.usersFollowed = user.following.split(';')
    })
  }
  
  SeguirUsuario(uid: string) {
    console.log(this.usersFollowed)
    if (this.currUser.following.indexOf(uid) >= 0) { // remueve user
      this.currUser.following.replace(uid, '')
      this.usersFollowed.splice( this.usersFollowed.indexOf(uid) )
      console.log(this.usersFollowed)
    }
    else {
      this.usersFollowed.push(uid) // agrega usuario
    } 
    let usersFollowed = this.usersFollowed.join(';')
    this.auth.followUser(usersFollowed); // actualiza prop usuario
  }

  esUsuarioSeguido(uid: string) {
    if (uid && this.currUser)
      return (this.currUser.following.indexOf(uid) > -1) ? 'fa fa-user-times' : 'fa fa-user-plus'  
    else if (this.currUser && this.currUser.following == '')
      return 'fa fa-user-plus'
  }

  onBuscarTextChanged(input: HTMLInputElement) {
    if(input && input.value === '') {
      this.listado = this.listadoCompleto
    }
    else if(input && input.value) {
      this.listado = this.listado.filter((value) => {
        if (value.displayName.indexOf(input.value) > -1) 
          return value;
      })
    }
  }

  mostrarBtn(position: number) {
    return (this.botones.split('')[ position ] === '1')      
  }
}
