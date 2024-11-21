import { Component } from '@angular/core';
import { Order } from '../../model/order.module';
import { OrderService } from '../../service/order.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrl: './admin-order-list.component.css'
})
export class AdminOrderListComponent {
  orderList: Array<Order> = [];
  searchText: string = '';
  constructor(
    private order: OrderService
  ) {}

  ngOnInit(): void {
      this.order.getAllOrders().pipe(take(1)).subscribe((res: any) => {
        this.orderList = res;
      });
  }
  onSearchInput(event: any): void {
    if (this.searchText.trim() !== '') {
      const searchValue = parseInt(this.searchText, 10);
      if (!isNaN(searchValue)) {
        this.order.searchOrders(searchValue).subscribe((data: Order[]) => {
          this.orderList = data;
        });
      } else {
        this.orderList = [];
      }
    } else {
      this.ngOnInit();
    }
  }
}
