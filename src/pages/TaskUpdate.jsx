import UpdateTask from "../components/UpdateTask"
import { useNavigate, useParams } from "react-router-dom";

function TaskUpdate() {
    const params = useParams();
    return (
        <div className="body">
            <div className="label1">
                <h1 className="pagetitle">Update Task details for task {params.id} </h1>
                <UpdateTask value="params.id" />
            </div>
        </div>
    )
}
export default TaskUpdate;
