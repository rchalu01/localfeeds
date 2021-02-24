import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

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

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    
    // Put products icons in color or not
    this.productor.productType.includes(1) ? this.meatImage = "meatColor": this.meatImage = "meat";
    this.productor.productType.includes(2) ? this.eggImage = "eggsColor": this.eggImage = "eggs";
    this.productor.productType.includes(3) ? this.vegetableImage = "vegetableColor": this.vegetableImage = "vegetable";
    this.productor.productType.includes(4) ? this.fruitImage = "fruitsColor": this.fruitImage = "fruits";
    this.productor.productType.includes(5) ? this.milkImage = "milkColor": this.milkImage = "milk";
  }

  // Change buttton favorite state
  public addToFavorite(event) {

    event.stopPropagation();

    if (this.favoriteImage == "loveWhite") 
      this.favoriteImage = "loveColor";
    else
      this.favoriteImage = "loveWhite";
  }

  // Navigate to productor details page
  public openProductorDetailPage() {

    let navigationExtras: NavigationExtras = {
      state: {
        id: this.productor.id
      } 
    };
    this.navCtrl.navigateForward(['productor-details'], navigationExtras);    
  }
}
