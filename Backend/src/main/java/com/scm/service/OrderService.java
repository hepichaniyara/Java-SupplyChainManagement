package com.scm.service;

import java.util.List;



import com.scm.entity.Order;

public interface OrderService {
	void add(Order order);
	List<Order> selectAll();
	void remove(int id);
	void modify(Order order);
	Order get(int id);
}
