import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductorDetailsPageRoutingModule } from './productor-details-routing.module';

import { ProductorDetailsPage } from './productor-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductorDetailsPageRoutingModule
  ],
  declarations: [ProductorDetailsPage]
})
export class ProductorDetailsPageModule {}
