package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.entity.Review;

import com.spring.repository.ReviewRepository;

@Service
public class ReviewService {
	@Autowired
	private ReviewRepository reviewRepository;
	
	public List<Review> getAll(){
		return reviewRepository.findAll();
	}

	public Review addReview(Review r){
		return reviewRepository.save(r);
	}
	
	public void removeReview(long id){
		reviewRepository.deleteById(id);
	}
	
	public Review updateReview(long id ,Review r){
		r.setId(id);
		return reviewRepository.save(r);
	}
	
	public Review findReviewById(long id){
		return reviewRepository.findById(id).orElse(null);
	}
	
	public List<Review> findByRating(int rating){
		return reviewRepository.findByRating(rating);
	}
	
	public List<Review> findByUsername(String username){
		return reviewRepository.findByUsername(username);
	}
	
	public long countReview() {
		return reviewRepository.countReview();
	}
}