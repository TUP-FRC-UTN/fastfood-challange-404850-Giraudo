import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeliveryPointComponent } from './delivery-point/delivery-point.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { PointOfSellComponent } from './point-of-sell/point-of-sell.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeliveryPointComponent, KitchenComponent, PointOfSellComponent, RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fast-food';
}
