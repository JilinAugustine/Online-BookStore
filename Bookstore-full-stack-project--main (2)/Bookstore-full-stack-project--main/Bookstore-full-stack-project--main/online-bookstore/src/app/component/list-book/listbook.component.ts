import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../model/book.module';
import { Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent  {
  books: any [] = [];

  searchText: string = '';
  constructor(private router: Router, private bookService: BookService
   ) {this.getAllBooks(); }

    
    getAllBooks():void {
      this.bookService.getAllBooks().pipe(take(1)).subscribe((res:any) => {
        this.books = res;
        console.log('Books',res);
        console.log('this.books',this.books);
      })
    }

    onDelete(book:any){
      this.bookService.removeBook(book?.id).subscribe((res: any) => {
       
          this.getAllBooks();
          window.alert('Book deleted successfully');
        },
        (error) => {
          console.error('Error deleting Book:', error);
        }
      );
    }

    searchBook(searchText: string) {
      this.bookService.searchBooks(searchText).subscribe(
        (data: Book[]) => {
          if (data.length > 0) {
            console.log("**length***",data.length);
            const bookId = localStorage.getItem('id');
            console.log("*****",bookId);
            this.books = data;
        }else{
          this.books = [];
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
    onEdit(book:any): void {
      console.log('####',book?.id);
      this.router.navigate(['/add-book'],{
        queryParams:{id:book?.id},
      });
      console.log('update');
      
    }
}
