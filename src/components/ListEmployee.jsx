import React, { useState, useEffect } from "react";
import {listEmployees} from "../services/EmployeeService";
//import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function ListEmployee() {
  /*const dumyData = [
        {
            "id": 1,
            "firstName": "Rafael",
            "lastName": "Solza",
            "email": "rafaelz@gmail.com"
        },
        {
            "id": 2,
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "janesmith@gmail.com"
        }
    ]*/

  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    //Ultizando classe
    /*EmployeeService.getEmployees().then((response) => {
      setEmployees(response.data);
    })*/

    //Utilizando função
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch((error) => {
      console.error("Error - " + error);
    });
  }, []);

  const addEmployee = () => {
    navigator("/add-employee");
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addEmployee}>Add Employee</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployee;
