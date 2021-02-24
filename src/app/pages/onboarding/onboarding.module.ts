import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OnboardingPageRoutingModule} from './onboarding-routing.module';

import {OnboardingPage} from './onboarding.page';
import {SliderComponent} from "../../components/slider/slider.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OnboardingPageRoutingModule
    ],
    exports: [
        SliderComponent
    ],
    declarations: [OnboardingPage, SliderComponent]
})
export class OnboardingPageModule {
}
