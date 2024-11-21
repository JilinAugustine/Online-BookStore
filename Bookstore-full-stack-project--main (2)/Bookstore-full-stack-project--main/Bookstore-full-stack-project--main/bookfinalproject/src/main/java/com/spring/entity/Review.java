package com.spring.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Review {
	@Id
	@SequenceGenerator(name = "review_sequence", sequenceName = "review_sequence", allocationSize = 1, initialValue = 20001)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_sequence")
	private long id;

	@NotBlank(message = "comment should not blank")
	private String comment;


	private int rating;

	@NotBlank(message = "User name should not blank")
	private String username;
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setId(long id) {
		this.id = id;
	}

}
