import { Injectable } from "@angular/core";
import { Observable, subscribeOn } from "rxjs";
import { Product } from "../model/product";

@Injectable({ providedIn: 'root'})
export class ProductRepository {
    _mapOfProductsAndQuantity: Map<String, number> = new Map();

    allProducts(): Observable<Product[]> {
        return new Observable((subs) => {
            subs.next(this.listOfProducts())
        });
    }

    allProductsAndQuantity(): Observable<Map<String, number>> {
        return new Observable((subs) => {
            subs.next(this._mapOfProductsAndQuantity);
        });
    }

    addProductsAndQuantity(product: Product, quantity: number) {
        this._mapOfProductsAndQuantity.set('product', product.id);
        this._mapOfProductsAndQuantity.set('quantity', quantity);
    }

    private listOfProducts(): Product[] {
        return [
            new Product(0, "Salgadinho"),
            new Product(1, "Bolacha"),
            new Product(2, "Bola de Futebol"),
            new Product(3, "Playstantion 5"),
            new Product(4, "Xbox One"),
        ];
    }
}