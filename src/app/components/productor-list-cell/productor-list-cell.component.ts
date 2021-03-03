import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
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

  constructor(
    private storage: Storage,
    private navCtrl: NavController
  ) { }

  ngOnInit() {

    // Check if the productor is in the list of favorite to color the fav icon
    this.storage.get('favorite').then((val) => {
      if (val && this.alreadyFav(JSON.parse(val))) {
        this.favoriteImage = "loveColor";
      }
    });
  }

  //
  public checkIfProductInProductTypes(product) {

    return this.productor.productType.includes(product);
  }

  // Change buttton favorite state
  public addToFavorite(event) {
    
    event.stopPropagation();

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
    });
  }

  // Check if the current productor is in the array favs
  private alreadyFav(favs) {

    let finded = false;

    favs.forEach(productor => {
      
      if (productor.name == this.productor.name) {
        finded = true;
      }
    });

    return finded;
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
