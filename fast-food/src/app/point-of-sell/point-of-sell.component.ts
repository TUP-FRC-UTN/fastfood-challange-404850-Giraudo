import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Order } from '../../models/order-model';
@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent {

  orderCreated : Order = {
    number: 0,
    name: '',
    description: '',
    date: new Date()
  }

  constructor(private orderService: OrderService) {}

  takeOrder(form: NgForm){
    this.orderCreated.number = this.orderService.getLastId();
    this.orderService.updateLastId();

    this.orderCreated.date = new Date();
    console.log(this.orderCreated);

    this.orderService.addOrder(this.orderCreated);
  }

}
