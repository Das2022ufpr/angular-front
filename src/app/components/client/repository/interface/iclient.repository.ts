import { Observable } from "rxjs";
import { Client } from "../../model/client";

export interface IClientRepository {
  fetchClients(): Observable<Client[]>;
}
