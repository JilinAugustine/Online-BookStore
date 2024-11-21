import { Component, OnInit } from '@angular/core';
import { Review } from '../../model/review.module';
import { ReviewService } from '../../service/review.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrl: './addreview.component.css'
})
export class AddreviewComponent implements OnInit{
  review: Review = new Review('', 0, '');

  constructor(private reviewService: ReviewService, private router: Router) {}

  ngOnInit(): void {
      this.review.username = localStorage.getItem("uname") ?? "";
  }
  onSubmit() {
    this.reviewService.addReview(this.review).subscribe(() => {
      alert('Review Added Successfully');
    });
  }
}
