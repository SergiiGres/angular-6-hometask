import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartItemComponent,
    CartListComponent,
    CartComponent
  ],
  exports: [
    CartItemComponent,
    CartListComponent,
    CartComponent
  ]
})
export class CartModule { }
