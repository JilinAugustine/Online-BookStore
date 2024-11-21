import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart.module';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:9005/cart'; // Adjust the base URL as per your backend configuration

  constructor(private http: HttpClient) {}

  addCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}/addcart`, cart);
  }

  getAllCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.baseUrl}/viewcart`);
  }

  updateCart(id: number, cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${this.baseUrl}/updatecart/${id}`, cart);
  }

  removeCart(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/removecart/${id}`);
  }

  findCartById(id: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.baseUrl}/findcartbyid/${id}`);
  }

  findByUser(userId: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.baseUrl}/findbyuser/${userId}`);
  }

  findByBook(bookId: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.baseUrl}/findbybook/${bookId}`);
  }
}
