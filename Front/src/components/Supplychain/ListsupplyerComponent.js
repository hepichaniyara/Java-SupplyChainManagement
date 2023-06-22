import React, { Component } from 'react';
import SupplierServices from '../Services/SupplierServices';
import { useNavigate } from 'react-router-dom';
class ListsupplyerComponent extends Component {
    
        constructor(props) {
        super(props)
        this.state = {
        suppliers: [] 
        }
        this.addSupplier=this.addSupplier.bind(this);
    }
    componentDidMount(){
        SupplierServices.getSuppliers().then((res)=>
        {
            this.setState({suppliers:res.data})
        })
    }
    addSupplier(){
        this.context.history.push("/add-supplier")
    }
    
    render() {
        
        return (
            <div>
                  <h2 className="text-center">Suppliers List</h2>
                  <div className = "row">
                    <button className="btn btn-primary" onClick={this.addSupplier}> Add Employee</button>
                 </div>
                 <br></br>
<div className = "row">

<table className = "table table-striped table-bordered">
<thead>
<tr>
<th> supplier_id</th>
<th> phone</th>
<th> Country</th>
<th> email</th>
<th> location</th>
<th>name</th>
<th> part id</th>
<th> part name</th>

</tr>
{/* //101, 88065878, "India", "RAVI@GMAIL.COM", "maharashtra","realb2" , 234, "motherboard" */}
</thead>
<tbody>
    {
        this.state.suppliers.map(
        
suppliers =>
<tr key = {suppliers.id}>
<td> { suppliers.supplier_id} </td>
<td> {suppliers.phone}</td>
<td> {suppliers.country}</td>
<td> {suppliers.email}</td>
<td> {suppliers.location}</td>
<td> {suppliers.name}</td>
<td> {suppliers.part_id}</td>
<td> {suppliers.part_name}</td>
I
</tr>
        )
    }
</tbody>
</table>
</div>
            </div>
        );
    }
    }
    


export default ListsupplyerComponent;