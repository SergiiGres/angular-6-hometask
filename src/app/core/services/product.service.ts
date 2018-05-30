import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import { Category } from '../models/product.category';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = PRODUCTS;

  constructor() { }

  getProduct(): Product {
    return new Product(1, 'New product', 'New product description', Math.random(), Category.Cat4, true);
  }

  getProducts(): Array<Product> {
    return this.products;
  }
}
