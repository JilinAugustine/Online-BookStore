package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.entity.Book;
import com.spring.entity.Cart;
import com.spring.entity.User;
import com.spring.repository.BookRepository;
import com.spring.repository.CartRepository;

@Service
public class CartService {
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private BookRepository bookRepository;
	
	public List<Cart> getAll(){
		return cartRepository.findAll();
	}
	
	public Cart addCart(Cart c){
		return cartRepository.save(c);
	}
	
	public Cart updateCart(long id,Cart c) {
		c.setCartId(id);
		return cartRepository.save(c);
	}
	
	public void removeCart(long id){
		Cart c=cartRepository.findById(id).get();
		Book b=c.getBook();
		b.setBquantity(b.getBquantity()- (int)c.getQuantity());
		bookRepository.save(b);
		cartRepository.deleteById(id);
	}
	
	public Cart findCartById(long id) {
		return cartRepository.findById(id).orElse(null);
	}
	
	public List<Cart> findByUser(User user){
		return cartRepository.findByUser(user);
	}
	
	public List<Cart> findByBook(Book book){
		return cartRepository.findByBook(book);
	}
}
