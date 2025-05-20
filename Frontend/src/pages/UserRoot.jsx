import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import {Outlet} from 'react-router'

function UserRoot() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    
    </>
  )
}

export default UserRoot