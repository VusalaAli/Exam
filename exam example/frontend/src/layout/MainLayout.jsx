import React from 'react'
import MainNavbar from './MainNavbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
      <MainNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout
