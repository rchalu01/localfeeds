import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-preferences',
    templateUrl: './preferences.page.html',
    styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

    public isToggled: boolean;

    constructor(private router: Router, private storage: Storage) {
        this.isToggled = false;
    }

    ngOnInit() {

    }

    savePreferences() {
        this.storage.set('firstVisit', false);
        this.storage.set('vege', this.isToggled);
        this.router.navigate(['/productor-map']);
    }
}
