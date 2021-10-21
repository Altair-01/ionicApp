import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateReunionPageRoutingModule } from './create-reunion-routing.module';

import { CreateReunionPage } from './create-reunion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateReunionPageRoutingModule
  ],
  declarations: [CreateReunionPage]
})
export class CreateReunionPageModule {}
