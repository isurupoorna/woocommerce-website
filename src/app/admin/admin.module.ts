import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  declarations: [AdminComponent, DashboardComponent, ProductComponent, AddProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AddProductComponent
  ]
})
export class AdminModule { }
