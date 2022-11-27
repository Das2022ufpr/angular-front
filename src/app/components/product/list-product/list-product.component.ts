import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClientService } from '../../client/service/client.service';

import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})

export class ListProductComponent implements OnInit {
  nameClient: string = ""
  dataSource = new MatTableDataSource<Product>([]);
  displayedColumns: string[] = ['demo-id','demo-description'];

  constructor(
    private route: Router,
    private productService: ProductService,
    private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchAllProducts();
    this.isClientValid();
  }

  fetchAllProducts(): void {
    this.productService.allProducts().subscribe({
      next: (products) => this.allProducts(products),
    });
  }

  allProducts(products: Product[]): void {
    this.dataSource.data = products;
  }

  onClick() {
    this.route.navigate(['/order']);
  }

  isClientValid() {
    this.clientService.isClientLogged().subscribe((newValue) => {
      if (newValue) {
        this.displayedColumns.push('demo-add');
      }
    });
  }
}
