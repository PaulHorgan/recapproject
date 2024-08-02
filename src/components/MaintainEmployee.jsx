import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";


const MaintainEmployee = () => {
    const params = useParams();
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { id, firstName, surname };
        axios.patch(`http://localhost:8081/employee/update/${params.id}`, user)
        .then (() => 
        alert("Employee updated")        
    ).catch(err =>{
        console.error ("Error updating :" ,  err);
    });          
        };

    

    useEffect(() => {
        axios.get("http://localhost:8081/employee/get/" + params.id).then(res => {
            console.log(res);          
            setId(res.data.id);
            setFirstName(res.data.firstName);
            setSurname(res.data.surname);

        }).catch(err => console.log(err));
    }, []);
   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br></br>
                <br></br>
                <label className="label1">Employee Id = {params.id}</label>
                <br></br>                <label className="label1">First Name: </label>
                <input
                    className="input1"
                    type="text"
                    
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br></br>
                <br></br>

                <label className="label1">Surname: </label>
                <input
                    className="input1"
                    type="text"
                    required
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
                <br></br>
                <br></br>
                <button className="button1"> Update Employee</button>
            </form>
        </div>
    );
};

export default MaintainEmployee;