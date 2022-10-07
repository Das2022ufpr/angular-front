import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable} from "rxjs";
import { StringsConstants } from "src/app/shared/strings";
import { Client } from "../model/client";
import { IClientRepository } from "./interface/iclient.repository";

@Injectable({ providedIn: 'root'})
export class ClientRepository implements IClientRepository {
  endpointUri = `${StringsConstants.baseUrl}/client`;
  clientList = this.listOfClient();
  behaviorClientList = new BehaviorSubject<Client[]>((this.listOfClient()));
  
  numberOfIndex = 0;

  constructor() {}

  fetchClients(): Observable<Client[]> {
    return this.behaviorClientList;
  }

  addClient(client: Client) {
    client.id = this.numberOfIndex++;

    if (!this.isExistsCPF(client.cpf)) {
      this.clientList.push(client);
      this.behaviorClientList.next(this.clientList);
    }
  }

  editClient(clientParam: Client) {
    this.clientList.filter((clients) => {
      return clients.id == clientParam.id;
    }).forEach((client: Client) => {
      let clientIndex = this.clientList.indexOf(client);

      if (clientIndex != -1) {
        this.clientList[clientIndex] = clientParam;
        this.behaviorClientList.next(this.clientList);
      }
    });
  }

  removeClient(id: number) {
    this.clientList.filter((clients) => {
      return clients.id == id;
    }).forEach((client: Client) => {
      if (client) {
        this.clientList.splice(client.id);
        this.behaviorClientList.next(this.clientList);
      }
    });
  }

  isExistsCPF(cpf: string): boolean {
    return this.clientList.find((client) => client.cpf === cpf) !== undefined;
  }

  isLoggedin(): Observable<boolean> {
    const clientName = localStorage.getItem('client_name');
    const isLogg = clientName !== undefined && clientName !== "";

    return new Observable((subs) => {
        subs.next(isLogg);
        subs.complete();
    });
}

  putClientInLocalStorage(client: Client) {
    localStorage.setItem('client_name', client.name);
    localStorage.setItem('client_cpf', client.cpf);
  }

  private listOfClient(): Client[] {
    return []
  }

  
}