import {Component, Input, OnInit} from '@angular/core';
import {ProductorServiceService} from '../../services/ProductorService/productor-service.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-announcement-list-cell',
  templateUrl: './announcement-list-cell.component.html',
  styleUrls: ['./announcement-list-cell.component.scss'],
})
export class AnnouncementListCellComponent implements OnInit {

  @Input() announcement;

  productor: any;
  date: Date;

  constructor(
      private productorService: ProductorServiceService
  ) { }

  ngOnInit() {
    // Put products icons in color or not
    console.log(this.announcement.date.se);
    this.productorService.getProductor(this.announcement.productor).subscribe(value => {
      this.productor = value;
      this.date = this.announcement.date.toDate();
    });
  }

  // Check if we should display the icon or not
  public checkIfProductInProductTypes(product) {

    return this.productor.productType.includes(product);
  }
}
