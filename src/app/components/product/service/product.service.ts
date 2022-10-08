import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Product } from "../model/product";
import { ProductRepository } from "../repository/product.repository";

@Injectable({providedIn: "root"})
export class ProductService {
    constructor(private productRepository: ProductRepository) {}
    
    allProducts(): Observable<Product[]> {
        return this.productRepository.allProducts();
    }

    getProductById(id: number): Product | undefined {
        this.productRepository.allProducts().subscribe((subs) => {
            subs.map((product) => {
                if (product.id === id) {
                    return product;
                }

                return undefined;
            });
        });

        return undefined;
    }

    addProductAndQuantity(product: Product, quantity: number): void {
        this.productRepository.addProductsAndQuantity(product, quantity);
    }

    allProductsAndQuantity(): Observable<Map<String, number>> {
        return this.productRepository.allProductsAndQuantity();
    }
}