import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Home1 from './images/Home1.jpg'
import logoImage from './images/logoImage.png'
export default function HomeNav() {
  return (
    
    <>
    <div><nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
     
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img class="img-fluid" width={50} height={50} src={logoImage} />5A Supply Chain </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavLink className="btn btn-outline-secondary" to="/login">login</NavLink>
      <NavLink className="btn btn-outline-light" to="/about">about</NavLink>
      <NavLink className="btn btn-outline-light" to="/contact">Contact</NavLink>
      <NavLink className="btn btn-outline-light" to="/team">Team</NavLink>
      <NavLink className="btn btn-outline-light" to="/help">Help</NavLink>

      
      <li
        className="nav-item">
          
      </li>
    </div>
  </nav>
  </div>
  <Outlet/>
  <div>
    <img width={1540} height={700} src={Home1} />
  </div>
  </>
 
  )
}
