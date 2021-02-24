import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import {ProductorServiceService} from '../../services/ProductorService/productor-service.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Output() public sendId: EventEmitter<string> = new EventEmitter<string>();

  private map: mapboxgl.Map;
  private style = 'mapbox://styles/luckypoire/cklhvoy090bbk17lnjmvoe6hb/draft';
  private lat = 46.1558;
  private lng = -1.1532;

  constructor(
      private readonly productorService: ProductorServiceService
  ) { }

  ngOnInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(environment.mapbox.accessToken);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
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
          const marker = new mapboxgl.Marker().setLngLat([productor.location.longitude, productor.location.latitude]).addTo(this.map)
              .on('click', () => {
                this.sendId.emit(productor.id);
              });
      }
    });
  }

}
