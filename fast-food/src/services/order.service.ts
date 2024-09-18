import { Injectable } from '@angular/core';
import { Order } from '../models/order-model'; 

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  lastId : number = 1;

  orderList : Order[] = [];

  orderDeliveryList : Order[] = [];

  orderKitchen : Order = {
    number: 0,
    name: 'Default',
    description: 'default description',
    date: new Date()
  }

  addOrder(order : Order){
    this.orderList.push(order);
  }

  getOrders(){
    return this.orderList;
  }

  cookOrder(id: number){
    const order = this.orderList.find(o => o.number == id);

    if(order != undefined) {
      this.orderList.splice(this.orderList.indexOf(order), 1);
      this.orderKitchen = order;
    }
  }

  deliverOrder(order: Order) {
    this.orderDeliveryList.push(order);
  }

  getOrderKitchen(){
    return this.orderKitchen
  }

  getLastId(){
    return this.lastId;
  }
  updateLastId() {
    this.lastId += 1;
  }
  
}
