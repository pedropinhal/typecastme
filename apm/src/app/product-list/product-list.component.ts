import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showImage: boolean = false;
  pageTitle: string = 'Product List';
  listFilter: string = 'cart';
  products: IProduct[] =[{
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDNCart",
    "releaseDate": "18 March, 2017",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "http://lorempixel.com/200/200/"
  }]

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
