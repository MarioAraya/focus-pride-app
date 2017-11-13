import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  mostrarComentarios: boolean = false
  @Input() usuarioPost: string
  @Input() usuarioPostId: string
  @Input() usuarioAvatar: string
  @Input() postTexto: string
  @Input() comentarios: any[]


  // se agrega data Dummy, TODO: se debe traer todo esto desde un servicio
  // los comentarios deben ser agregados también por servicio REST (por definir)
  constructor() { 
    
  }

  ngOnInit() {
  }

  agregarComentario(input: HTMLInputElement) {
    this.comentarios.push({
      img: "http://fresh5447.github.io/bootstrap-social-network-template/img/user.png",
      texto: input.value
    })
    input.value = "";
  }

  mostrarComentariosToggle() {
    this.mostrarComentarios = !this.mostrarComentarios;
  }
}
