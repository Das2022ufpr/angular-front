import { HttpClient, HttpParams } from "@angular/common/http";
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

  constructor(private http: HttpClient) {}

  fetchClients(): Observable<Client[]> {
    this
      .http
      .get<Client[]>(this.endpointUri)
      .forEach((clients) => {
        console.log(clients);
        this.behaviorClientList.next(clients);
      });

    return this.behaviorClientList.asObservable();
  }

  addClient(clientParam: Client): Observable<Client> {
    return this.http.post<Client>(this.endpointUri, clientParam);
  }

  editClient(clientParam: Client): Observable<Client> {
    return this.http.post<Client>(this.endpointUri, clientParam);
  }

  // editClient(clientParam: Client) {
  //   this.clientList.filter((clients) => {
  //     return clients.id == clientParam.id;
  //   }).forEach((client: Client) => {
  //     let clientIndex = this.clientList.indexOf(client);

  //     if (clientIndex != -1) {
  //       this.clientList[clientIndex] = clientParam;
  //       this.behaviorClientList.next(this.clientList);
  //     }
  //   });
  // }

  removeClient(id: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    
    return this.http.delete(this.endpointUri, {params});
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