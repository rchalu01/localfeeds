import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productor-list-cell',
  templateUrl: './productor-list-cell.component.html',
  styleUrls: ['./productor-list-cell.component.scss'],
})
export class ProductorListCellComponent implements OnInit {

  @Input() productor;
  favoriteImage: string = "loveWhite";

  constructor() { }

  ngOnInit() {}

  public addToFavorite() {

    if (this.favoriteImage == "loveWhite") 
      this.favoriteImage = "loveColor";
    else
      this.favoriteImage = "loveWhite";
  }
}
