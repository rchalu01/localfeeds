import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favorite-productor',
  templateUrl: './favorite-productor.page.html',
  styleUrls: ['./favorite-productor.page.scss'],
})
export class FavoriteProductorPage implements OnInit {

  favoriteList: any = [];

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {

    // Get favorite list
    this.storage.get('favorite').then((val) => {
      this.favoriteList = JSON.parse(val);      
    });
  }

}
