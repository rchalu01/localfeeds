import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';
import {ProductorServiceService} from '../../services/ProductorService/productor-service.service';

@Component({
  selector: 'app-map-productor-detail',
  templateUrl: './map-productor-detail.component.html',
  styleUrls: ['./map-productor-detail.component.scss'],
})
export class MapProductorDetailComponent implements OnInit {
  @Input() id: any;

  private map: mapboxgl.Map;
  private style = 'mapbox://styles/luckypoire/cklhvoy090bbk17lnjmvoe6hb/draft';
  private productor: any;

  constructor(
      private readonly productorService: ProductorServiceService
  ) { }

  ngOnInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(environment.mapbox.accessToken);
    this.productorService.getProductor(this.id).subscribe(value => {
      this.productor = value;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        center: [this.productor.location.N_, this.productor.location.x_],
        zoom: 10,
      });
      this.map.on('load', () => {
        this.map.resize();
      });
      const marker = new mapboxgl.Marker({clickTolerance: 500})
          .setLngLat([this.productor.location.N_, this.productor.location.x_])
          .addTo(this.map);
    });
  }

}
