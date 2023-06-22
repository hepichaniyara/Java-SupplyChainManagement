import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate ,useParams} from "react-router-dom";
export default function EditDistributor() { 

    let navigate=useNavigate();

    const {id}=useParams()

    const [user,setUser]=useState({
        name:"",
        email:"",
        address:"",
        phoneNo:"",
        parts:""
    })

    const{name,email,address,phoneNo,parts}=user

    const onInputChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }


    useEffect(()=>{
      loadUser()
    },[]);

    const onSubmit=async (e)=>{
        e.preventDefault();
         await axios.put(`http://localhost:9091/distributor/${id}`,user)
         navigate("/")
    }

    const loadUser =async () => {
      const result= await axios.get(`http://localhost:9091/distributor/${id} `)
      setUser(result.data)
    };

  return (
    <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
           <h2 className='text-center m-4 border shadow bg-light text-dark'>Edit Distributor</h2>

           <form onSubmit={(e)=>onSubmit(e)}>
           <div className='mb-3'>
              <lable htmlFor='Name'  className='form-lable'>
                 Name
              </lable>

              <input
               type={"text"}
               className="form-control"
               placeholder="Enter your name"
               name="name"
               value={name}
               onChange={(e)=>onInputChange(e)}/>
           </div>
           <div className='mb-3'>
              <lable htmlFor='Email'  className='form-lable'>
                 Email
              </lable>

              <input
               type={"text"}
               className="form-control"
               placeholder="Enter your email"
               name="email"
               value={email}
               onChange={(e)=>onInputChange(e)}/>
           </div>
           <div className='mb-3'>
              <lable htmlFor='Address'  className='form-lable'>
                 Address
              </lable>

              <input
               type={"text"}
               className="form-control"
               placeholder="Enter your address"
               name="address"
               value={address}
               onChange={(e)=>onInputChange(e)}/>
           </div>
           <div className='mb-3'>
              <lable htmlFor='Phone No'  className='form-lable'>
                 Phone No
              </lable>

              <input
               type={"text"}
               className="form-control"
               placeholder="Enter your phone no"
               name="phoneNo"
               value={phoneNo}
               onChange={(e)=>onInputChange(e)}/>
           </div>
           <div className='mb-3'>
              <lable htmlFor='Parts'  className='form-lable'>
                 Parts
              </lable>

              <input
               type={"text"}
               className="form-control"
               placeholder="Enter your parts name"
               name="parts"
               value={parts}
               onChange={(e)=>onInputChange(e)}/>
           </div>
           <button type="submit" className="btn btn-outline-primary " > Submit </button>
           <Link  className="btn btn-outline-danger mx-2 " to="/" > Cancle </Link>
           </form>
        </div>
        
    </div>
  )
}
