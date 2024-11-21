package com.spring.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Category {
	@Id
	@SequenceGenerator(name = "category_sequence", sequenceName = "category_sequence", allocationSize = 1, initialValue = 4000001)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_sequence")
	private long id;

	@NotBlank(message = "Category name should not blank")
	private String name;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Category(Long id, @NotBlank(message = "Category name should not blank") String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public Category() {

	}

}
