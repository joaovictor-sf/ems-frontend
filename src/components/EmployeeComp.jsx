import React, {useState} from 'react'

function EmployeeComp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const saveEmployee = (e) => {
        e.preventDefault();//Previne o comportamento padrão do formulário

        let employee = {firstName: firstName, lastName: lastName, email: email};
        console.log(employee);
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
                <h2 className='text-center'>Add Employee</h2>
                <div className="card-body">
                    <form action="">
                        <div className="form-group mb-2">
                            <label htmlFor="" className='form-label'>Employee First Name:</label>
                            <input 
                            type="text" 
                            className='form-control' 
                            name='firstName' 
                            placeholder='Enter Employee first name' 
                            value={firstName} 
                            onChange={(event) =>
                                setFirstName(event.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="" className='form-label'>Employee Last Name:</label>
                            <input
                            type="text"
                            className='form-control'
                            name='lastName'
                            placeholder='Enter Employee last name'
                            value={lastName}
                            onChange={(event) => 
                                setLastName(event.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="" className='form-label'>Employee Email:</label>
                            <input
                            type="email"
                            className='form-control'
                            name='email'
                            placeholder='Enter Employee email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComp