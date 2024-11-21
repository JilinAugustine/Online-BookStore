package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.entity.Order;
import com.spring.repository.OrderRepository;

@Service
public class OrderService {
	@Autowired
	private OrderRepository orderRepository;

	public List<Order> getAll() {
		return orderRepository.findAll();
	}
	
	public Order addOrder(Order o) {
		return orderRepository.save(o);
	}
	
	public Order updateOrder(long id,Order o) {
		o.setOrderId(id);
		return orderRepository.save(o);
	}
	
	public void removeOrder(long id) {
		orderRepository.deleteById(id);
	}
	
	public Order findOrderById(long id) {
		return orderRepository.findById(id).orElse(null);
	}
	
	public List<Order> findByOrderStatus(String orderStatus){
		return orderRepository.findByOrderStatus(orderStatus);
	}
	
	public List<Order> findByPaymentStatus(String paymentStatus){
		return orderRepository.findByPaymentStatus(paymentStatus);
	}
	
	 public long getcountOrder(){
	        return orderRepository.countOrder();
	 }
	 
	 public long getcountOrderStatus() {
		 return orderRepository.countorderStatus();
	 }
}