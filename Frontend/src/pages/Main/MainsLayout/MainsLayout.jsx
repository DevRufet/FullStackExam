import React from 'react'
import { Outlet } from 'react-router-dom'
import MainsNavbar from '../MainsNavbar/MainsNavbar'

function MainsLayout() {
  return (
    <>
    <MainsNavbar></MainsNavbar>
    <Outlet></Outlet>
    </>
  )
}

export default MainsLayout