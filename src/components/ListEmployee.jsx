import React, { useState, useEffect } from "react";
import { listEmployees, deleteEmployee } from "../services/EmployeeService";
//import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function ListEmployee() {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    //Ultizando classe
    /*EmployeeService.getEmployees().then((response) => {
      setEmployees(response.data);
    })*/

    //Utilizando função
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
    };

  const addEmployee = () => {
    navigator("/add-employee");
  };

  const updateEmployee = (id) => {
    navigator(`/edit-employee/${id}`);
  };

    const removeEmployee = (id) => {
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch((error) => {
            console.error('Error - ' + error);
        })
    }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button className="btn btn-danger" onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployee;
