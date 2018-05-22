import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../models/product.category';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
    private cartService: CartService
  ) { }

  onAddToChart(){
    console.log("Added to chart : " + this.product.name);
    this.cartService.addToCart(this.product);
    this.addToCart.emit(this.product);
  }
}
