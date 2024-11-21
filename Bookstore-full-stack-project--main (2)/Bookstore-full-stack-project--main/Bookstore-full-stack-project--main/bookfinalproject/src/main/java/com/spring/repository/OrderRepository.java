package com.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	List<Order> findByOrderStatus(String orderStatus);
	List<Order> findByPaymentStatus(String paymentStatus);
	@Query("SELECT COUNT(id) FROM Order")
    long countOrder();
	@Query("SELECT COUNT(id) FROM Order WHERE orderStatus= 'Successful'")
	long countorderStatus();
	List<Order> findByOrderId(long searchText);
}