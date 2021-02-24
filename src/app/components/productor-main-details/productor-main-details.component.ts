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
    this.productorService.getProductor(this.productorId).subscribe((value) => {
      this.productor = value;      
    });
  }

}
