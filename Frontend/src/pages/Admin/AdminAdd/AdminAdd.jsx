import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useLocalStorage from '../../../hooks/useLocalStorage';
function AdminAdd() {
 
  return (
      <>
      
       <Helmet>
        <title>AdminAdd</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Formik
       initialValues={{ name: '', price: '', desc: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         price: Yup.number()
           .required('Required'),
         desc: Yup.string().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          fetch("http://localhost:3000/products",{
              method:"post",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(values)
          })
           setSubmitting(false);
         
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">Price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <label htmlFor="desc">description</label>
         <Field name="desc" type="desc" />
         <ErrorMessage name="desc" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
      </>
    
  )
}

export default AdminAdd