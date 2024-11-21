package com.spring.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.spring.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmailId(String emailId);
	    List<User> findByRole(String role);
	    List<User> findByName(String name);
	    List<User> findByNameContainingIgnoreCase(String searchText);
	    public User findByEmailIdAndPassword(String emailId, String password);
	    @Query("SELECT COUNT(id) FROM User WHERE role= 'user'")
	    long countUsers();
	    @Query("SELECT id FROM User WHERE role= 'admin'")
	    long admin();
}
