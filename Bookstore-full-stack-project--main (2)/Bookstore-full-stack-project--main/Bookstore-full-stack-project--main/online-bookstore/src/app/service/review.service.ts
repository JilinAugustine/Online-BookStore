import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../model/review.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://localhost:9005/review';

  constructor(private http: HttpClient) {}

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.baseUrl}/addreviw`, review);
  }

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/viewreview`);
  }

  deleteReview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/removereview/${id}`);
  }

  updateReview(id: number, review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.baseUrl}/updatereview/${id}`, review);
  }

  findReviewById(id: number): Observable<Review> {
    return this.http.get<Review>(`${this.baseUrl}/findreviewbyid/${id}`);
  }

  findReviewsByRating(rating: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/findbyrating/${rating}`);
  }

  findReviewsByUsername(username: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/findbyusername/${username}`);
  }

  countReviews(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }
}
