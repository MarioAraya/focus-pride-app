import { routerTransition } from 'app/router.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.scss'],
  animations: [routerTransition()]    
})
export class EvaluacionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
