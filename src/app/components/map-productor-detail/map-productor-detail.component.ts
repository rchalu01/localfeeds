import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-map-productor-detail',
  templateUrl: './map-productor-detail.component.html',
  styleUrls: ['./map-productor-detail.component.scss'],
})
export class MapProductorDetailComponent implements OnInit {
  @Input() geoloc: any;

  private map: mapboxgl.Map;
  private style = 'mapbox://styles/luckypoire/cklhvoy090bbk17lnjmvoe6hb/draft';
  private lat = 46.169372;
  private lng = -1.045499;

  constructor() { }

  ngOnInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(environment.mapbox.accessToken);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: this.geoloc,
      zoom: 10,
    });
    this.map.on('load', () => {
      this.map.resize();
    });
    const marker = new mapboxgl.Marker({clickTolerance: 500})
        .setLngLat(this.geoloc)
        .addTo(this.map);
  }

}
