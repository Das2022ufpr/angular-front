import { Component, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = "Produtos"
  loggedin = false;

  constructor() { }

  ngOnInit(): void {}
}
