import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../../client/service/client.service';
import { ProductService } from '../service/product.service';
import { ItenOrder } from '../../item-order/model/item-order';
import { OrderService } from '../../order/service/order-service';
import { Order } from '../../order/model/order';
import { ItemOrderService } from '../../item-order/service/item-order.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {
  @Output() isClient = false;
  dataSource = new MatTableDataSource<ItenOrder>([]);
  displayedColumns: string[] = ['demo-name','demo-description'];

  constructor(
    private clientService: ClientService,
    private productService: ProductService,
    private orderService: OrderService,
    private itemOrderService: ItemOrderService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.clientService
        .isClientLogged()
        .subscribe((newValue) => {
          this.isClient = newValue;
          this.initOrder();
        });
  }

  initOrder() {
    this.productService.allProductsAndQuantity().subscribe((subs) => {
        this.dataSource.data = subs;
        this.dataSource.data = this.dataSource.data;
    });
  }

  onClick() {
    let id = this.clientService.fetchIdClientInLocalStorage();

    this
      .orderService
      .addOrder(new Order(Number(id)))
      .subscribe({
      next: (order) => this.orderAddSucess(order),
      error: () => alert('Erro ao criar pedido!')
    });
  }

  orderAddSucess(order: any) {
    let orderId = order.id;
    
    this
    .itemOrderService
    .addItemOrder(Number(orderId), this.dataSource.data)
    .subscribe({
      next: () => this.sucess(),
      error: () => alert('Não foi possível gravar!!')
    });
  }

  sucess() {
    this.productService.clearShoppingCard();
    this.dataSource.data = [];
    this.router.navigateByUrl("/order");
    this.showSucessSnackBar();
  }

  showSucessSnackBar() {
    this._snackBar.open(`Pedido cadastrado com sucesso!`, 'Fechar', {
      duration: 3000
    });
  }
}
