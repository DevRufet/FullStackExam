import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom';
import './detail.scss'
function DetailPage() {
    let { id } = useParams();
    const [datas, setdatas] = useState({})
    useEffect(() => {
     datalars()
    }, [])
    async function Getdata(id) {
        const response = await fetch('http://localhost:3000/products/'+id);
        const data = await response.json();
        return data;
      }
      
      async function datalars(){
          let datam=await Getdata(id)
          setdatas(datam)
      }
 
  return (
      <>
      <Helmet>
        <title>Detail</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className='home'>
      {
       
        <div key={datas._id} style={{border:"1px solid black"}}>
          <h1>name:{datas.name}</h1>
          <span>price:{datas.price}</span>
          <p>desc:{datas.desc}</p>
        </div>
        
        
      }
     </div>
      </>
   
  )
}

export default DetailPage