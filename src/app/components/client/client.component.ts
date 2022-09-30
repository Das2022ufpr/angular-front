import { Component, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Client } from './model/client';
import { ClientService } from './service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  title = "Clientes";
  

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  private fetchClients(): void {
    this.clientService
                .fetchaAllClients()
                .subscribe((clients) => {
                  this.clients = clients;      
    });
  }
}
