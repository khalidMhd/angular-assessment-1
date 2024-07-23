import { Injectable } from '@angular/core';
import { products } from '../utils/product.util';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProductList(): Product[] {
    return products;
  }

  getProductDetailsByID(id: number) {
    const productDetails = products.find((item) => item.id === id);
    return productDetails;
  }
}
