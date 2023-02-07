
import React from 'react'
// import { EmployeeForm } from './EmployeeForm'
import { EmployeeItem } from './EmployeeItem'



export const EmployeeList = () => {
  return (
    <div>
      <h1 className='my-5 text-center'>Manage Employees</h1>

      <div className='card bg-dark p-3'>
        <table className='table'>
          <thead className="thead-dark">
            {/* <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr> */}

          </thead>

          <tbody>
            <EmployeeItem />
          </tbody>

        </table>

      </div>
    </div>
  )
}


