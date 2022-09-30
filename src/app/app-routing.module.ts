import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ItemOrderComponent } from './components/item-order/item-order.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path: "", component: ClientComponent},
  {path: "clients", component: ClientComponent},
  {path: "products", component: ProductComponent},
  {path: "order", component: OrderComponent},
  {path: "itemOrder", component: ItemOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
