import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
<<<<<<< HEAD
   }
=======
  },
  {
    path: '',
    redirectTo:'fab-button',
    pathMatch: 'full'
  },
  {
    path: 'list-employe',
    loadChildren: () => import('./pages/employes/list-employe/list-employe.module').then( m => m.ListEmployePageModule)
  },
  {
    path: 'addemploye',
    loadChildren: () => import('./pages/employes/addemploye/addemploye.module').then( m => m.AddemployePageModule)
  },
  {
    path: 'delete-employe',
    loadChildren: () => import('./pages/employes/delete-employe/delete-employe.module').then( m => m.DeleteEmployePageModule)
  }
>>>>>>> dc3903daf87aec31909d16e0e19ad10a7d81dd4c
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
