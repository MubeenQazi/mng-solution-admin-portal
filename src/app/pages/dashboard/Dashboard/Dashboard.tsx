import React from 'react';
import {useSelector} from "react-redux";
 const Dashboard = () => {
   const auth =  useSelector((state: any) => state.auth);
    return (
        <div className="App-Dashboard">
            <h1 style={{textTransform: "capitalize"}}>Welcome to Admin Dashboard</h1>
        </div>
    )
}

export default Dashboard
