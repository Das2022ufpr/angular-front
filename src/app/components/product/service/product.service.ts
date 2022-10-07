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
}