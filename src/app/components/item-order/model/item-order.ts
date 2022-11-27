export class ItenOrder {
    description: string;
    quantity: number;

    constructor(description: string, quantity: number) {
        this.description = description;
        this.quantity = quantity;
    }
}