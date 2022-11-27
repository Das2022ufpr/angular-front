import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientService } from '../../client/service/client.service';
import { ItenOrder } from '../../item-order/model/item-order';
import { Product } from '../model/product';
import { ProductRepository } from '../repository/product.repository';
import { ProductService } from '../service/product.service';
import { AddDialogComponent } from '../shared/add-dialog/add-dialog.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() product?: Product;
  
  listOfProduct: Product[] = [];
  quantity: number = 0;
  isLogged: boolean = false;

  constructor(
    private dialog: MatDialog,
    private productService: ProductService,
    private clientService: ClientService,
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.clientService.isClientLogged().subscribe({
      next: (newValue) => this.isLogged = newValue,
    });
  }

  onClick() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '850px',
      data: {quantity: this.quantity},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.product || this.product !== '') {
        this.addQuantityAndProduct(this.product!, result.quantity);
      }
    });
  }

  addQuantityAndProduct(product: Product, quantity: number) {
    let item = new ItenOrder(product.description, quantity);

    this.productService.addProductAndQuantity(item);
    this.customMessage('Produto adicionado a cesta de compras!');
  }

  customMessage(message: string) {
    let config = new MatSnackBarConfig();

    config.duration = 5 * 1000;
    this._snackBar.open(message, 'Fechar', config);
  }
}
