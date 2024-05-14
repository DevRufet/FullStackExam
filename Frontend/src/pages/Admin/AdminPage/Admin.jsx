import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './admin.scss'
function Admin() {
    const [datas, setdatas] = useState([])
    useEffect(() => {
     datalars()
    }, [datas])
    async function Getdata() {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        return data;
      }
      
      async function datalars(){
          let datam=await Getdata()
          setdatas(datam)
      }
      async function DeletedById(id) {
        const response = await fetch('http://localhost:3000/products/'+id,{method:"delete"});
        const data = await response.json();
        return data;
        
      }
      
  return (
      <>
      <Helmet>
        <title>Admin</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <table>
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Description</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
 {
  datas.map((x)=>
  <tr key={x._id}>
      <td>{x.name}</td>
      <td>{x.price}</td>
      <td>{x.desc}</td>
      <td><button><Link to={`/admin/update/${x._id}`}>Edit</Link></button></td>
      <td><button onClick={()=>DeletedById(x._id)}>Delete</button></td>
  </tr>
  
  )



 }
  
</table>
      </>
    
  )
}

export default Admin