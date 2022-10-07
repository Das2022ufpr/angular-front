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

  fetchClientByCPF(cpf: string): Client | undefined {
    this.clientRepository.fetchClients().subscribe((listOfClients) => {
      listOfClients.forEach((client: Client) => {
        if (client.cpf === cpf) {
          this.clientRepository.putClientInLocalStorage(client);
        }
        return undefined;
      });
    });
    return undefined;
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

  isCPFExists(cpf: string): boolean {
    return this.clientRepository.isExistsCPF(cpf);
  }

  isLoggedin(): Observable<boolean> {
    return this.clientRepository.isLoggedin();
  }
}
