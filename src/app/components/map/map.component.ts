import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  private map: mapboxgl.Map;
  private style = 'mapbox://styles/luckypoire/cklhvoy090bbk17lnjmvoe6hb/draft';
  private lat = 46.1558;
  private lng = -1.1532;

  constructor() { }

  ngOnInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(environment.mapbox.accessToken);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
    });
    this.map.on('load', () => {
      this.map.resize();
    });
  }

}
