
import { Alert } from 'reactstrap'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Example from './imagepage/example'
export default function (props) {
  return (
    <>
    <div><nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
     
    <div class="container-fluid">
      <a class="navbar-brand" href="/Manufacturer">Supply Chain</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavLink className="btn btn-outline-light" to="adddistributor">Add Distributor</NavLink>
    
      <NavLink className="btn btn-outline-light" to="distributers">Distributor</NavLink>
     
      <NavLink className="btn btn-outline-light" to="addRetailer">Add Retailer</NavLink>
      <NavLink className="btn btn-outline-light" to="retailertable">Retailers</NavLink>

      <NavLink className="btn btn-outline-light" to="order">Orders</NavLink>
      <NavLink className="btn btn-outline-light" to="product">Products</NavLink>
      <NavLink className="btn btn-outline-light" to="manufacturer/add">Add Product</NavLink>
      <NavLink className="btn btn-outline-light" to="/logout">Logout</NavLink>
     
    </div>
  </nav>
  </div>
  <div class="d-flex justify-content-center">
  <Alert color="primary"> {"    "}
 
 <h5 >Manufacturer</h5>
</Alert>
</div>
  <Outlet/>
  <div class="d-flex justify-content-center">
 
</div>
  <Example/>
  <Footer/>
  </>
  )
}
