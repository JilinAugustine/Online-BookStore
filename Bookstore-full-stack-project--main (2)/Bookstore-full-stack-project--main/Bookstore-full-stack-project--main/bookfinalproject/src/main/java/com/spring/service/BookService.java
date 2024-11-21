package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.entity.Book;
import com.spring.entity.Category;
import com.spring.repository.BookRepository;

@Service
public class BookService {
	@Autowired
    private BookRepository bookRepository;
	
	 public List<Book> getAll(){
		 return bookRepository.findAll();
	 }
	 
	 public Book addBook(Book b) {
		 return bookRepository.save(b);
	 }
	 
	 public Book updateBook(Long id,Book b) {
		 b.setId(id);
		 return bookRepository.save(b);
	 }
	 
	 public void removeBook(long id) {
		 bookRepository.deleteById(id);
	 }
	 
	 public Book findBookById(long id) {
		 return bookRepository.findById(id).orElse(null);
	 }
	 
	 public List<Book> findByBookname(String bookname){
		 return bookRepository.findByBookname(bookname);
	 }
	 
	 public List<Book> findByCategory(Category category){
		 return bookRepository.findByCategory(category);
	 }
	 
	 public List<Book> findByisbn(String isbn){
		 return bookRepository.findByisbn(isbn);
	 }
	 
	 public List<Book> findByAuthor(String author){
		 return bookRepository.findByAuthor(author);
	 }
	 
	 public List<Book> findByPublisher(String publisher){
		 return bookRepository.findByPublisher(publisher);
	 }
	 public long getBookCount() {
	        return bookRepository.countBooks();
	    }
}
