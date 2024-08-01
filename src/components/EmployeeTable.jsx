import { useState, useEffect } from "react";

function EmployeeTable() {
    const [employees, setEmployees] = useState([]);

       const fetchData = async () => {
        try{
            const response = await fetch('http://localhost:8081/employee/getAll');
                
            const data =await response.json();
            setEmployees(data);
                console.log(employees);
            }catch(error) {
                console.error("Error fetching data :", error);
            }
    };

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div className='table-container'>
            <table width="100%" border="1px">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Surname</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee)=> (
                    <tr key={employee.id}>
                        <td> {employee.id}</td>
                        <td> {employee.firstName}</td>
                        <td> {employee.surname}</td>
                    </tr>
               ))}


                </tbody>

            </table>

        </div>
    )
}
export default EmployeeTable;