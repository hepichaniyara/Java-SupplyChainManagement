import React  from "react";
import { List, ListGroup, ListGroupItem } from "reactstrap";
import { NavLink, Outlet, Routes } from "react-router-dom";
import {  Link } from "react-router-dom";
export const Menus=()=>{
    return(
       
       
     
        <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/" > Home</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/allparts"> Allparts</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/addparts">Addparts</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/listsuppliers">Supplier</Link>
      

       </ListGroup>
     
    )
}
export default Menus;