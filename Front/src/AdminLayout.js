import {Link, Outlet} from "react-router-dom";
function AdminLayout(){
return (
 <>
  <ul>
   <li><Link to="/order/list" >order List</Link> </li>
   <li><Link to="/order/add" >order Add</Link> </li>
  </ul>

  <Outlet/>

 </>
);
};
export default AdminLayout;