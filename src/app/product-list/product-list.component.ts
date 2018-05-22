import { Component, EventEmitter, OnInit, Input, Output, ViewChild } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
  //styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cart: CartComponent;

  products: Array<Product>;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: Product): void {
    console.log('Adding to cart: ', product);
  }
}
