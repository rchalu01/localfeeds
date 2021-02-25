import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteProductorPageRoutingModule } from './favorite-productor-routing.module';

import { FavoriteProductorPage } from './favorite-productor.page';
import { ProductorListCellComponent } from 'src/app/components/productor-list-cell/productor-list-cell.component';
import { MenuNavigationBarComponent } from 'src/app/components/menu-navigation-bar/menu-navigation-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteProductorPageRoutingModule
  ],
  declarations: [FavoriteProductorPage, ProductorListCellComponent, MenuNavigationBarComponent]
})
export class FavoriteProductorPageModule {}
