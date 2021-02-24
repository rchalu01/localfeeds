import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-first-start-page',
    templateUrl: './first-start-page.page.html',
    styleUrls: ['./first-start-page.page.scss'],
})
export class FirstStartPagePage implements OnInit {

    img: string;

    constructor() {
        this.img = "assets/onboarding/logo_localfeeds.png";
    }

    ngOnInit() {
    }

}
