import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productor-details',
  templateUrl: './productor-details.page.html',
  styleUrls: ['./productor-details.page.scss'],
})
export class ProductorDetailsPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.queryParams.subscribe(() => {
      let navParams = this.router.getCurrentNavigation().extras.state;
      console.log(navParams);
    });
  }

  ngOnInit() {
  }

}
