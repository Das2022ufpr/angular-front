import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ItenOrder } from "../model/item-order";
import { ItemOrderRepository } from "../repository/item-order.repository";

@Injectable({providedIn: "root"})
export class ItemOrderService {
    constructor(private itemOderRepository: ItemOrderRepository) {}
    
    addItemOrder(idOrder: number, items: ItenOrder[]): Observable<any> {
        return this.itemOderRepository.saveItem(idOrder, items);
    }
}