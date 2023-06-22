import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link , useParams } from 'react-router-dom';
export default function Distributor(props) {


   const [users, setUsers] = useState([]);

   const {id}=useParams()

    useEffect(() => {
            loadUsers();
    },[]);

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:8080/distributor");
        setUsers(result.data);
    };

    const deleteUser = async id => {
      await axios.delete(`http://localhost:8080/distributor/${id}`);
      loadUsers();
    }

  return (
    <div className='container'>
      <div className='py-4'>
      <h2 className='text-center m-3 border shadow bg-light text-dark'>Distributors</h2>
<table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      
      <th scope="col">Parts</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
      users.map((user,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.address}</td>
      
        <td>{user.parts}</td>
        <td>
           <Link className="btn btn-primary mx-2" to={`/${props.us}/viewdistributor/${user.id}`}>View</Link>
            <Link className='btn btn-outline-primary mx-2' to={`/${props.us}/editdistributor/${user.id}`}>Edit</Link>
            <button className='btn btn-danger mx-2'
            onClick={()=>deleteUser(user.id)}
            >Delete</button>
        </td>
      </tr>
      )
      )
    }
   
  </tbody>
</table>   
</div>
    </div>
  )
}
