import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
