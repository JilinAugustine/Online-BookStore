package com.spring.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.spring.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	 @Query("SELECT COUNT(id) FROM Category")
	    long countCategories();
	List<Category> findByName(String name);

	List<Category> findByNameContainingIgnoreCase(String searchText);
}

