import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order-model';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  ordersToCook : Order[] = [];
  orderCooking : Order = {
    number: 0,
    name: '',
    description: '',
    date: new Date()
  }

  constructor(private orderService: OrderService) {
    this.ordersToCook = orderService.getOrders();
    this.orderCooking = orderService.getOrderKitchen();
  }

  cookOrder(id: number){
    this.orderService.cookOrder(id);
    this.orderCooking = this.orderService.getOrderKitchen();
  }

  deliverOrder(order: Order) {
    this.orderService.deliverOrder(order);
    this.orderCooking = {
      number: 0,
      name: '',
      description: '',
      date: new Date()
    }
  }


}
