package com.scm.service;

import java.util.List;

import com.scm.entity.Retailer;

public interface RetailerService {
	void add(Retailer retailer);
	List<Retailer> selectAll();
	void deleteRetailerById(Integer id);
	void saveOrUpdate(Retailer retailer);
	Retailer getRetailerById(Integer id);

}
