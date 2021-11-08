import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReunionsPage } from './reunions.page';

const routes: Routes = [
  {
    path: '',
    component: ReunionsPage
  },
  {
    path: 'create-reunion',
    loadChildren: () => import('./create-reunion/create-reunion.module').then( m => m.CreateReunionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReunionsPageRoutingModule {}
