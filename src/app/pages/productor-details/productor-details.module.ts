import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductorDetailsPageRoutingModule } from './productor-details-routing.module';

import { ProductorDetailsPage } from './productor-details.page';
import { ProductorMainDetailsComponent } from 'src/app/components/productor-main-details/productor-main-details.component';
import { AnnouncementListCellComponent } from 'src/app/components/announcement-list-cell/announcement-list-cell.component';
import { MapProductorDetailComponent } from 'src/app/components/map-productor-detail/map-productor-detail.component';
import {MenuNavigationBarComponent} from '../../components/menu-navigation-bar/menu-navigation-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductorDetailsPageRoutingModule
  ],
  declarations: [ProductorDetailsPage, ProductorMainDetailsComponent, MapProductorDetailComponent, AnnouncementListCellComponent,MenuNavigationBarComponent]
})
export class ProductorDetailsPageModule {}
