package com.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.entity.User;
import com.spring.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
  public List<User> getAll(){
	return userRepository.findAll();	  
  }
  
  public User addUser(User u) {
	  return userRepository.save(u);
  }
  public User updateUser(long id,User u) {
	  u.setId(id);
	  return userRepository.save(u);
  }
  
  public void removeUser(long id) {
	  userRepository.deleteById(id);
  }
  public User findUserById(long id) {
      return userRepository.findById(id).orElse(null);
  }

  public Optional<User> findUserByEmail(String email) {
      return userRepository.findByEmailId(email);
  }

  public List<User> findUsersByRole(String role) {
      return userRepository.findByRole(role);
  }
  
  public List<User> findByName(String name){
	  return userRepository.findByName(name);
  }
  
  public long getUserCount() {
	  System.out.println(userRepository.countUsers());
      return userRepository.countUsers();
  }
  
  public long getadmin() {
	  System.out.println(userRepository.admin());
	  return userRepository.admin();
  }
}
