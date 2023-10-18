import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeritadetailPage } from './ceritadetail.page';

const routes: Routes = [
  {
    path: '',
    component: CeritadetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeritadetailPageRoutingModule {}
