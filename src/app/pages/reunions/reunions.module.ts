import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReunionsPageRoutingModule } from './reunions-routing.module';

import { ReunionsPage } from './reunions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReunionsPageRoutingModule
  ],
  declarations: [ReunionsPage]
})
export class ReunionsPageModule {}
