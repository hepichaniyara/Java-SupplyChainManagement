import { useState } from "react";

import React from 'react'
import {Link,NavLink} from "react-router-dom";

import axios from "axios";
function ProductAddForm(){

 const [inputs, setInputs ] = useState({});

 const handleChange = evnt =>{

  let paramName = evnt.target.name;
  let paramValue = evnt.target.value;

  setInputs(
   values => ({...values,[paramName]:paramValue })
  );
 };

 const handleSubmit = evnt => {

  evnt.preventDefault();
  console.log(inputs);
  alert(JSON.stringify( inputs));

  axios.post('http://localhost:8080/product',inputs)
  .then(response => {

    alert("product added!!!");
  })
  .catch(error => {
    alert(error);
  })
 }; 


 



 return <>


<div>
<nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
     
    <div class="container-fluid">
      <a class="navbar-brand" href="/Admin">Supply Chain</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavLink className="btn btn-outline-light" to="/admin">Home</NavLink>
      </div>
      </nav>
      </div>

 <h2>Add Product</h2>

 <form action="" onSubmit={handleSubmit} >



 
 <div class="mb-3 mt-3">
    <label for="productName" class="form-label">Product:</label>
  <input type="text" name="productName" value={inputs.productName} onChange={handleChange} required/>
 </div>


      


 <div class="mb-3 mt-3">
    <label for="price" class="form-label">Price:</label>
   <input type="number" step=".01" name="price" value={inputs.price} onChange={handleChange} required/>
 </div>
 <button class="btn btn-primary me-md-3"  type="submit" >Add</button>
 <Link to="/product" ><button class="btn btn-primary ">Product List</button></Link> 

 </form>
 </>;
};
export default ProductAddForm;