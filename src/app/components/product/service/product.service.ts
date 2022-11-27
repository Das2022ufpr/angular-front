import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ItenOrder } from "../../item-order/model/item-order";

import { Product } from "../model/product";
import { ProductRepository } from "../repository/product.repository";

@Injectable({providedIn: "root"})
export class ProductService {
    constructor(private productRepository: ProductRepository) {}
    
    allProducts(): Observable<Product[]> {
        return this.productRepository.allProducts();
    }

    addProductAndQuantity(item: ItenOrder): void {
        this.productRepository.addProductsAndQuantity(item);
    }

    allProductsAndQuantity(): Observable<ItenOrder[]> {
        return this.productRepository.allProductsAndQuantity();
    }

    clearShoppingCard(): void {
        this.productRepository.clearShoppingCard();
    }
}