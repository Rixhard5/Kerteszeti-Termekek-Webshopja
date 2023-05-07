import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebshopRoutingModule } from './webshop-routing.module';
import { WebshopComponent } from './webshop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';


import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    WebshopComponent,
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    WebshopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
  ]
})
export class WebshopModule { }
