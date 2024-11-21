import { Injectable } from '@angular/core';
import { Book } from '../model/book.module';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 

  navigateToLink(arg0: string) {
    this.router.navigate(['/'+ arg0]);
  }
 
  private baseUrl = 'http://localhost:9005/book';
  private URL = 'http://localhost:9005';

  constructor(private http: HttpClient,private router:Router) { }

  getAllCategory(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.URL}/categories/veiwcategory`);
  }

  // Get all books
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/viewbooks`);
  }

  // Add a new book
  addBook(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addbook`, body,{ responseType: 'text' });
    
  }

  // Update an existing book
  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}/updatebook/${id}`, book).pipe(
      tap((updatedBook: Book) => console.log(`Updated book with ID=${updatedBook.id}`))
    );
  }

  // Remove a book by ID
  removeBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/removeBook/${id}`, { responseType: 'text' as 'json' }).pipe(
      tap(() => console.log(`Deleted book with ID=${id}`))
    );
  }

  // Find a book by ID
  findBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/findbookbyid/${id}`);
  }

  // Find books by name
  findByBookname(bookname: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/findbybookname/${bookname}`);
  }

  // Find books by category
  findByCategory(category: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/findbycategory/${category}`);
  }

  // Find books by ISBN
  findByIsbn(isbn: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/findbyisbn/${isbn}`);
  }

  // Find books by author
  findByAuthor(author: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/findbyauthor/${author}`);
  }

  // Find books by publisher
  findByPublisher(publisher: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/findbypublisher/${publisher}`);
  }
  searchBooks(searchText: string): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/search?searchText=${searchText}`);
  }
  getBookCount(): Observable<number> {
    console.log('call');
    return this.http.get<number>(this.baseUrl+'/count');
  }
}
