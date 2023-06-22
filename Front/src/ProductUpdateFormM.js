import { useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {Link,NavLink} from "react-router-dom";

function ProductUpdateFormM(){

  const productState = useLocation();

 const [inputs, setInputs ] = useState(productState.state);

 const handleChange = evnt =>{
  let paramName = evnt.target.name;
  let paramValue = evnt.target.value;

  setInputs(
   values => ({...values,[paramName]:paramValue })
  );
 };

 const handleSubmit = evnt => {
  evnt.preventDefault();
  // alert(JSON.stringify(inputs));

  axios.put('http://localhost:8080/manufacturer/product/update',inputs)
  
  .then(response => {
   alert(response.data);
  })
  .catch(error => {
   alert(error);
  });


 }; 

 return <>


<div>
<nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
     
    <div class="container-fluid">
      <a class="navbar-brand" href="/Admin">Supply Chain</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavLink className="btn btn-outline-light" to="/manufacturer">Home</NavLink>
      </div>
      </nav>
      </div>



 <div class="container mt-3">
  <h2>Product Update Form</h2>
 <form action="" onSubmit={handleSubmit} >
 
 <div class="mb-3 ">
    <label for="id" class="form-label"></label>
  <input type="hidden" name="id" value={inputs.id} required onChange={handleChange} />
 </div>

  <div class="mb-3 ">
    <label for="productName" class="form-label">Product:</label>
  <input type="text" name="productName" value={inputs.productName} onChange={handleChange} />
 </div>


 <div class="mb-3 ">
    <label for="price" class="form-label">Price:</label>
   <input type="text" name="price" value={inputs.price} onChange={handleChange} />
 </div>


 


 <button type="submit" class="btn btn-primary me-md-3 mx-5" >Update</button>
 <Link to="/Manufacturer/manufacturer/product"  ><button class="btn btn-primary me-md-2 ">Product List</button></Link>
 </form>
 </div>
 </>;
};
export default ProductUpdateFormM;