import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTask (){
    const params = useParams();
    const [ task, setTask] = useState();




    return(
    <div className="body">
        <h1 className="pagetitle">Update Task details for task {params.id} </h1>

    </div>
    )
}