package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entity.Book;
import com.spring.entity.Category;
import com.spring.repository.BookRepository;
import com.spring.service.BookService;

import jakarta.validation.Valid;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/book")
public class BookController {
	@Autowired
	private BookService bookService;
	
	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping("/viewbooks")
	 public List<Book> getAll() {
		return bookService.getAll();
	}
	
	@PostMapping("/addbook")
	public Book addBook(@Valid @RequestBody Book b) {
		return bookService.addBook(b);
	}
	
	@PutMapping("/updatebook/{id}")
	public Book updateBook(@PathVariable Long id,@Valid @RequestBody Book b) {
		return bookService.updateBook(id, b);
	}
	
	@DeleteMapping("/removeBook/{id}")
	public void removeBook(@PathVariable long id){
		bookService.removeBook(id);
	}
	
	@GetMapping("/findbookbyid/{id}")
	public Book findBookById(@PathVariable long id) {
		return bookService.findBookById(id);
	}
	@GetMapping("/findbybookname/{bookname}")
	public List<Book> findByBookname(@PathVariable String bookname){
		return bookService.findByBookname(bookname);
	}
	
	@GetMapping("/findbycategory/{category}")
	public List<Book> findByCategory(@PathVariable Category category){
		return bookService.findByCategory(category);
	}
	
	@GetMapping("/findbyisbn/{isbn}")
	public List<Book> findByisbn(@PathVariable String isbn){
		return bookService.findByisbn(isbn);
	}
	
	@GetMapping("/findbyauthor/{author}")
	public List<Book> findByAuthor(@PathVariable String author){
		return bookService.findByAuthor(author);
	}
	
	@GetMapping("/findbypublisher/{publisher}")
	public List<Book> findByPublisher(@PathVariable String publisher){
		return bookService.findByPublisher(publisher);
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<Book>> searchUsers(@RequestParam String searchText) {
		List<Book> searchResults = bookRepository.findByBooknameContainingIgnoreCase(searchText);
		return ResponseEntity.ok(searchResults);
	}
	
	@GetMapping("/count")
    public long getBookCount() {
        return bookService.getBookCount();
    }
}
