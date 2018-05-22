import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { CartProduct } from '../models/cart-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   
  cartProducts: Array<CartProduct>;

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getProducts();
  }

  onRemoveFromCart(cartProduct: CartProduct) {
    this.cartService.removeFromCart(cartProduct.product);
    this.cartProducts = this.cartService.getProducts();
  }

}
