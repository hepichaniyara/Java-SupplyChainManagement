package com.scm.service;

import java.util.List;

import com.scm.entity.Product;

public interface ProductService {

	void add(Product product);
	List<Product> selectAll();
	void deleteProductById(Integer  id);
	void saveOrUpdate(Product product);
	Product get(int id);
	
	
}
