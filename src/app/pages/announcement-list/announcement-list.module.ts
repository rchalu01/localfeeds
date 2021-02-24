import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementListPageRoutingModule } from './announcement-list-routing.module';

import { AnnouncementListPage } from './announcement-list.page';
import {AnnouncementListCellComponent} from '../../components/announcement-list-cell/announcement-list-cell.component';
import {ProductorListPageModule} from "../productor-list/productor-list.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AnnouncementListPageRoutingModule,
        ProductorListPageModule
    ],
  declarations: [AnnouncementListPage, AnnouncementListCellComponent]
})
export class AnnouncementListPageModule {}
