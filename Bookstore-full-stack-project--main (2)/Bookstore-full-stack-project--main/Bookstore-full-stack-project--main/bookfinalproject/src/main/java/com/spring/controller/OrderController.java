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

import com.spring.entity.Order;
import com.spring.repository.OrderRepository;
import com.spring.service.OrderService;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private OrderRepository orderRepository;

	@GetMapping("/vieworder")
	public List<Order> getAll() {
		return orderService.getAll();
	}
	
	@PostMapping("/addorder")
	public Order addOrder(@RequestBody Order o) {
		
		return orderService.addOrder(o);
	}
	
	@PutMapping("/updateorder/{id}")
	public Order updateOrder(@PathVariable long id,@RequestBody Order o) {
		return orderService.updateOrder(id, o);
	}
	
	@DeleteMapping("/removeorder/{id}")
	public void removeOrder(@PathVariable long id) {
		orderService.removeOrder(id);
	}
	@GetMapping("/findbyid/{id}")
	public Order findOrderById(@PathVariable long id) {
		return orderService.findOrderById(id);
	}
	
	@GetMapping("/findbyorderstatus/{orderStatus}")
	public List<Order> findByOrderStatus(@PathVariable String orderStatus){
		return orderService.findByOrderStatus(orderStatus);
	}
	
	@GetMapping("/findbypaymentstatus/{paymentStatus}")
	public List<Order> findByPaymentStatus(@PathVariable String paymentStatus){
		return orderService.findByPaymentStatus(paymentStatus);
	}
	
	@GetMapping("/count")
	public long getOrderCount() {
		return orderService.getcountOrder();
	}
	
	@GetMapping("/countOrderStatus")
	public long getOrderStatus() {
		return orderService.getcountOrderStatus();
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<Order>> searchUsers(@RequestParam long searchText) {
		List<Order> searchResults = orderRepository.findByOrderId(searchText);
		return ResponseEntity.ok(searchResults);
	}
}