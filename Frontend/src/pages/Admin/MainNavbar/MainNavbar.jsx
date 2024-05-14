import React from 'react'
import { Link } from 'react-router-dom'

function MainNavbar() {
  return (
    <>
    <Link to={'/admin'}>Admin</Link>
    <Link to={'/admin/add'}>Add</Link>
    <Link to={'/admin/update'}>Update</Link>
    </>
  )
}

export default MainNavbar