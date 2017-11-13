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

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.listadoCompleto = this.listado
  }
  
  SeguirUsuario(uid: string) {
    this.auth.followUser(uid);
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
