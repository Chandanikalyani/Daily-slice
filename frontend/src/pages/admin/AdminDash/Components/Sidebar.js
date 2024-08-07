import React from 'react'
import { TbTableShortcut } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { GiFireplace } from "react-icons/gi";
import { LuPackagePlus } from "react-icons/lu";
import { FaSitemap } from "react-icons/fa6";
const Sidebar = () => {
    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>&nbsp; &nbsp;&nbsp;&nbsp; Admin</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Dashboard</span></a></li>
                <li class="nav-item mb-2">
                    {/* <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far font-weight-bold"></i> <span className="ml-3"><TbReportSearch />&nbsp; &nbsp; Reports</span></a> */}
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""><i class="fas fa-book-reader"></i> Data Report </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> File Report </a></li>
                    </ul>
                </li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/admin/adminuserstable"><i class="far font-weight-bold"></i> <span className="ml-3"><FaUsers />&nbsp; &nbsp;Users</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/admin/adminreservationtable"><i class="far font-weight-bold"></i> <span className="ml-3"><FaCalendarAlt />&nbsp; &nbsp;Reservation</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/admin/adminplacetable"><i class="fas font-weight-bold"></i><span className="ml-3"><GiFireplace /> &nbsp; &nbsp;Places</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/admin/adminoffertable"><i class="fas font-weight-bold"></i><span className="ml-3"><MdDiscount />&nbsp; &nbsp;Offer</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/admin/adminpackagetable"><i class="fas font-weight-bold"></i> <span className="ml-3"><LuPackagePlus />&nbsp; &nbsp;Package</span></a></li>
                                
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/admin/adminitemtable"><i class="far font-weight-bold"></i> <span className="ml-3"><FaSitemap />&nbsp; &nbsp;</span>Item</a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far font-weight-bold"></i> <span className="ml-3"></span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far font-weight-bold"></i> <span className="ml-3"></span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far font-weight-bold"></i> <span className="ml-3"></span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far font-weight-bold"></i> <span className="ml-3"></span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far font-weight-bold"></i> <span className="ml-3"></span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"></a></li>
            </ul>
            
       </div>
    )
}
export default Sidebar