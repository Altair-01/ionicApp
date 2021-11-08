import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteEmployePage } from './delete-employe.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteEmployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteEmployePageRoutingModule {}
