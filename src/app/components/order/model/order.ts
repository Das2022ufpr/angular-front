import { Product } from "../../product/model/product";

export class Order {
    id: number;
    productID: number[];
    quantity: number;

    constructor(
        id: number,
        product: number[],
        quantity: number) {
            this.id = id;
            this.productID = product;
            this.quantity = quantity;
        }
}