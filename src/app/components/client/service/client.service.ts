import { Injectable } from "@angular/core";
import { ClientRepository } from "../repository/client.repository";

import { Client } from "../model/client";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class ClientService {
  client: Client[] = [];

  constructor(private clientRepository: ClientRepository) {}

  fetchaAllClients(): Observable<Client[]> {
    return this.clientRepository.fetchClients();
  }

  addClient(client: Client) {
    this.clientRepository.addClient(client)
  }

  editClient(client: Client) {
    this.clientRepository.editClient(client);
  }

  removerClient(client: Client) {
    this.clientRepository.removeClient(client.id);
  }
}
