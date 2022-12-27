import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import React from 'react';

const FacultyDashboard = () => {
    let { id } = useParams();
  
    return (
        <div>
            Faculty Id: {id} 
        </div>
    )
}

export default FacultyDashboard