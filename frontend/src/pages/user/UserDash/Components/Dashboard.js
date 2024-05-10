import {useEffect,useState} from 'react';
import PieChart from './PieChart';
const Dashboard = () => {
  
   const[record,setRecord] = useState([])
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
   useEffect(() => {
      getData();
   },)
   
    return (
    <div class="col main ">
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Users</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Posts</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Tweets</h6>
                        <h1 class="display-4">125</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Shares</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </div>
    )
}
export default Dashboard