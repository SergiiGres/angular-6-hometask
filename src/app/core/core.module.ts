import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService, ProductService } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductService,
    CartService
  ],
  exports: [
    CartService,
    ProductService
  ]
})
export class CoreModule { }
