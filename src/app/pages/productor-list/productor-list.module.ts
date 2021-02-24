import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProductorListPageRoutingModule} from './productor-list-routing.module';

import {ProductorListPage} from './productor-list.page';
import {ProductorListCellComponent} from 'src/app/components/productor-list-cell/productor-list-cell.component';
import {MenuNavigationBarComponent} from "../../components/menu-navigation-bar/menu-navigation-bar.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductorListPageRoutingModule
    ],
    declarations: [ProductorListPage, ProductorListCellComponent, MenuNavigationBarComponent]
})
export class ProductorListPageModule {
}
