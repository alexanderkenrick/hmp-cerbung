import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateceritaPage } from './createcerita.page';

const routes: Routes = [
  {
    path: '',
    component: CreateceritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateceritaPageRoutingModule {}
