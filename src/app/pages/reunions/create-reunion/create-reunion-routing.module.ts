import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateReunionPage } from './create-reunion.page';

const routes: Routes = [
  {
    path: '',
    component: CreateReunionPage,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateReunionPageRoutingModule {}
