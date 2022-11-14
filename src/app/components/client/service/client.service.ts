import { Injectable } from "@angular/core";
import { ClientRepository } from "../repository/client.repository";

import { Client } from "../model/client";
import { catchError, Observable, throwError } from "rxjs";

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

  addClient(client: Client): Observable<Client> {
    return this.clientRepository
        .addClient(client)
  }

  editClient(client: Client): Observable<Client> {
    return this.clientRepository.editClient(client);
  }

  removerClient(client: Client): Observable<any> {
    return this.clientRepository.removeClient(client.id);
  }

  isLoggedin(): Observable<boolean> {
    return this.clientRepository.isLoggedin();
  }
}
