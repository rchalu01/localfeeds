import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductorListPageRoutingModule } from './productor-list-routing.module';

import { ProductorListPage } from './productor-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductorListPageRoutingModule
  ],
  declarations: [ProductorListPage]
})
export class ProductorListPageModule {}
