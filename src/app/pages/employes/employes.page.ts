import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.page.html',
  styleUrls: ['./employes.page.scss'],
})
export class EmployesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fonction(){
    alert('Vous venez de cliquer sur le bouton');
  }

}
