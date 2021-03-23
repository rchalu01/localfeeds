import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    firstVisit: boolean;

    constructor(private router: Router,
                private storage: Storage
    ){}

    ngOnInit() {
        this.storage.get('firstVisit').then(value => {
            if (value == null) {
                this.router.navigate(['first-start-page']);
            } else {
                this.router.navigate(['productor-map']);
            }
        });
    }
}
