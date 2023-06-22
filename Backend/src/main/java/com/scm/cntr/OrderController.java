package com.scm.cntr;



import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;


import com.scm.entity.Order;
import com.scm.service.OrderService;


@RestController
@CrossOrigin("http://localhost:3000/")
public class OrderController {

	@Autowired
	private OrderService orderService;
	


	
	@PostMapping("/order")
	public String orderAdd(@RequestBody Order order) {
		orderService.add(order);
		return "success";
	}
	
	@GetMapping("/order")
	public List<Order> orderList(){
		return orderService.selectAll();
	}
	
	@DeleteMapping("/order/{id}")
	public String orderDelete(@PathVariable int id) {
		orderService.remove(id);
		return "success";
	}
	
	@PutMapping("/order")
	public String orderUpdate(@RequestBody Order order) {
		orderService.modify(order);
		return "success";

	}
	
}
