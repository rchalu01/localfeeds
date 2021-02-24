import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstStartPagePage } from './first-start-page.page';

const routes: Routes = [
  {
    path: '',
    component: FirstStartPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstStartPagePageRoutingModule {}
