import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteProductorPageRoutingModule } from './favorite-productor-routing.module';

import { FavoriteProductorPage } from './favorite-productor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteProductorPageRoutingModule
  ],
  declarations: [FavoriteProductorPage]
})
export class FavoriteProductorPageModule {}
