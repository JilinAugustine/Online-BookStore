import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../service/book.service';
import { CategoryService } from '../../../service/category.service';
import { OrderService } from '../../../service/order.service';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../model/user.model';
import { CartService } from '../../../service/cart.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent implements OnInit {
  totalBooks: number = 0;
  totalCategories: number = 0;
  totalOrders: number = 0;
  totalCartItems: number = 0;
  url: string = ''; // Initialize this based on the current route
  totalOrdersDelivered: number = 0;
  user: User = new User(0,"","","","","","","","","","");

  constructor(private route: Router,
    private bookService: BookService,
    private categoryService: CategoryService,
    private orderService: OrderService,
    private cartService: CartService
) 
    {
      const userInfo = localStorage.getItem('userInfo');
    if (userInfo !== null) {
      this.user = JSON.parse(userInfo);
    }
    }

    ngOnInit(): void {
      this.loadDashboardData();
    }
  loadDashboardData() {
    this.bookService.getBookCount().subscribe(data => {
      this.totalBooks = data;
    });

    this.categoryService.getCategoryCount().subscribe(data => {
      this.totalCategories = data;
    });

    // this.orderService.getOrderCount().subscribe(data => {
    // this.totalOrders = data;
    // });
    const userId :any = localStorage.getItem("uId") ?? "";
  this.orderService.getAllOrders().pipe(take(1)).subscribe((res: any) => {
    
    this.totalOrders = res.filter((item: any) => item?.user?.id === parseInt(userId)).length;
  });
  this.cartService.findByUser(userId).pipe(take(1)).subscribe((res: any) => {
    this.totalCartItems=res.length;
  }); 
  }
  goToUrl(url: string): void {
    if (url === 'order-list') {
      this.route.navigate(['/order-list']);
      return;
    }
    this.route.navigate(["/"+url]);
  }
}
