
	package com.scm.exception;

	public class DistributorNotFoundException extends RuntimeException {
		
		public DistributorNotFoundException(Long id) {
			super("Could not found the distributor with id" + id);
		}

	}


