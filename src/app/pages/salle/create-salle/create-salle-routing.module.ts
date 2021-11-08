import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSallePage } from './create-salle.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSallePageRoutingModule {}
