// import React, { useState } from 'react';
// import { Modal, Table, Button } from 'react-bootstrap';

// export const nouse = ({ index, show, handleClose, handleEdit }) => {
//   const [currentEmployee, setCurrentEmployee] = useState({
//     name: '',
//     email: '',
//     address: '',
//     phone: '',
//   });

//   const employees = JSON.parse(localStorage.getItem('employees')) || [];
//   const employee = employees[index];
//   useEffect(() => {
//     setCurrentEmployee({
//       name: employee.name,
//       email: employee.email,
//       address: employee.address,
//       phone: employee.phone,
//     });
//   }, [employee]);

//   const handleInputChange = (e) => {
//     setCurrentEmployee({
//       ...currentEmployee,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // make all fields required
//     if (!currentEmployee.name || !currentEmployee.email || !currentEmployee.address || !currentEmployee.phone) {
//       return alert('All fields are required');
//     }
//     if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(currentEmployee.email)) {
//       return alert('Invalid email format');
//     }

//     employees[index] = {
//       ...employee,
//       ...currentEmployee
//     };
//     localStorage.setItem('employees', JSON.stringify(employees));
//     handleClose();
//     handleEdit();
//   };

//   return (
//     <Modal
//       show={show}
//       onHide={handleClose}
//       backdrop="static"
//       keyboard={false}
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Employee</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               name='name'
//               className="form-control"
//               id="name"
//               aria-describedby="emailHelp"
//               placeholder="Enter Name"
//               value={currentEmployee.name}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group mt-3">
//             <input
//               type="email"
//               name='email'
//               className="form-control"
//               id="email"
//               aria-describedby="emailHelp"
//               placeholder="Enter Email"
//               value={currentEmployee.email}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group mt-3">
//             <input
//               type="text"
//               name='address'
//               className="form-control"
//               id="address"
//               aria-describedby="emailHelp"
//               placeholder="Enter Address"
//               value={current