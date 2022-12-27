import {useParams} from "react-router-dom";
import React from 'react';

const StudentDashboard = () => {
    let { id } = useParams();
  
    return (
        <div>
            Student Id: {id} 
        </div>
    )
}

export default StudentDashboard