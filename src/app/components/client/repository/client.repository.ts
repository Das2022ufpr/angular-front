import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Observer, of } from "rxjs";
import { StringsConstants } from "src/app/shared/strings";
import { Client } from "../model/client";
import { IClientRepository } from "./interface/iclient.repository";

@Injectable({ providedIn: 'root'})
export class ClientRepository implements IClientRepository {
  endpointUri = `${StringsConstants.baseUrl}/client`;
  clientList = this.listOfClient();
  behaviorClientList = new BehaviorSubject<Client[]>((this.listOfClient()));

  constructor() {
  }

  fetchClients(): Observable<Client[]> {
    return this.behaviorClientList;
  }

  addClient(client: Client) {
    client.id = this.clientList.length;

    this.clientList.push(client);
    this.behaviorClientList.next(this.clientList);
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

  private listOfClient(): Client[] {
    return [

    ]
  }

  private returnClientInsideArray(id : number): Client | undefined {
    var client : Client;

    this.clientList.forEach((clients) => {
      if (clients.id === id) {
        client = clients;
      }

      return client;
    });

    return undefined;
  }
}

//   private listOfClient(): Client[] {
//     return [
//       {
//         'id': 1,
//         'cpf': '874.123.412-99',
//         'name': 'Teste',
//         'age': 44
//       },
//       {
//         'id': 2,
//         'cpf': '888.143.875-67',
//         'name': 'Ola',
//         'age': 41
//       },
//       {
//         'id': 3,
//         'cpf': '333.341.665-12',
//         'name': 'Tudo bem',
//         'age': 44
//       }
//     ];
//   }
// }
