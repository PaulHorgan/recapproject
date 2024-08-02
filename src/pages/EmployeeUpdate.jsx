

import { React, useState, useEffect } from 'react';
import MaintainEmployee from '../components/MaintainEmployee';

import EmployeeTaskList from '../components/EmployeeTaskList';


function EmployeeUpdate() {
    

    return (
        
        <div className="body">
          
            <h1 className="pagetitle">Employee UPDATES </h1>
            <MaintainEmployee value="employee.id" />
            <EmployeeTaskList />
            <div className="table">

            </div>
        </div>
    )
}
export default EmployeeUpdate;