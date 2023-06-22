import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Footer from '../pages/footer/Footer'
import { Alert } from 'reactstrap'
import Example from '../pages/imagepage/example'
export default function NavBar(props) {
  return (
    <>
    <div><nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
     
    <div class="container-fluid">
      <a class="navbar-brand" href="/Admin">Supply Chain</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavLink className="btn btn-outline-light" to="adddistributor">Add Distributor</NavLink>
      <NavLink className="btn btn-outline-light" to="addSupplier">Add Supplier</NavLink>
      <NavLink className="btn btn-outline-light" to="addRetailer">Add Retailer</NavLink>
      <NavLink className="btn btn-outline-light" to="suppliertable">Supplier</NavLink>
      <NavLink className="btn btn-outline-light" to="distributers">Distributor</NavLink>
      <NavLink className="btn btn-outline-light" to="retailertable">Retailers</NavLink>

      <NavLink className="btn btn-outline-light" to="order">Orders</NavLink>
      <NavLink className="btn btn-outline-light" to="product">Products</NavLink>
      <NavLink className="btn btn-outline-light" to="product/add">Add Product</NavLink>

      <NavLink className="btn btn-outline-light" to="/logout">Logout</NavLink>
     
    </div>
  </nav>
  </div>
  <div class="d-flex justify-content-center">
  <Alert color="primary"> {"    "}
 
 <h5 > Admin</h5>
</Alert>
</div>
  <Outlet/>
  <Example/>
  <br/> <br/><br/>
  <Footer/>
  </>
  )
}
