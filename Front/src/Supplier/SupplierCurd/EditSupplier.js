import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function EditSupplier(props) {
    let navigate = useNavigate();
    const {id}=useParams()
    const [user, setUser] = useState({
       
        supplier_id: "",
        name : "",
        part_id: "",
        part_name: "",
        phone: "",
        email: "",
        location:"",
        country: "",


      });
      const {  name,supplier_id, email,part_id,part_name,phone , location,country} = user;
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      useEffect(()=>{
        loadUser()
      },[])
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9091/supplyarea/suppliers/${id}`, user);
        navigate(`/${props.us}/suppliertable`);
      };
      const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:9091/supplyarea/suppliers/${id}`)
        setUser(result.data)
      }
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Edit Supplier</h2>

        <form onSubmit={(e) => onSubmit(e)}>
        
          
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter  supplier name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="part_id" className="form-label">
              part_id
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Supplier id"
              name="part_id"
              value={part_id}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="part_name" className="form-label">
              Part_Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Part Name"
              name="part_name"
              value={part_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
             phoneNumber
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter phone number Here"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
             Email
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter  Email here"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
           Location
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Location here"
              name="location"
              value={location}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
           Country
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Location here"
              name="country"
              value={country}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link className="btn btn-outline-danger mx-2" to={`/${props.us}/suppliertable`}>
            Cancel
          </Link>
        </form>
      </div>
    </div>
  </div>
  )
}
