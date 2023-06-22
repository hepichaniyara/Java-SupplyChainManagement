import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import React from 'react'
import { Link,NavLink } from "react-router-dom";
import axios from "axios";
import ProductList from "./ProductList";
function OrderAddForm(){

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
  alert(JSON.stringify(inputs));

  axios.post('http://localhost:8080/order',inputs)
  .then(response => {
    alert(response.data);
  })
  .catch(error => {
    alert(error);
  })
 }; 


 
 const [respData, setRespData] = useState([]);

 const productList = () => {
     axios.get('http://localhost:8080/product')
     .then(respons => {
         setRespData(respons.data);
     })
 .catch(error=>{
     alert(error);
 });
};

 useEffect( ()=>{
     productList();
 },[]);



 return <>

<div >

<nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
     
    <div class="container-fluid">
      <a class="navbar-brand" href="/Admin">Supply Chain</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavLink className="btn btn-outline-light" to="/retailer/">Home</NavLink>
      </div>
      </nav>



 <h2>Add Order</h2>

 <form action="" onSubmit={handleSubmit} >


 

 <label>Product:</label>
  <select name="product" value={inputs.product}  onChange={handleChange} >
 <option >--select--</option>
{
  respData.map((option,index)=>(
    <option key={index} value={option.value}>{option.productName}</option>
  ))
}  </select>


 <div>
  <label>Quantity:</label>
  <input type="number" name="quantity" value={inputs.quantity} onChange={handleChange} required/>
 </div>
 
 
 <Button type="submit" >Add</Button> <Link to="/Retailer" ><button class="btn btn-primary my-3 "> Home</button></Link>
 </form>

</div>



  
 </>;
};
export default OrderAddForm;
