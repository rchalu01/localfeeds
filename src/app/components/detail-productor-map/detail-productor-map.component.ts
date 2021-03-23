import { Component, OnInit } from '@angular/core';
import { ProductorServiceService } from 'src/app/services/ProductorService/productor-service.service';

@Component({
  selector: 'app-detail-productor-map',
  templateUrl: './detail-productor-map.component.html',
  styleUrls: ['./detail-productor-map.component.scss'],
})
export class DetailProductorMapComponent implements OnInit {

  private productor: any;
  public meatImage: string;
  public eggImage: string;
  public vegetableImage: string;
  public fruitImage: string;
  public milkImage: string;

  constructor(
    private readonly productorService: ProductorServiceService
  ) { }

  ngOnInit() {
    this.productorService.getProductor('nRLKzndPz6CZ05XNf01h').subscribe(value => {
      this.productor = value;
      this.productor.productType.includes(1) ? this.meatImage = 'meatColor' : this.meatImage = 'meat';
      this.productor.productType.includes(2) ? this.eggImage = 'eggsColor' : this.eggImage = 'eggs';
      this.productor.productType.includes(3) ? this.vegetableImage = 'vegetableColor' : this.vegetableImage = 'vegetable';
      this.productor.productType.includes(4) ? this.fruitImage = 'fruitsColor' : this.fruitImage = 'fruits';
      this.productor.productType.includes(5) ? this.milkImage = 'milkColor' : this.milkImage = 'milk';
    });
  }
}
