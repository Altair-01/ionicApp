import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteEmployePageRoutingModule } from './delete-employe-routing.module';

import { DeleteEmployePage } from './delete-employe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteEmployePageRoutingModule
  ],
  declarations: [DeleteEmployePage]
})
export class DeleteEmployePageModule {}
