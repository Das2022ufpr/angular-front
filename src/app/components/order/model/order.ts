import { Product } from "../../product/model/product";

export class Order {
    idClient: number;

    constructor(idClient: number) {
        this.idClient = idClient;
    }
}