import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstStartPagePageRoutingModule } from './first-start-page-routing.module';

import { FirstStartPagePage } from './first-start-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstStartPagePageRoutingModule
  ],
  declarations: [FirstStartPagePage]
})
export class FirstStartPagePageModule {}
