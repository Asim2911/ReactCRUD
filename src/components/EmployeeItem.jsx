import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { EditEmployee } from './EditEmployee'

export const EmployeeItem = () => {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || []);
  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});

 
  const handleShow = () => setShow(true);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setShowEditModal(true);
  };

  const handleClose = () => {
    setShowEditModal(false);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === updatedEmployee.id) {
        return updatedEmployee;
      }
      return employee;
    });
    setEmployees(updatedEmployees);
    handleClose();
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const handleDelete = (employee) => {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees = employees.filter(emp => emp.email !== employee.email);
    localStorage.setItem('employees', JSON.stringify(employees));
    setEmployees(employees);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td>{employee.phone}</td>
              <td>
                <FontAwesomeIcon icon={faEdit} className="mx-2" onClick={() => handleEdit(employee)} />
                <FontAwesomeIcon icon={faTrash} className="mx-2" onClick={() => handleDelete(employee)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditEmployee
        employee={selectedEmployee}
        show={showEditModal}
        handleClose={handleClose}
        handleEdit={handleUpdateEmployee}
      />
    </>
  );
};
