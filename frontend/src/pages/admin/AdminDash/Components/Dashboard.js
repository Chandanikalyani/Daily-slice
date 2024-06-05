import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart';
import UserTable from '../../AdminUsers'; // Ensure the correct path to UserTable

const Dashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [showUserTable, setShowUserTable] = useState(false);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/users');
                setUserCount(response.data.length); // Assuming the response data is an array of users
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchUserCount();
    }, []);

    const toggleUserTable = () => {
        setShowUserTable(!showUserTable);
    };

    return (
        <div className="col main">
            <div className="row mb-3">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100" onClick={toggleUserTable}>
                        <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                            <div className="rotate">
                                <i className="fa fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Users</h6>
                            <h1 className="display-4">{userCount}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Feedback</h6>
                            <h1 className="display-4">5</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fa fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Items</h6>
                            <h1 className="display-4">125</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Places</h6>
                            <h1 className="display-4">3</h1>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div style={{background:"#f1c40f", width:"500px"}}> 
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    width={500}
                    height={300}
                />
            </div>
            {showUserTable && <UserTable />}
        </div>
    );
};

export default Dashboard;
