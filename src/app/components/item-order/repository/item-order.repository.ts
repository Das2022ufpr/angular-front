import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StringsConstants } from "src/app/shared/strings";
import { ItenOrder } from "../model/item-order";

class ItemOrderDTO {
    idOrder: number;
    items: ItenOrder[]

    constructor(idOrder: number, items: ItenOrder[]) {
        this.idOrder = idOrder;
        this.items = items;
    }   
}
@Injectable({providedIn: "root"})
export class ItemOrderRepository {
 endpointUri = `${StringsConstants.baseUrl}/item`;

 constructor(private http: HttpClient) {}

 saveItem(idOrder: number, items: ItenOrder[]): Observable<ItemOrderDTO> {
     let itemOrderDTO = new ItemOrderDTO(idOrder, items);

     return this.http.post<ItemOrderDTO>(this.endpointUri, itemOrderDTO);
 }
}