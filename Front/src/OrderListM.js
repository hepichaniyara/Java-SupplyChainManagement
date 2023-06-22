import axios from "axios";
import { useEffect, useState } from "react";
import {Link,NavLink} from "react-router-dom";
function OrderListM(){

 const [responseData, setResponseData] = useState([]);

 const orderList = () => {
  axios.get('http://localhost:8080/order')
  .then(response =>{
   setResponseData(response.data);
  } )
  .catch(error => {
   alert(error);
  });
 };


 useEffect( ()=>{

  orderList();

 },[]);


 
 const [disable, setDisable] = useState(false);
 const [show, setShow] = useState(true);
 

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
  <h2>order Information</h2>

  <table class="table table-striped">
  <thead>
   <tr>
   <th>Order Id</th>
    <th>Product Name</th>
    <th>Quantity</th>
    <th>Status</th>
  
   </tr>
  </thead>
  <tbody>
   {
    responseData.map(
     val => <tr key="{val.id}" >
     
       <td>{val.id}</td>
      <td>{val.product}</td>
      <td>{val.quantity}</td>








 {/* <button disabled={disable} onClick={() => setDisable(true)}>
     Accept
    </button> */}


<td>
  {show ?"Not Accepted":"Accepted"}
</td>
     </tr>
    )
   }
  </tbody>
 </table>
 <button disabled={disable} onClick={  ()=>{ setShow(!show); setDisable(true)}  }>Accept All</button>
 </div>
 </>;
};

export default OrderListM;