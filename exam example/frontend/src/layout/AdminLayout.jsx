import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import AdminNavbar from './AdminNavbar'

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AdminLayout
