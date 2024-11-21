import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { take } from 'rxjs';
import { Cart } from '../../model/cart.module';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent implements OnInit{

  cartList: Array<Cart> = [];
  total: number = 0;
  dialog: any;
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const usrId: any = localStorage.getItem("uId") ?? "";
    this.cartService.findByUser(usrId).pipe(take(1)).subscribe((res) => {
      this.cartList = res;
      this.total = this.cartList.reduce((sum, item) => sum + (item.quantity * item?.mrpPrice), 0);
    });
  }

  placeOrder(): void {
    const userInfo = localStorage.getItem("userInfo");
    const qty = this.cartList.reduce((sum, item) => sum + item?.quantity, 0);
    const body: any = {
      totalquantity: qty,
      totalPrice: this.total,
      orderStatus: "Delivered",
      paymentStatus: "Paid",
      orderedDate: new Date(),
      image: '',
      user: JSON.parse(userInfo ?? ""),
      book: null
    };
    console.log('####', body);
    this.orderService.addOrder(body).pipe(take(1)).subscribe((res) => {
      this.cartList.forEach((item) => {
        this.cartService.removeCart(item.cartId).pipe(take(1)).subscribe();
      });
      console.log('$$$$$', res);
      if (res?.orderId) {
        alert("Place order successfully");
        this.router.navigate(['/order-list']);
      }
    });
  }
  deletecategory(cartId:number) {
    this.cartService.removeCart(cartId).pipe(take(1)).subscribe(
      () => {
        this.ngOnInit();
        window.alert('Cart deleted successfully');
      },
      (error) => {
        console.error('Error deleting Cart:', error);
      }
    )
  }
}
