import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productor-details',
  templateUrl: './productor-details.page.html',
  styleUrls: ['./productor-details.page.scss'],
})
export class ProductorDetailsPage implements OnInit {

  productorId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.queryParams.subscribe(() => {
      this.productorId = this.router.getCurrentNavigation().extras.state.id;
    });
  }

  ngOnInit() {
  }

}
