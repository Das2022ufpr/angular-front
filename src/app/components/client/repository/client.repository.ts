import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { StringsConstants } from "src/app/shared/strings";
import { Client } from "../model/client";
import { IClientRepository } from "./interface/iclient.repository";

@Injectable({ providedIn: 'root'})
export class ClientRepository implements IClientRepository {
  endpointUri = `${StringsConstants.baseUrl}/client`;
  clientList = this.listOfClient();

  constructor() {
  }

  fetchClients(): Observable<Client[]> {
    return new Observable<Client[]>((observer: Observer<Client[]>) => {
      observer.next(this.clientList);
      observer.complete();
    });
  }

  addClient(client: Client) {
    this.clientList.push(client);
  }

  removeClient(id: number) {
    
  }

  private listOfClient(): Client[] {
    return [

    ]
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
