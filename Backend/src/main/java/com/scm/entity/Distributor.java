package com.scm.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;

@Entity
public class Distributor {
	
	
	@Id
    @GeneratedValue
	private Long Id;
	public Distributor() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	private String Name;
	private String Email;
	private String PhoneNo;
	@Override
	public String toString() {
		return "Distributor [Id=" + Id + ", Name=" + Name + ", Email=" + Email + ", PhoneNo=" + PhoneNo + ", Address="
				+ Address + ", Parts=" + Parts + "]";
	}
	public String getPhoneNo() {
		return PhoneNo;
	}
	public void setPhoneNo(String PhoneNo) {
		String phoneNo = null;
		PhoneNo = phoneNo;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getParts() {
		return Parts;
	}
	public Distributor(Long id, String name, String email, String PhoneNo, String address, String parts) {
		super();
		Id = id;
		Name = name;
		Email = email;
		String phoneNo = null;
		PhoneNo = phoneNo;
		Address = address;
		Parts = parts;
	}
	public void setParts(String parts) {
		Parts = parts;
	}
	private String Address;
	private String Parts;
	
	
	
	
	

}
