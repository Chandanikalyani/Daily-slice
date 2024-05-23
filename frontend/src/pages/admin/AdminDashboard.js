import React, { useState } from 'react';
import Dashboard from './AdminDash/Components/Dashboard';
import Navbar from './AdminDash/Components/Navbar';
import Sidebar from './AdminDash/Components/Sidebar';
import Footer from './AdminDash/Components/Footer';
import UserTable from './AdminUsers';

function AdminDashboard() {
  const [selectedComponent, setSelectedComponent] = useState('dashboard');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UserTable />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <Sidebar setSelectedComponent={setSelectedComponent} />
          {renderComponent()}
          
        </div>
      </div>
  
    </div>
  );
}

export default AdminDashboard;
