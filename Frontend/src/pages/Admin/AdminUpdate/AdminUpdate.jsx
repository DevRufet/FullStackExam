import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
function AdminUpdate() {
    let {id}=useParams()
    const [datas, setdatas] = useState(null)
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
        <title>AdminUpdate</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {
        datas?<Formik
       initialValues={{ name: datas.name, price: datas.price, desc: datas.desc }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         price: Yup.string()
           .required('Required'),
         desc: Yup.string().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           fetch('http://localhost:3000/products/'+id,{
               method:"put",
               headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({name:values.name,price:values.price,desc:values.desc})
           }
           )
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <label htmlFor="desc">description</label>
         <Field name="desc" type="desc" />
         <ErrorMessage name="desc" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>:null
      

      }
      
      </>
   
  )
}

export default AdminUpdate