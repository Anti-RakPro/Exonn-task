import React from "react";
import { useLocation } from 'react-router-dom';



function Dashboard(){

    const location = useLocation();
    const currentUrl = location.pathname + location.search + location.hash;

    return(
        <div>
            <div>Dashboard</div>
            <div>{currentUrl}</div>
        </div>
    )
}

export default Dashboard