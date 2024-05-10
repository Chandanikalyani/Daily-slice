import React from 'react';
import Dashboard from './UserDash/Components/Dashboard';
import Navbar from './UserDash/Components/Navbar';
import Sidebar from './UserDash/Components/Sidebar';
import Footer from  './UserDash/Components/Footer'

function UserDashboard() {
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
export default UserDashboard
