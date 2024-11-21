import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '../../../model/order.module';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from '../../../service/order.service';
import { take } from 'rxjs';
import { UpdateOrderComponent } from '../../update-order/update-order.component';

@Component({
  selector: 'app-listorder',
  templateUrl: './listorder.component.html',
  styleUrl: './listorder.component.css'
})
export class ListorderComponent implements OnInit, OnDestroy {


  orders: Order[] = [];
  searchText: string = '';

  constructor(private router: Router, private orderService: OrderService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllOrders();
  }


  ngOnDestroy() {

  }
  getAllOrders(): void {
    this.orderService.getAllOrders().pipe(take(1)).subscribe((res: any) => {
      this.orders = res;
      console.log('orders:', res);
    },
      (error) => {
        console.error('Error fetching Orders:', error);
      }
    );
  }

  onSearchInput(event: any): void {
    if (this.searchText.trim() !== '') {
      const searchValue = parseInt(this.searchText, 10);
      if (!isNaN(searchValue)) {
        this.orderService.searchOrders(searchValue).subscribe((data: Order[]) => {
          this.orders = data;
        });
      } else {
        this.orders = [];
      }
    } else {
      this.getAllOrders();
    }
  }
  updatebook(orderId: number): void {
    const dialogRef = this.dialog.open(UpdateOrderComponent, {
      data: { id: orderId },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '35%',
      width: '80%'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getAllOrders();
    });
  }
}
