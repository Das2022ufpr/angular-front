import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ItenOrder } from "../../item-order/model/item-order";
import { Order } from "../model/order";
import { OrderRepository } from "../repository/order-repository";

@Injectable({providedIn: "root"})
export class OrderService {

 constructor(
     private orderRepository: OrderRepository
 ) {}
 
 fetchOrderById(): Observable<ItenOrder[]> {
     return this.orderRepository.fetchItensByClientId();
 }

 addOrder(order: Order): Observable<Order> {
     return this.orderRepository.addOrder(order);
 }

 hasOrderIsOpen(isOpenOrder?: boolean): Observable<boolean> {
     return this.orderRepository.hasOrderIsOpen();
 }
     
}