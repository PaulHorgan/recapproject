import '../App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function TaskList() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8081/tasks/getAll');
            const data = await response.json();
            setTasks(data);
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
                        <th>Update Task</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.taskDetail}    </td>
                            <td>{task.progress}    </td>
                            <td><button onClick={navigate('../Tasks/update/' +task.id)}>Update Task</button></td>
                        </tr>

                    ))}


                </tbody>

            </table>
        </div>
    )
}
export default TaskList;