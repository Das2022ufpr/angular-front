import { Injectable } from "@angular/core";
import { ClientRepository } from "../repository/client.repository";

import { Client } from "../model/client";

@Injectable({providedIn: "root"})
export class ClientService {
  client: Client[] = [];

  constructor(private clientRepository: ClientRepository) {}

  fetchaAllClients(): Client[] {
    this.clientRepository.fetchClients().subscribe((clients) => {
      this.client = clients;
    });

    return this.client;
  }

  addClient(client: Client) {
    this.clientRepository.addClient(client);
  }

  editClient() {

  }

  removerClient() {

  }
}
