import { Component, Input, OnInit } from '@angular/core';
import { films } from '../model/films';

@Component({
  selector: 'gcwinter-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input()
  filme!: films

  constructor() { }

  ngOnInit(): void {
  }

}
