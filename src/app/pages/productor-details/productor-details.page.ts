import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementServiceService } from 'src/app/services/announcementService/announcement-service.service';

@Component({
  selector: 'app-productor-details',
  templateUrl: './productor-details.page.html',
  styleUrls: ['./productor-details.page.scss'],
})
export class ProductorDetailsPage implements OnInit {

  productorId: any;
  announcement: any = '';
  position: any = [-1.045499, 46.169372];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceAnnoncement: AnnouncementServiceService
  ) { 
    // Getting productor id from route
    this.route.queryParams.subscribe(() => {
      this.productorId = this.router.getCurrentNavigation().extras.state.id;
    });

    //Getting productor annoucement
    this.serviceAnnoncement.getAnnouncementByProductor(this.router.getCurrentNavigation().extras.state.id).subscribe(value => {
      this.announcement = value[0];
    });
  }

  ngOnInit() {
  }

}
