import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductorDetailsPageRoutingModule } from './productor-details-routing.module';

import { ProductorDetailsPage } from './productor-details.page';
import { ProductorMainDetailsComponent } from 'src/app/components/productor-main-details/productor-main-details.component';
import { DetailProductorMapComponent } from 'src/app/components/detail-productor-map/detail-productor-map.component';
import { AnnouncementListCellComponent } from 'src/app/components/announcement-list-cell/announcement-list-cell.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductorDetailsPageRoutingModule
  ],
  declarations: [ProductorDetailsPage, ProductorMainDetailsComponent, DetailProductorMapComponent, AnnouncementListCellComponent]
})
export class ProductorDetailsPageModule {}
