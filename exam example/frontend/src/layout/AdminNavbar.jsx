import React from 'react'
import { NavLink } from 'react-router'

const AdminNavbar = () => {
  return (
    <>
       <nav>
        <ul>
          <li>
            <NavLink to="/admin">Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin/addProduct">Add</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default AdminNavbar
