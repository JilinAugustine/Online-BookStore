import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../service/book.service';
import { Book } from '../../../model/book.module';
import { CartService } from '../../../service/cart.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent implements OnInit {

  book: Array<Book> = [];
  searchText: string = '';
  url: string = '';

  constructor(private bookService: BookService, private route: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data: any) => {
      this.book = data;
    });
  }

  addToCart(book: Book): void {
    const element: any =  document.getElementById(book?.id.toString());
    const userInfo = localStorage.getItem("userInfo");
    const body: any = {
      quantity: element.value,
      mrpPrice: book.mrpPrice,
      book: book,
      user: JSON.parse(userInfo ?? "")
    };
    let qty:any= element!==null ? element.value : 0; 
  if(qty ===""){
    element.value=0;
    qty=0;
  }
    if (qty === 0 || qty === "0" || qty <0) {
      alert("Qunatity must be more than zero");
      return ;
    }
    if (qty > book?.bquantity) {
      alert('Added quantity should not greater than available quantity');
      return;
    }
    this.cartService.addCart(body).pipe(take(1)).subscribe((res) => {
      if (res?.cartId) {
        alert("Book added to cart successfully");
      }
    });
  }
  searchBook(searchText: string) {
    this.bookService.searchBooks(searchText).subscribe(
      (data: Book[]) => {
        if (data.length > 0) {
          console.log("**length***",data.length);
          const bookId = localStorage.getItem('id');
          console.log("*****",bookId);
          this.book = data;
      }else{
        this.book = [];
      }
    },
    (error) => {
      console.error('Error fetching Books', error);
    }
    );
  }
  onSearchInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.searchBook(value);
  }
  gotourl(url: string): void {
    if (url === 'cart-list') {
      this.route.navigate(["/"+url]);
    }
    this.route.navigate(["/"+url]);
  }
}
