import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productor-list-cell',
  templateUrl: './productor-list-cell.component.html',
  styleUrls: ['./productor-list-cell.component.scss'],
})
export class ProductorListCellComponent implements OnInit {

  @Input() productor;

  favoriteImage: string = "loveWhite";

  meatImage: string;
  eggImage: string;
  vegetableImage: string;
  fruitImage: string;
  milkImage: string;

  constructor() { }

  ngOnInit() {

    this.productor.productType.includes(1) ? this.meatImage = "meatColor": this.meatImage = "meat";
    this.productor.productType.includes(2) ? this.eggImage = "eggsColor": this.eggImage = "eggs";
    this.productor.productType.includes(3) ? this.vegetableImage = "vegetableColor": this.vegetableImage = "vegetable";
    this.productor.productType.includes(4) ? this.fruitImage = "fruitsColor": this.fruitImage = "fruits";
    this.productor.productType.includes(5) ? this.milkImage = "milkColor": this.milkImage = "milk";
  }

  public addToFavorite() {

    if (this.favoriteImage == "loveWhite") 
      this.favoriteImage = "loveColor";
    else
      this.favoriteImage = "loveWhite";
  }
}
