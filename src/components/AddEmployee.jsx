
import { useState } from "react";


const AddEmployee = ({onAddEmployee}) => {
    const [firstname, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
        return (
        <div>
            <form >
                <br></br>
                <br></br>

                <label className="label1">First Name: </label>
                <input
                    className="input1"
                    type="text"
                    required
                    value={firstname}
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