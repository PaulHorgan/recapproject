import TaskList from "../components/TaskList";
import '../App.css';
import AddTask from "../components/AddTask";


function Tasks() {
    return (
        <div className="body">
            <div className="pagetitle">
                <h1 >TASK MANAGEMENT</h1>
                <h2>Please add new Tasks here, or manage tasks below </h2>
                
            </div>
            <AddTask />
            
            <TaskList />

        </div>
    )
}
export default Tasks;