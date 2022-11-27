import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { StringsConstants } from "src/app/shared/strings";
import { ClientRepository } from "../../client/repository/client.repository";
import { ItenOrder } from "../../item-order/model/item-order";
import { Order } from "../model/order";

@Injectable({ providedIn: 'root'})
export class OrderRepository {
    endpointUri = `${StringsConstants.baseUrl}/order`;
    endpointUrl = `${StringsConstants.baseUrl}/item`;

    private _behaviorSub = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private clientRepository: ClientRepository,
    ) {}

    fetchItensByClientId():Observable<ItenOrder[]> {
        let id = this.clientRepository.fetchIdClientInLocalStorage();

        return this.http.get<ItenOrder[]>(this.endpointUrl + `/${Number.parseInt(id)}`)
    }

    addOrder(order: Order): Observable<Order> {
        return this.http.get<Order>(this.endpointUri + `/${order.idClient}`);
    }

    hasOrderIsOpen(isOpenOrder?: boolean): Observable<boolean> {
        if (isOpenOrder != null) {
            this._behaviorSub.next(isOpenOrder);
        }

        return this._behaviorSub.asObservable();
    }
}