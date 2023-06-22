
import { Alert } from 'reactstrap'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Example from './imagepage/example'
export default function RetailerNavbar(props) {
  return (
    <>
    <div><nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
     
    <div class="container-fluid">
      <a class="navbar-brand" href="/Retailer">Supply Chain</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
      {/* <NavLink className="btn btn-outline-light" to="/nav/addSupplier">Add Supplier</NavLink> */}
     
      {/* <NavLink className="btn btn-outline-light" to="/nav/stockdistributer">Stock in Distributer</NavLink> */}
      
    

      <NavLink className="btn btn-outline-light" to="/retailer/products">View Products </NavLink>
      <NavLink className="btn btn-outline-light" to="/retailer/order/add">Add Order </NavLink>

      <NavLink className="btn btn-outline-light" to="/logout">Logout</NavLink>
    
     
     
    </div>
  </nav>
  </div>
  <div class="d-flex justify-content-center">
 
</div>
  <Outlet/>
  <div class="d-flex justify-content-center">

</div>
  <Example/>
  <Footer/>
  </>
  )
}
