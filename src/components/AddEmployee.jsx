
import { useState } from "react";


const AddEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { firstName, surname };
        fetch('http://localhost:8081/employee/add', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        setFirstName("");
        setSurname("");
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br></br>
                <br></br>

                <label className="label1">First Name: </label>
                <input
                    className="input1"
                    type="text"
                    required
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
                <button className="button1"> Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;