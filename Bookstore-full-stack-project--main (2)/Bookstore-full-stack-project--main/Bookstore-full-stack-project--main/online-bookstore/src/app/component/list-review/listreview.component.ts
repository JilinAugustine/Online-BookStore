import { Component } from '@angular/core';
import { ReviewService } from '../../service/review.service';
import { Review } from '../../model/review.module';

@Component({
  selector: 'app-listreview',
  templateUrl: './listreview.component.html',
  styleUrl: './listreview.component.css'
})
export class ListreviewComponent {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getAllReviews().subscribe((data) => {
      this.reviews = data;
    });
  }

  deleteReview(id: number): void {
    this.reviewService.deleteReview(id).subscribe(() => {
      this.reviews = this.reviews.filter((review) => review.id !== id);
    });
  }
}
