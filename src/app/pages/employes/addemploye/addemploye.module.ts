import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddemployePageRoutingModule } from './addemploye-routing.module';

import { AddemployePage } from './addemploye.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddemployePageRoutingModule
  ],
  declarations: [AddemployePage]
})
export class AddemployePageModule {}
