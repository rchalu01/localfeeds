import { Component } from '@angular/core';
import { AnnouncementServiceService } from '../services/announcementService/announcement-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public readonly announcementService:AnnouncementServiceService
  ) {}

  public announcements: Object
  public announcement: Object

  ngOnInit() {
    console.log("test")
    this.announcementService.getAnnouncements().subscribe(value => {
      this.announcements = value
      console.log(this.announcements)
    })
    this.announcementService.getAnnouncement('11X7qcTBAmX3KhNludGV').subscribe(value => {
      this.announcement = value
      console.log(this.announcement)
    })
  }


}
