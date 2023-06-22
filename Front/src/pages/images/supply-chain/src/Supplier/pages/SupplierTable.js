import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
export default function SupplierTable() {
    const [users,setuser]=useState([]);
    const {id}= useParams()
    useEffect(()=>{
loadSuppliers()
    },[])
    const loadSuppliers=async()=>{
        const result=await axios.get('http://localhost:9091/supplyarea/suppliers')
        setuser(result.data)
    }
    const deleteSupplier=async (id)=>{
      await axios.delete(`http://localhost:9091/supplyarea/supplier/${id}`)
      loadSuppliers()
    }
  return (
    <div className='container'>
    <div className='py-4'>SupplierTable
    <table className="table table table-bordered border ">
   < tr>
   <th>Sr</th>
<th scope="col"> supplier_id</th>
<th scope="col"> Phone</th>
<th scope="col"> Country</th>
<th scope="col"> email</th>
<th scope="col"> location</th>
<th scope="col">Name</th>
<th scope="col"> part id</th>
<th scope="col"> part name</th>
{/* <th scope="col">Action</th>
<th scope="col">Action2</th> */}
</tr>
  <tbody>
    {users.map((user,index)=>(
        
        
<tr> 
    <td scope='row' key={index}>{index+1}</td>
<td> { user.supplier_id} </td>
<td> {user.phone}</td>
<td> {user.country}</td>
<td> {user.email}</td>
<td> {user.location}</td>
<td> {user.name}</td>
<td> {user.part_id}</td>
<td> {user.part_name}</td>

{/* <td> 180</td>
<td> 777</td>
<td> India</td>
<td> abcking@gmail.com</td>
<td>Mahaashtra</td>
<td> Redmi</td>
<td> 123</td>
<td> 678</td> */}


<td>
    <Link className="btn btn-primary mx-2"
   to={`/viewsupplier/${user.supplier_id}`}
    > View</Link>

    <Link className="btn btn-outline-primary mx-2" 
    to={`/editsupplier/${user.supplier_id}`}      
    >Edit </Link>

    <button className="btn btn-danger mx-2"
    onClick={()=>deleteSupplier(user.supplier_id)}>Delete </button>
</td>
</tr>

    ))}
    
     
  </tbody>
</table>
</div>
</div>
  )
}
