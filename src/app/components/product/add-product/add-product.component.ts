import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(
    private dialog: MatDialog,
    private productService: ProductService) { }

  ngOnInit(): void {}

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
    this.productService.addProductAndQuantity(product, quantity);
  }
}
