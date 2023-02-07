
import { Navbar } from './components/Navbar';
import { EmployeeForm } from './components/EmployeeForm';
import { EmployeeList } from './components/EmployeeList'
import { EditEmployee } from "./components/EditEmployee";
import { useState } from 'react';



export const App = () => {
  const[mainEmployee , setMainEmployee]=useState(JSON.parse(localStorage.getItem('employees')) || [])

  return (
    <>
      <Navbar />
      <div className="container">
        <EmployeeList />
      </div>
    </>
  );
};





