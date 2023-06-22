package com.scm.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.scm.entity.Product;
import com.scm.service.ProductService;


@RestController
@CrossOrigin("http://localhost:3000/")
public class ProductController {

	@Autowired
	private ProductService productService ;
	
	
	@PostMapping("/product")
	public String productAdd(@RequestBody Product product) {
		productService.add(product);
		return "success";
	}
	
	@GetMapping("/product")
	public List<Product> productList(){
		return productService.selectAll();
	}
	
	@DeleteMapping("/product/{id}")
	public String deleteProduct(@PathVariable Integer id) {
		productService.deleteProductById(id);
		return "success";
	}
	
	@PutMapping("/product")
	public String productUpdate(@RequestBody Product product) {
		productService.saveOrUpdate(product);
		return "success";

	}
	
	
}
