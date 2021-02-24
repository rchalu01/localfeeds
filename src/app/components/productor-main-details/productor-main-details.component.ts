import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productor-main-details',
  templateUrl: './productor-main-details.component.html',
  styleUrls: ['./productor-main-details.component.scss'],
})
export class ProductorMainDetailsComponent implements OnInit {

  @Input() productorId;

  constructor() { }

  ngOnInit() {
    console.log(this.productorId);
    
  }

}
