package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entity.Category;
import com.spring.repository.CategoryRepository;
import com.spring.service.CategoryService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @Autowired
	private CategoryRepository categoryRepository;
    
    @GetMapping("/veiwcategory")
    public List<Category> getAll(){
    	return categoryService.getAll();
    }
    
    @PostMapping("/addcategory")
    public Category addCategory(@Valid @RequestBody Category c) {
        return categoryService.addCategory(c);
    }

    @PutMapping("/updatecategory/{id}")
    public Category updateCategory(@PathVariable long id,@Valid @RequestBody Category c ) {
    	return categoryService.updateCategory(id, c);
    }
    
    @DeleteMapping("/removecategory/{id}")
    public void removeCategory(@PathVariable long id) {
        categoryService.removeCategory(id);
    }
    
    @GetMapping("/findcategorybyid/{id}")
    public Category findCategoryById(@PathVariable long id) {
        return categoryService.findCategoryById(id);
    }

    @GetMapping("/findbycategoryname/{name}")
    public List<Category> findByCategoryName(@PathVariable String name){
    	return categoryService.findByName(name);
    }

    @GetMapping("/search")
	public ResponseEntity<List<Category>> searchUsers(@RequestParam String searchText) {
		List<Category> searchResults = categoryRepository.findByNameContainingIgnoreCase(searchText);
		return ResponseEntity.ok(searchResults);
	}
    
    @GetMapping("/count")
    public long getCategoryCount() {
        return categoryService.getCategoryCount();
    }
}
