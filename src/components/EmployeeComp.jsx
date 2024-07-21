import React, {useEffect, useState} from 'react'
import {createEmployee, getEmployeeById, updateEmployee} from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeComp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        if(id){
            getEmployeeById(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch((error) => {
                console.error('Error - ' + error);
            })
        }
    }, [id])

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const saveEmployee = (e) => {
        e.preventDefault();//Previne o comportamento padrão do formulário

        let employee = {firstName: firstName, lastName: lastName, email: email};
        console.log(employee);

        if(validate()){

            if(id){
                updateEmployee(employee, id).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch((error) => {
                    console.error('Error - ' + error);
                })
            }else{
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch((error) => {
                    console.error('Error - ' + error);
                })
            }
        }
    }

    const validate = () => {
        let isValid = true;

        const errorsCopy = {... errors};

        if(firstName.trim()){//trim() remove os espaços em branco do início e do fim da string. Se o campo estiver vazio, o método trim() retornará false
            errorsCopy.firstName = '';
        }else{
            errorsCopy.firstName = 'First name is required';
            isValid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            isValid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            isValid = false;
        }

        setErrors(errorsCopy);

        return isValid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center mt-2'>Update Employee</h2>
        }else{
            return <h2 className='text-center mt-2'>Add Employee</h2>
        }
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
                {
                    pageTitle()
                }
                <div className="card-body">
                    <form action="">
                        <div className="form-group mb-2">
                            <label htmlFor="" className='form-label'>Employee First Name:</label>
                            <input 
                                type="text" 
                                className={
                                    `form-control ${errors.firstName ? 'is-invalid' : ''}`
                                } 
                                name='firstName' 
                                placeholder='Enter Employee first name' 
                                value={firstName} 
                                onChange={(event) =>
                                    setFirstName(event.target.value)}
                            />
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="" className='form-label'>Employee Last Name:</label>
                            <input
                                type="text"
                                className={
                                    `form-control ${errors.lastName ? 'is-invalid' : ''}`
                                }
                                name='lastName'
                                placeholder='Enter Employee last name'
                                value={lastName}
                                onChange={(event) => 
                                    setLastName(event.target.value)}
                            />
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="" className='form-label'>Employee Email:</label>
                            <input
                                type="email"
                                className={
                                    `form-control ${errors.email ? 'is-invalid' : ''}`
                                }
                                name='email'
                                placeholder='Enter Employee email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
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