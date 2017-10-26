import { routerTransition } from 'app/router.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  animations: [routerTransition()]
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
