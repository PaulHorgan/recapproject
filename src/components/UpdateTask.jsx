import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";


function UpdateTask() {
    const navigate = useNavigate();
    const params = useParams();
    const [id, setId] = useState("");
    const [tasks, setTasks] = useState("")
    const [taskDetail, setTaskDetail] = useState('');
    const [progress, setProgress] = useState('');
    const [employee, setEmployee] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            employee: { id: employee },
            id, taskDetail, progress
        };
        axios.patch(`http://localhost:8081/tasks/update/${params.id}`, task)
            .then(() =>
                alert("Task updated")
            ).catch(err => {
                console.error("Error updating :", err);
            });
    };

    useEffect(() => {
        axios.get("http://localhost:8081/task/get/" + params.id).then(res => {
            console.log(res);
            setProgress(res.data.progress);
            setTaskDetail(res.data.taskDetail)

        }).catch(err => console.log(err));
    }, []);


    return (

        <div className="body">
            <h1>Please use this section to update tasks</h1>
            <h2>Any fields left blank will remain blank</h2>
            <h2>You can assign to an employee from here too</h2>
            <form onSubmit={handleSubmit}>
                <label> Task Details </label>
                <input classname="input1"
                    type="text"
                    value={taskDetail}
                    onChange={(e) => setTaskDetail(e.target.value)}
                /><br></br>
                <label> Progress </label>
                <input classname="input1"
                    type="text"
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                /><br></br>
                <label> Assign to Employee </label>
                <input classname="input1"
                    type="number"

                />
                <button className="button1"> Update Task</button>
            </form>

        </div>
    )
}



export default UpdateTask;