import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteProductorPageRoutingModule } from './favorite-productor-routing.module';

import { FavoriteProductorPage } from './favorite-productor.page';
import { ProductorListCellComponent } from 'src/app/components/productor-list-cell/productor-list-cell.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteProductorPageRoutingModule
  ],
  declarations: [FavoriteProductorPage, ProductorListCellComponent]
})
export class FavoriteProductorPageModule {}
