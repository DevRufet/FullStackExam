import React from 'react'
import { Link } from 'react-router-dom'

function MainsNavbar() {
  return (
    <>
    <Link to={'/'}>Home</Link>
    <Link to={'/detail/:id'}>detail</Link>
    <Link to={'/basket'}>basket</Link>
    <Link to={'/wishlist'}>wishlist</Link>
    
    </>
  )
}

export default MainsNavbar