import React from 'react';
import Dashboard from './AdminDash/Components/Dashboard';
import Navbar from './AdminDash/Components/Navbar';
import Sidebar from './AdminDash/Components/Sidebar';
import Footer from  './AdminDash/Components/Footer'

function AdminDashboard() {
  return (
    <div>
      {/* <Navbar/> */}
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
           
               
             </div>
            </div>  
    </div>
  )
}
export default AdminDashboard