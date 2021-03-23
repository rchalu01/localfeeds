import { Component, OnInit } from '@angular/core';
import {AnnouncementServiceService} from '../../services/announcementService/announcement-service.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.page.html',
  styleUrls: ['./announcement-list.page.scss'],
})
export class AnnouncementListPage implements OnInit {

  announcements: any;

  constructor(
      private announcementService: AnnouncementServiceService
  ) {}

  ngOnInit() {
    this.announcementService.getAnnouncements().subscribe(value => {
      this.announcements = value;
    });
  }

}
