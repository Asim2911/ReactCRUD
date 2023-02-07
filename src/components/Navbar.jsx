import React from 'react'
import { useState } from 'react';
import { EmployeeForm } from './EmployeeForm';
// import { Button, Modal } from 'react-bootstrap';

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#!">Employee Management CRUD</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto"></ul>
              <button type="button" className="btn btn-primary" onClick={handleShow}>Add Employee</button>
            </div>
          </div>
        </nav>
        <EmployeeForm show={show} handleClose={handleClose} />
      </>
    )
}

