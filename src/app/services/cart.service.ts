import { Injectable, Input } from '@angular/core';

import { Product } from '../models/product.model';
import { CartProduct } from '../models/cart-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Array<CartProduct> = new Array<CartProduct>();

  constructor() { }

  addToCart(product: Product, quantity: number) {
    if(this.cartProducts.filter(e => e.product.id === product.id).length > 0) {
      this.cartProducts.forEach((e)=>{
         if(e.product.id == product.id ) {
             e.quantity += quantity;
         }
      })
   } else {
     this.cartProducts.push(new CartProduct(product, quantity));
   }
  }
  
  removeFromCart(product: Product) {
    this.cartProducts = this.cartProducts.filter(e => e.product.id != product.id);
  }

  getProducts(): Array<CartProduct> {
    return this.cartProducts;
  }

}
