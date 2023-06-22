import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <>
    <div><nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
     
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Supply Chain</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavLink className="btn btn-outline-light" to="/nav/adddistributor">Add Distributor</NavLink>
      <NavLink className="btn btn-outline-light" to="/nav/addSupplier">Add Supplier</NavLink>
      <NavLink className="btn btn-outline-light" to="/nav/suppliertable">Supplier</NavLink>
      <NavLink className="btn btn-outline-light" to="/nav/distributers">Distributor</NavLink>
      <NavLink className="btn btn-outline-light" to="/nav/stockdistributer">Stock in Distributer</NavLink>
      <NavLink className="btn btn-outline-light" to="/logout">Logout</NavLink>
      <li
        className="nav-item">
          <Link onClick={props.login}>Login</Link>
      </li>
    </div>
  </nav>
  </div>
  <Outlet/>
  </>
  )
}
