import { routerTransition } from 'app/router.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss'],
  animations: [routerTransition()]
})
export class MensajesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
