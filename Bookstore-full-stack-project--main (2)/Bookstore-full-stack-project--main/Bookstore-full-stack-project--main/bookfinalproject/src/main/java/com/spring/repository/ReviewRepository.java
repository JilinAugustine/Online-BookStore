package com.spring.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.spring.entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
	List<Review> findByRating(int rating);
	List<Review> findByUsername(String username);
	@Query("SELECT COUNT(id) FROM Review")
    long countReview();
	
}