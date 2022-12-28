import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import React from 'react';

const FacultyDashboard = () => {
    let { id } = useParams();
  
    return (
        <div>
            <SideBar id={id}/>
            Faculty Id: {id}
        </div>
    )
}

export default FacultyDashboard