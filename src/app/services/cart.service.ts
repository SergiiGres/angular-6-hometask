import { Injectable, Input } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Array<Product> = [];

  constructor() { }

  addToCart(product: Product) {
    this.products.push(product);
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  isEmpty(): boolean {
    return this.products.length === 0;
  }
}
