import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddemployePage } from './addemploye.page';

const routes: Routes = [
  {
    path: '',
    component: AddemployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddemployePageRoutingModule {}
