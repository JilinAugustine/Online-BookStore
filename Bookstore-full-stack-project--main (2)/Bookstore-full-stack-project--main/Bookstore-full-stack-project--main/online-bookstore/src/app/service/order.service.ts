import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order.module';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:9005/order'; // Assuming you have apiUrl in your environment file

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/vieworder`);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/addorder`, order);
  }

  updateOrder(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}/updateorder/${id}`, order);
  }

  removeOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/removeorder/${id}`);
  }

  findByOrderStatus(orderStatus: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/findbyorderstatus/${orderStatus}`);
  }

  findByPaymentStatus(paymentStatus: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/findbypaymentstatus/${paymentStatus}`);
  }

  findByCart(cartId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/findbycart/${cartId}`);
  }

  getOrderCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }

  getOrderStatusCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/countOrderStatus`);
  }

  searchOrders(searchText: number): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/search?searchText=${searchText}`);
  }
}
