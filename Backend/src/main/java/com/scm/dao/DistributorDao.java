package com.scm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scm.entity.Distributor;

public interface DistributorDao extends JpaRepository<Distributor,Long>{
	

}
