import { Component, OnInit } from '@angular/core';
import { Reunion } from 'src/app/models/reunion';
@Component({
  selector: 'app-reunions',
  templateUrl: './reunions.page.html',
  styleUrls: ['./reunions.page.scss'],
})
export class ReunionsPage implements OnInit {
  reunions=[
    new Reunion(1,"Comment faire ça ?"),
    new Reunion(2,"Sommet sur le climat")

  ]
  constructor() { }

  ngOnInit() {
  }

}
