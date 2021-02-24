import {Component, Input, OnInit} from '@angular/core';
import {ProductorServiceService} from '../../services/ProductorService/productor-service.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-announcement-list-cell',
  templateUrl: './announcement-list-cell.component.html',
  styleUrls: ['./announcement-list-cell.component.scss'],
})
export class AnnouncementListCellComponent implements OnInit {

  @Input() announcement;

  meatImage: string;
  eggImage: string;
  vegetableImage: string;
  fruitImage: string;
  milkImage: string;
  productor: any;
  date: Date;

  constructor(
      private productorService: ProductorServiceService
  ) { }

  ngOnInit() {
    // Put products icons in color or not
    console.log(this.announcement.date.se);
    this.productorService.getProductor(this.announcement.productor).subscribe(value => {
      this.productor = value;
      this.date = this.announcement.date.toDate();
      this.productor.productType.includes(Product.Viande) ? this.meatImage = "meatColor": this.meatImage = "meat";
      this.productor.productType.includes(Product.Autre) ? this.eggImage = "eggsColor": this.eggImage = "eggs";
      this.productor.productType.includes(Product.Legume) ? this.vegetableImage = "vegetableColor": this.vegetableImage = "vegetable";
      this.productor.productType.includes(Product.Fruit) ? this.fruitImage = "fruitsColor": this.fruitImage = "fruits";
      this.productor.productType.includes(Product.Laitage) ? this.milkImage = "milkColor": this.milkImage = "milk";
    });
  }

}
