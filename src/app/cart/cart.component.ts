import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   
  products: Array<Product>;

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }

}
