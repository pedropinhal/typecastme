import {
  Injectable
} from '@angular/core';
import { IProduct } from '../product-list/product';

@Injectable()
export class ProductService {

  getProducts(): IProduct[] {
    return [{
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
  }

}
