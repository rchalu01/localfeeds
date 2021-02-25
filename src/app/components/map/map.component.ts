import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import {ProductorServiceService} from '../../services/ProductorService/productor-service.service';
import firebase from 'firebase';
import TIMESTAMP = firebase.database.ServerValue.TIMESTAMP;
import {Product} from '../../models/product';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Output() public sendId: EventEmitter<string> = new EventEmitter<string>();

  private map: mapboxgl.Map;
  private style = 'mapbox://styles/luckypoire/cklhvoy090bbk17lnjmvoe6hb/draft';
  private lat = 46.169372;
  private lng = -1.045499;

  constructor(
      private readonly productorService: ProductorServiceService
  ) { }

  ngOnInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(environment.mapbox.accessToken);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [this.lng, this.lat],
      zoom: 9,
    });
    this.map.on('load', () => {
      this.map.resize();
    });
    this.generateMarker();
  }

  private generateMarker(): void {
    let productors: any;
    this.productorService.getProductors().subscribe(value => {
      productors = value;
      for (const productor of productors) {
        const popup = new mapboxgl.Popup({closeButton: false})
            .setHTML(this.createProductorCard(productor));
        const marker = new mapboxgl.Marker({clickTolerance: 500})
            .setLngLat([productor.location.longitude, productor.location.latitude])
            .setPopup(popup)
            .addTo(this.map);
      }
    });
  }

  private createProductorCard(productor: any): string{
    let HTML = '<ion-card>';
    const titleCard = '<ion-card-title>' + productor.name + '</ion-card-title>';
    const subTitleCard = '<ion-card-subtitle>' + productor.schedule + '</ion-card-subtitle>';
    let iconCard = '<section>';
    console.log(productor.productType.includes(Product.Viande));
    iconCard = iconCard + (productor.productType.includes(Product.Viande) ? '<ion-img src="../../../assets/icon/meatColor.png" alt="icon-meat"></ion-img>' : '<ion-img src="../../../assets/icon/meat.png" alt="icon-meat"></ion-img>');
    iconCard = iconCard + (productor.productType.includes(Product.Legume) ? '<ion-img src="../../../assets/icon/vegetableColor.png" alt="icon-vegetable"></ion-img>' : '<ion-img src="../../../assets/icon/vegetable.png" alt="icon-vegetable"></ion-img>');
    iconCard = iconCard + (productor.productType.includes(Product.Fruit) ? '<ion-img src="../../../assets/icon/fruitsColor.png" alt="icon-fruit"></ion-img>' : '<ion-img src="../../../assets/icon/fruits.png" alt="icon-fruit"></ion-img>');
    iconCard = iconCard + (productor.productType.includes(Product.Autre) ? '<ion-img src="../../../assets/icon/eggsColor.png" alt="icon-eggs"></ion-img>' : '<ion-img src="../../../assets/icon/eggs.png" alt="icon-eggs"></ion-img>');
    iconCard = iconCard + (productor.productType.includes(Product.Laitage) ? '<ion-img src="../../../assets/icon/milkColor.png" alt="icon-milk"></ion-img>' : '<ion-img src="../../../assets/icon/milk.png" alt="icon-milk"></ion-img>');
    iconCard = iconCard + '</section>';
    HTML = HTML + titleCard + subTitleCard + iconCard + '</ion-card>';
    return HTML;
  }

}
