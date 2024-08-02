
import AddEmployee from "../components/AddEmployee.jsx";
import { React, useState, useEffect } from 'react';
import EmployeeTable from "../components/EmployeeTable.jsx";


function Employee() {


    return (
        <div className="body">
          
            <h1 className="pagetitle">Employee Lists and New Employees</h1>
            <AddEmployee />
            <EmployeeTable />

            <div className="table">

            </div>
        </div>
    )
}
export default Employee;