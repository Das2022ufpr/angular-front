import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  isLogg = false;
  dataSource = new MatTableDataSource<Product>([]);
  displayedColumns: string[] = ['demo-id',
   'demo-description'];

  constructor(private productService: ProductService, private clientService: ClientService) { 
  }

  ngOnInit(): void {
    this.fetchAllProducts();
    this.isLoggedin();
    this.fetchClient();
    this.isLogg ? this.displayedColumns.push('demo-add') : '';
  }

  fetchAllProducts() {
    this.productService.allProducts().subscribe((products) => {
      this.dataSource.data = products;
    });
  }

  fetchClient() {
    const cpf = localStorage.getItem('client_cpf') ?? '';
    this.nameClient = this.clientService.fetchClientByCPF(cpf)?.name ?? '';
  }

  isLoggedin() {
    this.clientService.isLoggedin().subscribe((isLog) => {
      this.isLogg = isLog;
    });
  }
}
