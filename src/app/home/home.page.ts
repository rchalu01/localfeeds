import { AnnouncementServiceService } from '../services/announcementService/announcement-service.service';
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    firstVisit: Boolean;

    public announcements: Object;
    public announcement: Object;

    constructor(public readonly announcementService:AnnouncementServiceService, private router: Router, private storage: Storage) {

    }

    ngOnInit() {
        this.announcementService.getAnnouncements().subscribe(value => {
        this.announcements = value
        });
        this.announcementService.getAnnouncement('11X7qcTBAmX3KhNludGV').subscribe(value => {
        this.announcement = value
        });
        this.storage.get('firstVisit').then(value => {
            if (value == null) {
                this.router.navigate(['first-start-page']);
            } else {
                this.router.navigate(['map']);
            }
        });
    }
}
