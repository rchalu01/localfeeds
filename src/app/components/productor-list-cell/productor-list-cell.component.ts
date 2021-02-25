import { Component, Input, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from 'src/app/models/product';

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
    private storage: Storage
  ) { }

  ngOnInit() {

    // Put products icons in color or not
    this.productor.productType.includes(Product.Viande) ? this.meatImage = "meatColor": this.meatImage = "meat";
    this.productor.productType.includes(Product.Autre) ? this.eggImage = "eggsColor": this.eggImage = "eggs";
    this.productor.productType.includes(Product.Legume) ? this.vegetableImage = "vegetableColor": this.vegetableImage = "vegetable";
    this.productor.productType.includes(Product.Fruit) ? this.fruitImage = "fruitsColor": this.fruitImage = "fruits";
    this.productor.productType.includes(Product.Laitage) ? this.milkImage = "milkColor": this.milkImage = "milk";
  }

  // Change buttton favorite state
  public addToFavorite() {
    
    this.storage.get('favorite').then((val) => {

      if (val) {
        
        val = JSON.parse(val);       

        if (!this.alreadyFav(val)) {
          this.favoriteImage = "loveColor";
          val.push(this.productor);
        } else {          
          this.favoriteImage = "loveWhite";
          val = val.filter(productor => this.productor.name != productor.name);
        }
        this.storage.set('favorite', JSON.stringify(val));
      } else {
        this.favoriteImage = "loveColor";
        this.storage.set('favorite', JSON.stringify([this.productor]));
      }

      console.log(val);
    });
  }

  private alreadyFav(favs) {

    let finded = false;

    favs.forEach(productor => {
      
      if (productor.name == this.productor.name) {
        finded = true;
      }
    });

    return finded;
  }
}
