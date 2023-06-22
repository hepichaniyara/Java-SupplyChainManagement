import axios from "axios";
import { useEffect, useState } from "react";
import {Link,NavLink} from "react-router-dom";


function Products(){

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


  

return<>

<div>
<nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
     
    <div class="container-fluid">
      <a class="navbar-brand" href="/Admin">Supply Chain</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavLink className="btn btn-outline-light" to="/distributer/">Home</NavLink>
      </div>
      </nav>
      </div>

<div class="container mt-3 mb-3">
  <h2>Product Information</h2>
            
<table class="table table-striped " >
  <thead>
   <tr>
    <th>Product</th>
    <th>Price</th>
    <th></th>
    
   </tr>
  </thead>
  <tbody>
   {
    respData.map(
     val => <tr key="{val.id}"  >
      <td>{val.productName}</td>
      <td>Rs {val.price}</td>

     

     </tr>
    )
   }
  </tbody>
 </table>
 </div>

</>
}

export default Products;