import React from 'react'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { MainContext } from '../../../context/MainProvider'

function BasketPage() {
    const {basket,deleted,add,decrease}=useContext(MainContext)
    console.log(basket)
  return (
      <>
      <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {
          basket.map((x)=>
         
          <div key={x._id} style={{border:"1px solid black"}}>
            <p>count{x.count}</p>
          <h1>name:{x.name}</h1>
          <span>price:{x.price}</span>
          <p>desc:{x.desc}</p>
          <button onClick={()=>deleted(x)}>Delete</button>
          <button onClick={()=>add(x)}>+</button>
          <button onClick={()=>decrease(x)}>-</button>
        </div>
          )
      }
      </>
   
  )
}

export default BasketPage