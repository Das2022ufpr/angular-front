import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable} from "rxjs";

import { StringsConstants } from "src/app/shared/strings";
import { IClientRepository } from "./interface/iclient.repository";
import { Client } from "../model/client";
import { ActivatedRoute } from "@angular/router";

@Injectable({ providedIn: 'root'})
export class ClientRepository implements IClientRepository {
  endpointUri = `${StringsConstants.baseUrl}/client`;
  behaviorClientList = new BehaviorSubject<Client[]>(([]));
  private _behaviorClientLogged = new BehaviorSubject<boolean>((false));

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

  removeClient(id: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    
    return this.http.delete(this.endpointUri, {params});
  }

  fetchClientByCPF(cpf: any): Observable<Client> {
    return this.http.get<Client>(`${this.endpointUri}/cpf/` + cpf['cpf']);
  }

  putClientInLocalStorage(client: Client): void {
    localStorage.setItem('client_id', client.id.toString());
    localStorage.setItem('client_cpf', client.cpf);
    localStorage.setItem('client_name', client.name);
    this.clientLogged(true);
  }

  clearLocalStorage(): void {
    localStorage.removeItem('client_id');
    localStorage.removeItem('client_cpf');
    localStorage.removeItem('client_name',);
    this.clientLogged(false);
  }

  fetchIdClientInLocalStorage(): string {
    return localStorage.getItem('client_id') ?? '';
  }

  fetchClientName(): string {
    return localStorage.getItem('client_name') ?? '';
  }

  isClientLogged(): Observable<boolean> {
    return this._behaviorClientLogged.asObservable();
  }

  private clientLogged(isLogged: boolean): void {
    this._behaviorClientLogged.next(isLogged);
  }
}