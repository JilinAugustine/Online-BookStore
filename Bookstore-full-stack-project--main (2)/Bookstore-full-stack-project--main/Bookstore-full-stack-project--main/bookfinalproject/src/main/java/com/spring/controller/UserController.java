package com.spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entity.User;
import com.spring.repository.UserRepository;
import com.spring.service.UserService;

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
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepository;
	

	@GetMapping("/userveiw")
	public List<User> getAll() {
		return userService.getAll();
	}

	@PostMapping("/adduser")
	public User addUser(@Valid @RequestBody User u) {
		return userService.addUser(u);
	}

	@PutMapping("/updateuser/{id}")
	public User updateUser(@PathVariable long id, @Valid @RequestBody User u) {
		return userService.updateUser(id, u);
	}

	@DeleteMapping("/removeUser/{id}")
	public void removeUser(@PathVariable long id) {
		userService.removeUser(id);
	}
	@GetMapping("/finduserbyid/{id}")
	public User findUserById(@PathVariable long id) {
		return userService.findUserById(id);
	}

	@GetMapping("/finduserbyemail/{email}")
	public Optional<User> findUserByEmail(@PathVariable String email) {
		return userService.findUserByEmail(email);
	}

	@GetMapping("/role/{role}")
	public List<User> findUsersByRole(@PathVariable String role) {
		return userService.findUsersByRole(role);
	}
	@GetMapping("/findbyname/{name}")
	public List<User> findByName(@PathVariable String name){
		return userService.findByName(name);
	}
	
	@PostMapping("login")
	public ResponseEntity<User> loginUser(@RequestBody User user) {
		return new ResponseEntity<User>(this.userRepository.findByEmailIdAndPassword(user.getEmailId(), user.getPassword()), HttpStatus.OK);
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<User>> searchUsers(@RequestParam String searchText) {
		List<User> searchResults = userRepository.findByNameContainingIgnoreCase(searchText);
		return ResponseEntity.ok(searchResults);
	}
	
	@PostMapping("/{uid}/{newpassword}")
	public User changeUserPassword(@PathVariable("uid") long uid,@PathVariable("newpassword") String newpassword) {
		//return customerService.getCustomerByEmail(customer);
		User u=userService.findUserById(uid);
		u.setPassword(newpassword);
		userService.updateUser(uid, u);
		return u;
	}
//get customer by email
	@PostMapping("/forgotpassword")
	public User getUserByEmail(@RequestBody User user) {
		return userRepository.findByEmailId(user.getEmailId()).get();
	}

	@GetMapping("/count")
    public long getUserCount() {
        return userService.getUserCount();
    }
	@GetMapping("/adminid")
    public long getadmin() {
        return userService.getadmin();
    }
}
