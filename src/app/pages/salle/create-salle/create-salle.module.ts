import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSallePageRoutingModule } from './create-salle-routing.module';

import { CreateSallePage } from './create-salle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSallePageRoutingModule
  ],
  declarations: [CreateSallePage]
})
export class CreateSallePageModule {}
