
import { useState } from "react";


const AddTask = () => {
    const [taskDetail, setTaskDetail] = useState('');
    const [progress, setProgress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { taskDetail, progress};
        fetch('http://localhost:8081/tasks/add', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        });
        setTaskDetail("");
        setProgress("");
    }


    return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <br></br>
                <br></br>

                <label className="label1">New Task Details </label>
                <input
                    className="input1"
                    type="text"
                    required
                    value={taskDetail}
                    onChange={(e) => setTaskDetail(e.target.value)}
                />
                <br></br>
                <br></br>

                <label className="label1">This will be flagged as unplanned. Visit the tasks page to assign this task and update </label>
        
                <br></br>
                <br></br>
                <button className="button1"> Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;