import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateceritaPageRoutingModule } from './createcerita-routing.module';

import { CreateceritaPage } from './createcerita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateceritaPageRoutingModule
  ],
  declarations: [CreateceritaPage]
})
export class CreateceritaPageModule {}
