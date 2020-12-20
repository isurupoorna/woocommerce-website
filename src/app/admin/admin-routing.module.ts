import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '',
    component: AdminComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'products', component: ProductComponent},
      {path: 'add-product', component: AddProductComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
