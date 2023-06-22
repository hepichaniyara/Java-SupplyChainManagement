import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 
import Navbar from './components/Navbar';
import Distributor from './pages/Distributor';
import Retailer from './pages/Retailer';
import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import AddDistributor from './distributor/AddDistributor';
import EditDistributor from './distributor/EditDistributor';
import ViewDistributor from './distributor/ViewDistributor';
import AddSupplier from './Supplier/SupplierCurd/AddSupplier';
import SupplierTable from './Supplier/pages/SupplierTable';
import EditSupplier from './Supplier/SupplierCurd/EditSupplier';
import ViewSupplier from './Supplier/SupplierCurd/ViewSupplier';
import CONFORM from './components/login/CONFORM'
import Home from './components/Supplychain/Home'
import Error from './components/Error';
import { Suspense } from 'react';
import HomeNav from './components/login/HomeNav';
import Aboutinfo from './Supplier/Layout/Aboutinfo';
import teaminfo from './Supplier/Layout/teaminfo';
import Teaminfo from './Supplier/Layout/teaminfo';
import Contactinfo from './Supplier/Layout/contactinfo';
import Helpinfo from './Supplier/Layout/helpinfo';

import ToolBar from './Toolb/ToolBar';
import Backdrop from './components/backdrop';
import { useState } from 'react';
import EditUser from './Retailer/EditUser';
import ViewUser from './Retailer/ViewUser'
import AddUser from './Retailer/AddUser';
import ManufacturerNavbar from './pages/manufacturerNavbar';
import Loginmain from './pages/loginmain';
import Distributerlogin from './components/login/distributerLogin';
import Manufacturerlogin from './components/login/manufacturerlogin';
import RetailerNavbar from './pages/retailernav';
import Retailerlogin from './components/login/retailerlogin';
import DistributerNav from './pages/DistributerNav';
import manufacturerNavbar from './pages/manufacturerNavbar';
import ProductAddForm from './ProductAddForm';
import ProductUpdateForm from './ProductUpdateForm';
import ProductList from './ProductList';
import OrderAddForm from './OrderAddForm';
import OrderList from './OrderList';
import Products from './Products';
import ProductAddFormM from './ProductAddFormM';
import ProductListM from './ProductListM';
import ProductUpdateFormM from './ProductUpdateFormM';
import OrderListM from './OrderListM';
import ProductsR from './ProductsR';
import OrderAddFormD from './OrderAddFormD';


function App() {
  const[sidebar, setSidebar] =useState(false);  const togglesidebar = () => { setSidebar((prevState) => !prevState) } 
  let a=manufacturerNavbar;
  return (
    
    <div>
      
   
      <Router>
     
      
      
      
     
      
      
        <Routes>
       
        <Route exact path="/" element={<HomeNav/>}>
        <Route exact path="/about" element={<Aboutinfo/>}/>
        <Route exact path="/team" element={<Teaminfo/>}/>
        <Route exact path="/contact" element={<Contactinfo/>}/>
        <Route exact path="/help" element={<Helpinfo/>}/>
        <Route exact path="/loginmain" element={<Loginmain/>}/>
        <Route exact path="/login" element={<CONFORM/>}/>
        <Route exact path="/Distributerlogin" element={<Distributerlogin/>}/>
        <Route exact path="/Retailerlogin" element={<Retailerlogin/>}/>
        <Route exact path="/manufacturerlogin" element={<Manufacturerlogin/>}/>

        </Route>

        {/* Home page Login */}  admin
        <Route exact path="/Admin" element={<Navbar/>}>
         {a="abc"}
          <Route  path="adddistributor" element={<AddDistributor us='Admin' />}/>
          <Route exact path="addSupplier" element={<AddSupplier us='Admin'/>}/>
          <Route exact path="suppliertable" element={<SupplierTable us='Admin'/>}/>
          <Route  path="distributers" element={<Distributor us='Admin'/>}/>
          <Route exact path="editdistributor/:id" element={<EditDistributor us='Admin'/>}/>
          <Route exact path="viewdistributor/:id" element={<ViewDistributor us='Admin'/>}/>
          <Route path="editsupplier/:id" element={<EditSupplier us='Admin'/>}/>
          
          <Route exact path="viewsupplier/:id" element={<ViewSupplier us='Admin'/>}/>
          <Route exact path="viewdistributor/:id" element={<ViewDistributor us='Admin'/>}/>
          <Route exact path="addRetailer" element={<AddUser us='Admin'/>}/>
          <Route exact path="retailertable" element={<Retailer us='Admin'/>}/>
          <Route exact path="editretailer/:id" element={<EditUser us='Admin'/>}/>
          <Route exact path="viewretailer/:id" element={<ViewUser us='Admin'/>}/>
          
          </Route>



          <Route exact path="/Manufacturer" element={<ManufacturerNavbar/>}>
         
          <Route  path="adddistributor" element={<AddDistributor us= 'Manufacturer'/>}/>
          <Route  path="addSupplier" element={<AddSupplier us= 'Manufacturer'/>}/>
          <Route  path="suppliertable" element={<SupplierTable us= 'Manufacturer'/>}/>
          <Route  path="distributers" element={<Distributor us= 'Manufacturer'/>}/>
          <Route  path="editdistributor/:id" element={<EditDistributor us= 'Manufacturer'/>}/>
          <Route  path="viewdistributor/:id" element={<ViewDistributor us= 'Manufacturer'/>}/>
          <Route path="editsupplier/:id" element={<EditSupplier  us= 'Manufacturer'/>}/>
          
          <Route exact path="viewsupplier/:id" element={<ViewSupplier us= 'Manufacturer'/>}/>
          <Route exact path="viewdistributor/:id" element={<ViewDistributor us= 'Manufacturer'/>}/>
          <Route exact path="addRetailer" element={<AddUser us= 'Manufacturer'/>}/>
          <Route exact path="retailertable" element={<Retailer us= 'Manufacturer'/>}/>
          <Route exact path="editretailer/:id" element={<EditUser us= 'Manufacturer'/>}/>
          <Route exact path="viewretailer/:id" element={<ViewUser us= 'Manufacturer'/>}/>
          
          </Route>
          {/* <Route exact path="/nav/retailertable/nav/viewretailer/:id" element={<EditUser/>}/> */}
          <Route exact path="/logout" element={<HomeNav/>}/>
          <Route exact path="*" element={<Error/>}/>

          <Route exact path="/Distributer" element={<DistributerNav/>}>
        
       <Route  path="adddistributor" element={<AddDistributor us= 'Distributer' />}/>
       <Route exact path="addSupplier" element={<AddSupplier us= 'Distributer'/>}/>
       <Route exact path="suppliertable" element={<SupplierTable us= 'Distributer'/>}/>
       <Route  path="distributers" element={<Distributor us= 'Distributer'/>}/>
       <Route exact path="editdistributor/:id" element={<EditDistributor us= 'Distributer'/>}/>
       <Route exact path="viewdistributor/:id" element={<ViewDistributor us= 'Distributer'/>}/>
       <Route path="editsupplier/:id" element={<EditSupplier us= 'Distributer'/>}/>
       
       <Route exact path="viewsupplier/:id" element={<ViewSupplier us= 'Distributer'/>}/>
       <Route exact path="viewdistributor/:id" element={<ViewDistributor us= 'Distributer'/>}/>
       <Route exact path="addRetailer" element={<AddUser us= 'Distributer'/>}/>
       <Route exact path="retailertable" element={<Retailer us= 'Distributer'/>}/>
       <Route exact path="editretailer/:id" element={<EditUser us= 'Distributer'/>}/>
       <Route exact path="viewretailer/:id" element={<ViewUser us= 'Distributer'/>}/>
       
       </Route>


       <Route exact path="/Retailer" element={<RetailerNavbar/>}>
      
       <Route  path="adddistributor" element={<AddDistributor us= 'Retailer' />}/>
       <Route exact path="addSupplier" element={<AddSupplier us= 'Retailer'/>}/>
       <Route exact path="suppliertable" element={<SupplierTable us= 'Retailer'/>}/>
       <Route exact path="distributers" element={<Distributor us= 'Retailer'/>}/>
       <Route exact path="editdistributor/:id" element={<EditDistributor us= 'Retailer'/>}/>
       <Route exact path="viewdistributor/:id" element={<ViewDistributor us= 'Retailer'/>}/>
       <Route path="editsupplier/:id" element={<EditSupplier us= 'Retailer'/>}/>
       
       <Route exact path="viewsupplier/:id" element={<ViewSupplier us= 'Retailer'/>}/>
       <Route exact path="viewdistributor/:id" element={<ViewDistributor us= 'Retailer'/>}/>
       <Route exact path="addRetailer" element={<AddUser us= 'Retailer'/>}/>
       <Route exact path="retailertable" element={<Retailer us= 'Retailer'/>}/>
       <Route exact path="editretailer/:id" element={<EditUser us= 'Retailer' />}/>
       <Route exact path="viewretailer/:id" element={<ViewUser us= 'Retailer'/>}/>
       
       </Route>
       <Route exact path="/order" element={<OrderList/>}/>
        
          <Route exact path="/product/" element={<ProductList/>}/>
    <Route exact path="/products/" element={<Products/>}/>
    
    <Route exact path="/manufacturer/product/" element={<ProductListM/>}/>
   
    <Route exact path="/Manufacturer/manufacturer/product" element={<ProductListM/>}/>
		<Route exact path="/Manufacturer/manufacturer/add" element={<ProductAddFormM />}/>
		<Route exact path="/Manufacturer/manufacturer/update" element={<ProductUpdateFormM/>}/>
    <Route exact path="/Manufacturer/order" element={<OrderListM/>}/>

    <Route exact path="/admin/order" element={<OrderList/>}/>
         
		<Route exact path="/admin/product/" element={<ProductList/>}/>
 
		<Route exact path="/admin/product/add" element={<ProductAddForm/>}/>
		<Route exact path="/product/update" element={<ProductUpdateForm us ='admin'/>}/>

    <Route exact path="/manufacturer" element={<ManufacturerNavbar/>}/>

    <Route exact path="/retailer/products/" element={<ProductsR/>}/>
    <Route exact path="/Distributer/products/" element={<Products/>}/>

    <Route exact path="/distributer/order/add" element={<OrderAddFormD/>}/>
    <Route exact path="/retailer/order/add" element={<OrderAddForm/>}/>

        </Routes>
        
      </Router>
     
     
    </div>
  );
}


export default App;
