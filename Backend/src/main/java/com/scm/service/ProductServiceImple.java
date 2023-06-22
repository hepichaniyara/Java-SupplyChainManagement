package com.scm.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scm.dao.ProductDao;
import com.scm.entity.Product;

@Service
public class ProductServiceImple implements ProductService {

	@Autowired
	private ProductDao productDao;
	
	@Override
	public void add(Product product) {
		productDao.save(product);
		
	}

	@Override
	public List<Product> selectAll() {
		
		Iterable<Product> it = productDao.findAll();
		List<Product> lst = new ArrayList<>();
		Iterator<Product> itr = it.iterator();
		while(itr.hasNext()) {
			lst.add(itr.next());
		}
		return lst;
	}

	@Override
	public void deleteProductById(Integer id) {
		productDao.deleteById(id);
		
	}

	@Override
	public void saveOrUpdate(Product product) {
		productDao.save(product);
		
	}

	@Override
	public Product get(int id) {
		Optional<Product> ref = productDao.findById(id);
		Product product = ref.get();
		return product; 
	}

}
