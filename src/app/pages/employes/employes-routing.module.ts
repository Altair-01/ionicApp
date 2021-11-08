import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';

import { EmployesPage } from './employes.page';

const routes: Routes = [
  {
    path: '',
    component: EmployesPage
  },
  {
    path: 'list-employe',
    loadChildren: () => import('./list-employe/list-employe.module').then( m => m.ListEmployePageModule)
  },
  {
    path: 'addemploye',
    loadChildren: () => import('./addemploye/addemploye.module').then( m => m.AddemployePageModule)
  },
  {
    path: 'delete-employe',
    loadChildren: () => import('./delete-employe/delete-employe.module').then( m => m.DeleteEmployePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployesPageRoutingModule {}
