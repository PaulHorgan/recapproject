import '../App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


function EmployeeTaskList() {
    const params = useParams();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8081/employee/get/${params.id}`);
            const data = await response.json();
            setTasks(data.tasks);
            console.log(tasks)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div className='table-container'>
            <table className="table" width="100%" border="1px">
                <thead>
                    <tr>
                        <th>TaskID</th>
                        <th>Task Details</th>
                        <th>Task Progress </th>
                     </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td onClick={()=>navigate('../Tasks/update/' +task.id)} >{task.id}</td>
                            <td onClick={()=>navigate('../Tasks/update/' +task.id)}>{task.taskDetail}    </td>
                            <td onClick={()=>navigate('../Tasks/update/' +task.id)}>{task.progress}    </td>
                            </tr>

                    ))}


                </tbody>

            </table>
        </div>
    )
}
export default EmployeeTaskList;