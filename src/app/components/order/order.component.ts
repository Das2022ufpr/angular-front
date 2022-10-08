import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product/service/product.service';
import { Order } from './model/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['demo-id',
  'demo-description', 'demo-quantity'];
  dataSource = new MatTableDataSource<Order>();
  order = new Order(1, [], 0);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.productService.allProductsAndQuantity().subscribe((subs) => {
      const product = subs.get('product');
      const quantity = subs.get('quantity');
      
      this.order.id = this.order.id++;
      this.order.productID.push(product!);
      this.order.quantity = quantity!;

      this.dataSource.data.push(this.order);
    });
  }
}
