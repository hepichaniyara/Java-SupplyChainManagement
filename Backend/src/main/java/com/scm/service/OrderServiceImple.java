package com.scm.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scm.dao.OrderDao;
import com.scm.entity.Order;


@Service
public class OrderServiceImple implements OrderService {
	
	@Autowired
	private OrderDao orderDao;

	@Override
	public void add(Order order) {
		orderDao.save(order);
	}

	@Override
	public List<Order> selectAll() {
		Iterable<Order> it = orderDao.findAll();
		List<Order> lst = new ArrayList<>();
		Iterator<Order> itr = it.iterator();
		while(itr.hasNext()) {
			lst.add(itr.next());
		}
		return lst;
	}

	@Override
	public void remove(int id) {
		orderDao.deleteById(id);
	}

	@Override
	public void modify(Order car) {
		orderDao.save(car);
	}

	@Override
	public Order get(int id) {
		Optional<Order> ref = orderDao.findById(id);
		Order order = ref.get();
		return order; 
	}

	
}
