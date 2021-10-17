import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'employes',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/employes/employes.module').then(m => m.EmployesPageModule)
          }
        ]
      },
      {
        path: 'param',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/param/param.module').then(m => m.ParamPageModule)
          }
        ]
      },
      {
        path: 'reunions',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/reunions/reunions.module').then(m => m.ReunionsPageModule)
          }
        ]
      },
      {
        path: 'salle',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/salle/salle.module').then(m => m.SallePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/reunions',
        pathMatch: 'full'
      }
    ]
    
  },
  {
    path: '',
    redirectTo: '/tabs/reunions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
