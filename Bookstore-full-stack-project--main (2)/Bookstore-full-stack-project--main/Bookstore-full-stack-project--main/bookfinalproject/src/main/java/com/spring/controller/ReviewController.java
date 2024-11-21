package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entity.Review;
import com.spring.service.ReviewService;

import jakarta.validation.Valid;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/review")
public class ReviewController {
	@Autowired
	private ReviewService reviewService;
	
	@GetMapping("/viewreview")
	public List<Review> getAll(){
		return reviewService.getAll();
	}

	@PostMapping("/addreviw")
	public Review addReview(@Valid @RequestBody Review r){
		return reviewService.addReview(r);
	}
	
	@DeleteMapping("/removereview/{id}")
	public void removeReview(@PathVariable long id){
		reviewService.removeReview(id);
	}
	
	@PutMapping("/updatereview/{id}")
	public Review updateReview(@PathVariable long id,@Valid @RequestBody Review r) {
		return reviewService.updateReview(id, r);
	}
	
	@GetMapping("/findreviewbyid/{id}")
	public Review findReviewById(@PathVariable long id) {
		return reviewService.findReviewById(id);
	}
	
	@GetMapping("/findbyrating/{rating}")
	public List<Review> findByRating(@PathVariable int rating){
		return reviewService.findByRating(rating);
	}
	
	@GetMapping("/findbyusername/{username}")
	public List<Review> findByUsername(@PathVariable String username){
		return reviewService.findByUsername(username);
	}
	
	@GetMapping("/count")
    public long getCategoryReview() {
		return reviewService.countReview();
	}
}