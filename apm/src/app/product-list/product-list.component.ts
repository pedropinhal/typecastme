import {
  Component,
  OnInit
} from '@angular/core';
import {
  IProduct
} from './product'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  showImage: boolean = false;
  pageTitle: string = 'Product List';
  _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[] = [{
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-Cart",
    "releaseDate": "18 March, 2017",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "http://lorempixel.com/200/200/"
  }, {
    "productId": 3,
    "productName": "Shovel",
    "productCode": "GDN-shovel",
    "releaseDate": "27 November, 2019",
    "price": 13.99,
    "starRating": 3.7,
    "imageUrl": "http://lorempixel.com/200/200/"
  }]

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.filter(this.listFilter) : this.products;
  }

  filter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) != -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string):void {
this.pageTitle = 'Page title:' + message;
  }
  ngOnInit() {
    console.log("init");
  }
}
