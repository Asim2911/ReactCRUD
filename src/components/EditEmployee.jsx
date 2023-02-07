import React, { useState, useEffect } from 'react';
import { Modal, Table, Button } from 'react-bootstrap';

export const EditEmployee = ({ employee, setEmployee, show, handleClose, handleEdit }) => {
  const [currentEmployee, setCurrentEmployee] = useState({});

  useEffect(() => {
    const storedEmployee = JSON.parse(localStorage.getItem(`employee_${employee.id}`));
    if (storedEmployee) {
      setCurrentEmployee(storedEmployee);
    } else {
      setCurrentEmployee({
        name: employee.name,
        email: employee.email,
        address: employee.address,
        phone: employee.phone,
      });
    }
  }, [employee]);

  const handleInputChange = (e) => {
    setCurrentEmployee({
      ...currentEmployee,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make all fields required
    if (!currentEmployee.name || !currentEmployee.email || !currentEmployee.address || !currentEmployee.phone) {
      return alert('All fields are required');
    }
    if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(currentEmployee.email)) {
      return alert('Invalid email format');
    }

    localStorage.setItem(`employee_${employee.id}`, JSON.stringify(currentEmployee));
    setEmployee({
      ...employee,
      ...currentEmployee
    });
    handleClose();
    handleEdit();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name='name'
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              value={currentEmployee.name || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              name='email'
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              value={currentEmployee.email|| ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              name='address'
              className="form-control"
              id="address"
              aria-describedby="emailHelp"
              placeholder="Enter Address"
              value={currentEmployee.address|| ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="phone_number"
              name='phone'
              className="form-control"
              id="phone"
              placeholder="Enter Phone"
              value={currentEmployee.phone|| ''}
              onChange={handleInputChange}
              minLength='10'
              maxLength='10'
              required
            />
          </div>
          <button type="submit" className="btn btn-success mt-4">update Employee</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
      </Modal.Footer>
    </Modal>
  )
}





