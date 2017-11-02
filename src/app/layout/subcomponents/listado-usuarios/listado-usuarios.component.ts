import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {
  @Input() listado: any[]
  @Input() botones: string
  private listadoCompleto: any[]

  constructor() {
  }

  ngOnInit() {
    this.listadoCompleto = this.listado
  }

  onBuscarTextChanged(input: HTMLInputElement) {
    if(input && input.value === '') {
      this.listado = this.listadoCompleto
    }
    else if(input && input.value) {
      this.listado = this.listado.filter((value) => {
        if (value.texto.indexOf(input.value) > -1) 
          return value;
      })
    }
  }

  mostrarBtn(position: number) {
    return (this.botones.split('')[ position ] === '1')      
  }
}
