import { Injectable } from "@angular/core";
import { ClientRepository } from "../repository/client.repository";

import { Client } from "../model/client";
import { BehaviorSubject, catchError, Observable, observeOn, of, throwError } from "rxjs";

@Injectable({providedIn: "root"})
export class ClientService {
  client: Client[] = [];
  private _behaviorSub = new BehaviorSubject<boolean>(false);

  constructor(private clientRepository: ClientRepository) {}

  fetchaAllClients(): Observable<Client[]> {
    return this.clientRepository.fetchClients();
  }

  fetchClientByCPF(cpf: any): Observable<Client> {
    return this.clientRepository.fetchClientByCPF(cpf);
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

  isClientOpenTheOrder(statusClient? : boolean): Observable<boolean> {
    this._behaviorSub.next(statusClient ?? false);

    return this._behaviorSub.asObservable();
  }

  addClientInLocalStorage(client: Client) {
    this.clientRepository.putClientInLocalStorage(client);
  }

  fetchIdClientInLocalStorage(): string {
    return this.clientRepository.fetchIdClientInLocalStorage();
  }

  fetchNameClientInLocalStorage(): string {
    return this.clientRepository.fetchClientName();
  }

  clearLocalStorage(): void {
    this.clientRepository.clearLocalStorage();
  }

  isClientLogged(): Observable<boolean> {
    return this.clientRepository.isClientLogged();
  }
}
