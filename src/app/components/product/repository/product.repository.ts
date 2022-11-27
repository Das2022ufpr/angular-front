import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, subscribeOn } from "rxjs";
import { StringsConstants } from "src/app/shared/strings";
import { ItenOrder } from "../../item-order/model/item-order";
import { Product } from "../model/product";

@Injectable({ providedIn: 'root'})
export class ProductRepository {
    endpointUri = `${StringsConstants.baseUrl}/product`;
    _mapOfProductsAndQuantity: BehaviorSubject<ItenOrder[]> = new BehaviorSubject<ItenOrder[]>([]);

    constructor(private http: HttpClient) {}

    allProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.endpointUri);
    }

    allProductsAndQuantity(): Observable<ItenOrder[]> {
        return this._mapOfProductsAndQuantity.asObservable();
    }

    addProductsAndQuantity(item: ItenOrder) {
        this._mapOfProductsAndQuantity.value.push(item);
        this._mapOfProductsAndQuantity.next(this._mapOfProductsAndQuantity.value);
    }

    clearShoppingCard() {
        this._mapOfProductsAndQuantity.value.splice(0, this._mapOfProductsAndQuantity.value.length);
    }
}