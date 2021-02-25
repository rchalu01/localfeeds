import { Component, OnInit } from '@angular/core';
import { ProductorServiceService } from 'src/app/services/ProductorService/productor-service.service';

@Component({
  selector: 'app-productor-list',
  templateUrl: './productor-list.page.html',
  styleUrls: ['./productor-list.page.scss'],
})
export class ProductorListPage implements OnInit {

  productors: any;

  constructor(
    private productorService: ProductorServiceService
  ) { }

  ngOnInit() {

    // Get all productorss
    this.productorService.getProductors().subscribe(value => {
      this.productors = value;
    });
  }
}
