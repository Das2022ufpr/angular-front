import { Component, OnInit } from '@angular/core';
import { Client } from './model/client';
import { ClientService } from './service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clients = this.fetchClients();
  }

  private fetchClients(): Client[] {
    return this.clientService.
    fetchaAllClients();
  }

  private addClient() : void {
    alert("Client ADD")
  }
}
