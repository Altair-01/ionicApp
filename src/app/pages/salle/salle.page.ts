import { Component, OnInit } from '@angular/core';
import { Reunion } from 'src/app/models/reunion';
import { Salle } from 'src/app/models/salle';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.page.html',
  styleUrls: ['./salle.page.scss'],
})
export class SallePage implements OnInit {
  salles=[
    new Salle(101,[new Reunion(1,"Reunion top secrète"),new Reunion(1,"Reunion cachée"),new Reunion(1,"CA")]),
    new Salle(102,[new Reunion(2,"Reunion des caanas")])
  ]
  constructor() { }

  ngOnInit() {
  }

}
