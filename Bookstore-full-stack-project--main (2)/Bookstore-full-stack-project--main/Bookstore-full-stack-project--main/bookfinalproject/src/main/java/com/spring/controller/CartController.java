package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entity.Book;
import com.spring.entity.Cart;
import com.spring.entity.User;
import com.spring.service.CartService;

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
@RequestMapping("/cart")
public class CartController {
	@Autowired
	private CartService cartService;
	
	@GetMapping("viewcart")
	public List<Cart> getAll(){
		return cartService.getAll();
	}
	
	@PostMapping("/addcart")
	public Cart addCart(@RequestBody Cart c){
		return cartService.addCart(c);
	}
	
	@PutMapping("updatecart/{id}")
	public Cart updateCart(@PathVariable long id,@Valid @RequestBody Cart c) {
		return cartService.updateCart(id, c);
	}
	
	@DeleteMapping("/removecart/{id}")
	public void removeCart(@PathVariable long id) {
		cartService.removeCart(id);
	}
	
	@GetMapping("findcartbyid/{id}")
	public Cart findCartById(@PathVariable long id) {
		return cartService.findCartById(id);
	}
	
	@GetMapping("findbyuser/{user}")
	public List<Cart> findByUser(@PathVariable User user){
		return cartService.findByUser(user);
	}
	
	@GetMapping("findbybook/{book}")
	public List<Cart> findByBook(@PathVariable Book book){
		return cartService.findByBook(book);
	}
}
