import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../model/product';
import { AddDialogComponent } from '../shared/add-dialog/add-dialog.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  quantity: number = 0;
  @Input() product?: Product;

  constructor(private dialog: MatDialog) { }

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
      
    });
  }
}
