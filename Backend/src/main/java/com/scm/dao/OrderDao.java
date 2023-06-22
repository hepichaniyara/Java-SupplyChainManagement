package com.scm.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.scm.entity.Order;


@Repository
public interface OrderDao extends CrudRepository<Order, Integer> {

	
}

	

