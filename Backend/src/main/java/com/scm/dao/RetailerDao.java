package com.scm.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.scm.entity.Retailer;

@Repository
public interface RetailerDao extends CrudRepository<Retailer, Integer>{
	
}