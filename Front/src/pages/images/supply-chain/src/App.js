import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Distributor from './pages/Distributor';
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
function App() {
  
  
  return (
    
    <div>
      
       
   
      <Router>
     
      
      
      
     
      
      
        <Routes>
       
        <Route exact path="/" element={<HomeNav/>}>
        <Route exact path="/about" element={<Aboutinfo/>}/>
        <Route exact path="/team" element={<Teaminfo/>}/>
        <Route exact path="/contact" element={<Contactinfo/>}/>
        <Route exact path="/help" element={<Helpinfo/>}/>
        <Route exact path="/login" element={<CONFORM/>}/>
        </Route>
        <Route exact path="/nav" element={<Navbar/>}>
       
          <Route  path="adddistributor" element={<AddDistributor />}/>
          <Route exact path="addSupplier" element={<AddSupplier/>}/>
          <Route exact path="suppliertable" element={<SupplierTable/>}/>
          <Route exact path="distributers" element={<Distributor />}/>
          <Route exact path="editdistributor/:id" element={<EditDistributor/>}/>
          <Route exact path="viewdistributor/:id" element={<ViewDistributor/>}/>
          <Route path="editsupplier/:id" element={<EditSupplier/>}/>
          <Route exact path="viewsupplier/:id" element={<ViewSupplier/>}/>
          <Route exact path="viewdistributor/:id" element={<ViewDistributor/>}/>
          
          </Route>
          <Route exact path="/logout" element={<HomeNav/>}/>
          <Route exact path="*" element={<Error/>}/>


        </Routes> 
        
      </Router>
     
     
    </div>
  );
}


export default App;
