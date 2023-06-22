package com.scm.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scm.dao.RetailerDao;
import com.scm.entity.Retailer;
@Service
public class RetailerServiceImple implements RetailerService{
	@Autowired
	private RetailerDao retailerDao;

	@Override
	public void add(Retailer retailer) {
		retailerDao.save(retailer);
		
	}

	@Override
	public List<Retailer> selectAll() {
		Iterable<Retailer> it = retailerDao.findAll();
		List<Retailer> lst = new ArrayList<>();
		Iterator<Retailer> itr = it.iterator();
		while(itr.hasNext()) {
			lst.add(itr.next());
		}
		return lst;
		
	}

	@Override
	public void deleteRetailerById(Integer id) {
		retailerDao.deleteById(id);
		
	}

	@Override
	public void saveOrUpdate(Retailer retailer) {
		retailerDao.save(retailer);
		
	}

	@Override
	public Retailer getRetailerById(Integer id) {
		 
		
		return retailerDao.findById(id).get();  
		}  
		
	

	

}