// JavaScript source code
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewSupplier() {
    const {id}=useParams()
    const [user, setUser] = useState({

        supplier_id: "",
        name: "",
        part_id: "",
        part_name: "",
        phone: "",
        email: "",
        location: "",
        country: ""
    });
    
    

    useEffect(() => {
     loadUser( )
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9091/supplyarea/suppliers/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Supplier Details  {user.id}</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of user id : {user.supplier_id}
                            <ul className="list-group list-group-flush">
                            <li className='list-group-item'>
       
       <b>Supplier Name   :</b>
       {user.name}
       </li>
       <li className='list-group-item'>
      
       <b>Part id   :</b>
       {user.part_id}
       </li>
       <li className='list-group-item'>
      
       <b>Part Name:</b>
       {user.part_name}
       </li>
       <li className='list-group-item'>
      
      <b>Phone Number :</b>
      {user.phone}
      </li>
      <li className='list-group-item'>
      
      <b>Email Address</b>
      {user.email}
      </li>
      <li className='list-group-item'>
      
      <b>Location</b>
      {user.location}
      </li>
      <li className='list-group-item'>
      
      <b>Country: </b>
      {user.country}
      </li>

                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2 center" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

