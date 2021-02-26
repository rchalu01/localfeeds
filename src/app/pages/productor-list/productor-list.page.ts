import { Component, OnInit } from '@angular/core';
import { ProductorServiceService } from 'src/app/services/ProductorService/productor-service.service';
import {Storage} from '@ionic/storage';
import {Product} from '../../models/product';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-productor-list',
  templateUrl: './productor-list.page.html',
  styleUrls: ['./productor-list.page.scss'],
})
export class ProductorListPage implements OnInit {

  productors: any;

  constructor(
    private productorService: ProductorServiceService,
    private readonly storage: Storage
  ) { }

  ngOnInit() {

    // Get all productorss
    this.productorService.getProductors().subscribe(value => {
      this.productors = [];
      for (const val of value[Symbol.iterator]()) {
        this.storage.get('vege').then(value1 => {
          if ( value1 && val.productType.includes(Product.Viande)){
            null
          }else {
            this.productors.push(val);
          }
        });
      }
    });
  }
}
