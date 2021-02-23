import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductorMapPageRoutingModule } from './productor-map-routing.module';

import { ProductorMapPage } from './productor-map.page';
import { DetailProductorMapComponent } from 'src/app/components/detail-productor-map/detail-productor-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductorMapPageRoutingModule
  ],
  declarations: [ProductorMapPage, DetailProductorMapComponent]
})
export class ProductorMapPageModule {}
