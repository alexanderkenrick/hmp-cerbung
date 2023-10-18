import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeritadetailPageRoutingModule } from './ceritadetail-routing.module';

import { CeritadetailPage } from './ceritadetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CeritadetailPageRoutingModule
  ],
  declarations: [CeritadetailPage]
})
export class CeritadetailPageModule {}
