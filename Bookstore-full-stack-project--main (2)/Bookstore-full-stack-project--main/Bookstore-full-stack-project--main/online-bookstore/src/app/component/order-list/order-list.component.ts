import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { take } from 'rxjs';
import { Order } from '../../model/order.module';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {

  orderList: Array<Order> = [];
  constructor(
    private order: OrderService
  ) {}

  ngOnInit(): void {
      this.order.getAllOrders().pipe(take(1)).subscribe((res: any) => {
        const userId = localStorage.getItem("uId") ?? "";
        this.orderList = res.filter((item: any) => item?.user?.id === parseInt(userId));
      });
  }

}
