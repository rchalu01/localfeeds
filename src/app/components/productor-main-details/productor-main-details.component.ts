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

  meatImage: string;
  eggImage: string;
  vegetableImage: string;
  fruitImage: string;
  milkImage: string;

  constructor(
    private productorService: ProductorServiceService
  ) { }

  ngOnInit() {
    this.productorService.getProductor(this.productorId).subscribe((value) => {
      this.productor = value;      
      this.productor.productType.includes(1) ? this.meatImage = "meatColor": this.meatImage = "meat";
      this.productor.productType.includes(2) ? this.eggImage = "eggsColor": this.eggImage = "eggs";
      this.productor.productType.includes(3) ? this.vegetableImage = "vegetableColor": this.vegetableImage = "vegetable";
      this.productor.productType.includes(4) ? this.fruitImage = "fruitsColor": this.fruitImage = "fruits";
      this.productor.productType.includes(5) ? this.milkImage = "milkColor": this.milkImage = "milk";
    });
  }

}
