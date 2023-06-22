package com.scm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


	@Entity
	@Table(name = "Product")
	@Data
	
	public class Product {
		@Id
		@GeneratedValue
		@Column(name="id")
		private int id;


		private String productName ;


		private float price;


		
		public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }
		
	
		
		
		public String getProductName() {
	        return productName;
	    }

	    public void setProduct(String productName) {
	        this.productName = productName;
	    }
	    
	    
	    public float getPrice() {
	        return price;
	    }

	    public void setPrice(float price) {
	        this.price = price;
	    }
	    
	  
}
