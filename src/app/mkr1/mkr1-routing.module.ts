import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mkr1Page } from './mkr1.page';

const routes: Routes = [
  {
    path: '',
    component: Mkr1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mkr1PageRoutingModule {}
