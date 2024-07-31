import TaskList from "../components/TaskList";
import '../App.css';


function Tasks() {
    return (
        <div className="body">
            <div className="pagetitle">
                <h1 >TASK MANAGEMENT</h1>
                <h2 > Add and Amend below</h2>
            </div>
            <TaskList />

        </div>
    )
}
export default Tasks;