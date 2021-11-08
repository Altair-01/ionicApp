import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SallePage } from './salle.page';

const routes: Routes = [
  {
    path: '',
    component: SallePage
  },
  {
    path: 'create-salle',
    loadChildren: () => import('./create-salle/create-salle.module').then( m => m.CreateSallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SallePageRoutingModule {}
