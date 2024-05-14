import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { useEffect } from 'react'
import './home.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MainContext } from '../../../context/MainProvider'
function HomePage() {
    const [myinp, setmyinp] = useState('')
    const [datas, setdatas] = useState([])
    const {add}=useContext(MainContext)
    useEffect(() => {
     datalars()
    }, [])
    async function Getdata() {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        return data;
      }
      
      async function datalars(){
          let datam=await Getdata()
          setdatas(datam)
      }
      function az(item){
        setdatas(datas.toSorted((a,b) => (a[item] > b[item]) ? 1 : ((b[item] > a[item]) ? -1 : 0))) 
      }
      function za(item){
        setdatas(datas.toSorted((a,b) => (a[item] < b[item]) ? 1 : ((b[item] < a[item]) ? -1 : 0))) 
      }
  return (
      <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <button onClick={()=>az("price")}>A-z</button>
      <button onClick={()=>za("price")}>Z-a</button>
      <input type="text" value={myinp} onChange={(e)=>setmyinp(e.target.value)}/>
      <div className='home'>
      
      {
        datas.filter((x)=>x.name.toLowerCase().includes(myinp.toLowerCase()))
        .map((x)=>
        <div key={x._id} style={{border:"1px solid black"}}>
          <h1><Link to={`/detail/${x._id}`}>name:{x.name}</Link></h1>
          <span>price:{x.price}</span>
          <p>desc:{x.desc}</p>
          <button onClick={()=>add(x)}>Add basket</button>
        </div>
        
        )
      }
     </div>
      </>
    
  )
}

export default HomePage