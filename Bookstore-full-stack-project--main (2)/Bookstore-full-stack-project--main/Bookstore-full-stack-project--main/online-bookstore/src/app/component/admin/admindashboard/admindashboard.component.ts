import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../service/book.service';
import { CategoryService } from '../../../service/category.service';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { OrderService } from '../../../service/order.service';
import { ReviewService } from '../../../service/review.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit {
  totalBooks: number = 0;
  totalCategories: number = 0;
  totalOrders: number = 0;
  totalUsers: number = 0;
  url: string = '/';
  totalReview: number = 0;

  constructor(
    private route: Router,
    private bookService: BookService,
    private categoryService: CategoryService,
    private orderService: OrderService,
    private userService: AuthService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.bookService.getBookCount().subscribe(data => {
      this.totalBooks = data;
    });

    this.categoryService.getCategoryCount().subscribe(data => {
      this.totalCategories = data;
    });

    this.orderService.getOrderCount().subscribe(data => {
      this.totalOrders = data;
    });

    this.reviewService.countReviews().subscribe(data => {
      this.totalReview = data;
    });

    this.userService.getUserCount().subscribe(data => {
      this.totalUsers = data;
    });
  }
  gotourl(url: string): void {
    if (url === 'list-book') {
      this.route.navigate(['list-book']);
      return;
    }
    this.route.navigate(["/"+url]);
  }
}