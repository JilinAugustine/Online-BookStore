package com.spring.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

@Entity
public class Book {
	@Id
	@SequenceGenerator(name = "book_sequence", sequenceName = "book_sequence", allocationSize = 1, initialValue = 600000001)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_sequence")
	@Column(name = "book_id")
	private long id;

	@NotEmpty(message = "Book name is required.")
	@Column(name = "bookname", nullable = false, length = 50)
	private String bookname;

	@Column(name = "book_image")
	private String image;

	@NotEmpty(message = "Book description is required.")
	@Column(name = "description", nullable = false)
	private String description;


	@NotBlank(message = "isbn should not blank")
	private String isbn;

	@Column(name = "mrp_price", nullable = false)
	private double mrpPrice;

	@Column(name = "quantity")
	private int bquantity;

	@NotBlank(message = "Author should not blank")
	private String author;

	@NotBlank(message = "publisher should not blank")
	private String publisher;
	
	@ManyToOne
	@JoinColumn(name = "c_id")
	private Category category;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getBookname() {
		return bookname;
	}


	public void setBookname(String bookname) {
		this.bookname = bookname;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getIsbn() {
		return isbn;
	}


	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}


	public double getMrpPrice() {
		return mrpPrice;
	}


	public void setMrpPrice(double mrpPrice) {
		this.mrpPrice = mrpPrice;
	}


	public int getBquantity() {
		return bquantity;
	}


	public void setBquantity(int bquantity) {
		this.bquantity = bquantity;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public String getPublisher() {
		return publisher;
	}


	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}

}
