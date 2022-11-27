import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../client/service/client.service';
import { ItenOrder } from '../item-order/model/item-order';
import { ProductService } from '../product/service/product.service';
import { Order } from './model/order';
import { OrderService } from './service/order-service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['demo-description', 'demo-quantity'];
  dataSource = new MatTableDataSource<ItenOrder>();
  title = "Pedidos";
  isEmpty = false;
  isClientLogged = false;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private clientService: ClientService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.clientService.isClientLogged().subscribe((newValue) => {
      if(newValue) {
        this.isClientLogged = newValue;
        this.init();
      }
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  init() {
    this.orderService.fetchOrderById().subscribe({
      next: (value) => this.onNext(value),
      error: () => this.onError()
    });
  }

  onNext(item: ItenOrder[]) {
    if (item && item.length > 0) {
      this.isEmpty = false;
      this.dataSource.data = item;
    } else {
      this.isEmpty = true;
    }
  }

  onError() {
    alert('Erro ao carregar!');
  }
}
