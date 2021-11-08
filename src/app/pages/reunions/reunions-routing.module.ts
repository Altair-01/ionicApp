import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReunionsPage } from './reunions.page';

const routes: Routes = [
  {
    path: 'reunions',
    component: ReunionsPage,
    children:[
      {
        path: 'create',
        children: [
          {
            path: '',
            loadChildren: () => import('./create-reunion/create-reunion.module').then(m => m.CreateReunionPageModule)
          }
        ]
      },
    ]

  },
  {
    path: 'create',
    loadChildren: () => import('./create-reunion/create-reunion.module').then( m => m.CreateReunionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReunionsPageRoutingModule {}
