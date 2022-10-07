import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product";

@Injectable({ providedIn: 'root'})
export class ProductRepository {
    allProducts(): Observable<Product[]> {
        return new Observable((subs) => {
            subs.next(this.listOfProducts())
        });
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