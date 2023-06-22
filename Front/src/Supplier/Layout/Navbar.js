import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar,Container } from 'react-bootstrap'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
export default function Navbar () {
  return (
    <div>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/suppliertable">Supplier</Nav.Link>
            <Nav.Link as={Link} to="/addSupplier">Add Suppliers</Nav.Link>
            <Nav.Link as={Link} to="/allparts">Parts</Nav.Link>
            <Nav.Link as={Link} to="/addparts">Add Parts</Nav.Link>
            <Nav.Link as={Link} to="/addparts">Add Parts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
      {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addparts" element={<Addparts />} />
            <Route path="/allparts" element={<Allparts/>} />
            <Route path="/listsuppliers" exact element={<ListsupplyerComponent/>} />
            <Route path="/add-supplier"  element={< createSupplierComponents/>} />
            
          </Routes> */}
      </div>
      </div>
  )
}
