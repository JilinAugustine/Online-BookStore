package com.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.spring.entity.Book;
import com.spring.entity.Category;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
	@Query("SELECT COUNT(id) FROM Book")
    long countBooks();
	List<Book> findByBookname(String bookname);
	List<Book> findByCategory(Category category);
	List<Book> findByisbn(String isbn);
	List<Book> findByAuthor(String author);
	List<Book> findByPublisher(String publisher);
	List<Book> findByBooknameContainingIgnoreCase(String searchText);
}
