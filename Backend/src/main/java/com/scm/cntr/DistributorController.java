package com.scm.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.scm.dao.DistributorDao;
import com.scm.entity.Distributor;
import com.scm.exception.DistributorNotFoundException;

@RestController
@CrossOrigin("http://localhost:3000")
public class DistributorController {
	
	@Autowired
	private DistributorDao distributordao; 
	
	@PostMapping("/distributor")
	Distributor newDistributor(@RequestBody Distributor newDistributor) {
		return distributordao.save(newDistributor);
	}
	
	@GetMapping("/distributor")
	List<Distributor> getAllDistributors(){
		return distributordao.findAll();
		
		
	}
	
	@GetMapping("/distributor/{id}")
	Distributor getDistributorById(@PathVariable Long id) {
		return distributordao.findById(id)
		         .orElseThrow(()->new DistributorNotFoundException(id));
		
	}
	/*
	@PutMapping("/distributor/{id}")
	Distributor updateDistributor(@RequestBody Distributor newDistributor, @PathVariable Long id) {
		return mydao.findById(id)
				
	}
	*/
	// update  using PUT request
//		@PutMapping("/distributor/{id}")
//	   Distributor updateDistributor(@RequestBody Distributor newDistributor,@PathVariable Long id) {
//		return (this.distributordao.findById(id)
//				.map(distributor -> {
//					distributor.setName(newDistributor.getName());
//					distributor.setEmail(newDistributor.getEmail());
//					distributor.setAddress(newDistributor.getAddress());
//					distributor.setPhoneNo(newDistributor.getPhoneNo());
//					distributor.setParts(newDistributor.getParts());
//					return distributordao.save(distributor);
//				}).
//				orElseThrow(()->new  DistributorNotFoundException());
//		}
		
		
		@DeleteMapping("/distributor/{id}")
		String deleteDistributor(@PathVariable Long id) {
			distributordao.deleteById(id);
			return "distributor with id" +" "+ id +" " +" has been deleted successfully";
		}
		
	
	
	
	
	
	
	
	
	
	
}
