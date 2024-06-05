import { useEffect, useState } from 'react';
import PieChart from './PieChart';

const Dashboard = () => {
   const [record, setRecord] = useState([]);

   const getData = () => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(res => setRecord(res));
   };

   useEffect(() => {
      getData();
   }, []);

    return (
        <div className="col main" style={{marginLeft:"90px",marginTop:"50px"}}>
            <div className="row mb-3" >
                <div className="col-xl-6 col-sm-12 py-2" style={{marginBottom:"50px"}}>
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                            <div className="rotate">
                                <i className="fa  fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Users</h6>
                            <h1 className="display-4">7</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-sm-12 py-2" style={{marginBottom:"50px"}}>
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa  fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Feedback</h6>
                            <h1 className="display-4">5</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-sm-12 py-2" style={{marginBottom:"50px"}}>
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fab  fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Items</h6>
                            <h1 className="display-4">125</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-sm-12 py-2" style={{marginBottom:"50px"}}>
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa  fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Places</h6>
                            <h1 className="display-4">3</h1>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Dashboard;
