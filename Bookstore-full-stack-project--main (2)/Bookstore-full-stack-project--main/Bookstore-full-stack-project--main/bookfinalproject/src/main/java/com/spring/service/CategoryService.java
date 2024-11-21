package com.spring.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.entity.Category;
import com.spring.repository.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    
    public List<Category> getAll(){
    	return categoryRepository.findAll();
    }
    
    public Category addCategory(Category c) {
        return categoryRepository.save(c);
    }
    
    public Category updateCategory(long id,Category c ) {
    	c.setId(id);
    	return categoryRepository.save(c);
    }
    
    public void removeCategory(long id) {
        categoryRepository.deleteById(id);
    }

    public Category findCategoryById(long id) {
        return categoryRepository.findById(id).orElse(null);
    }

    public List<Category> findByName(String name){
    	return categoryRepository.findByName(name);
    }
    
    public long getCategoryCount() {
        return categoryRepository.countCategories();
    }
}

