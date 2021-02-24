import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteProductorPage } from './favorite-productor.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteProductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteProductorPageRoutingModule {}
