import { Component, OnInit, Output } from '@angular/core';
import { ClientService } from '../client/service/client.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = "Produtos"
  loggedin = false;
  user = ""

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    let nameClient = this.clientService.fetchNameClientInLocalStorage();

    this.clientService.isClientLogged().subscribe({
      next: (newValue) => {
        if (newValue) {
          this.user = nameClient;
          this.loggedin = newValue;
        }
      }
    })
  }
}
