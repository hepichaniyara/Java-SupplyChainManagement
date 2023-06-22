package com.scm.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "orders")

public class Order {
	@Id
	@GeneratedValue
	
	private int id;


	private String product ;


	private float price;


	private int quantity;
	
	
	public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }
    
    
    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
    
    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
	
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
	
	
}
