import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
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

    // Getting the productor with the id
    this.productorService.getProductor(this.productorId).subscribe((value) => {
      this.productor = value;
      
      // Put products icons in color or not
      this.productor.productType.includes(Product.Viande) ? this.meatImage = "meatColor": this.meatImage = "meat";
      this.productor.productType.includes(Product.Autre) ? this.eggImage = "eggsColor": this.eggImage = "eggs";
      this.productor.productType.includes(Product.Legume) ? this.vegetableImage = "vegetableColor": this.vegetableImage = "vegetable";
      this.productor.productType.includes(Product.Fruit) ? this.fruitImage = "fruitsColor": this.fruitImage = "fruits";
      this.productor.productType.includes(Product.Laitage) ? this.milkImage = "milkColor": this.milkImage = "milk";
    });
  }

}
