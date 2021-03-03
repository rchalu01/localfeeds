import { Component, Input, OnInit } from '@angular/core';
import { ProductorServiceService } from 'src/app/services/ProductorService/productor-service.service';

@Component({
  selector: 'app-productor-main-details',
  templateUrl: './productor-main-details.component.html',
  styleUrls: ['./productor-main-details.component.scss'],
})
export class ProductorMainDetailsComponent implements OnInit {

  @Input() productorId;
  productor: any;

  constructor(
    private productorService: ProductorServiceService
  ) { }

  ngOnInit() {

    // Getting the productor with the id
    this.productorService.getProductor(this.productorId).subscribe((value) => {
      this.productor = value;
    });
  }

  // Check if we should display the icon or not
  public checkIfProductInProductTypes(product) {

    return this.productor.productType.includes(product);
  }
}
