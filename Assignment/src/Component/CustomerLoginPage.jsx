import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { json, Link } from "react-router-dom"; 
import './index.css'
import * as Yup from 'yup'
const initialValues={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  role:"Customer"
  
}
const onSubmit=(values)=>{
  console.log(values);
  const response = fetch('http://localhost:8080/signup',
  {
      method:'POST',
      body:JSON.stringify(values),
      headers:{
          'Content-Type':'application/json'
      }
  })
  //const data= response.json();
  //console.log(data)
  console.log(values);

}
const validationSchema = Yup.object({
  firstName:Yup.string().required('Required!'),
  lastName:Yup.string().required('Required!'),
  email:Yup.string().email('Invalid email format').required('Required!'),
  password:Yup.string().required('Required!'),
  

})

function CustomerLoginPage() {
  
  return (
    
    
     <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    className="justify-center"
    >
        <Form>
          
            <div className="form-control">
            <label htmlFor="FirstName">First Name</label>
            <Field
            type='text'
            id="firstName"
            name="firstName"
            />
            <ErrorMessage name="firstName"/>
            </div>
            <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <Field
            type='text'
            id="lastName"
            name="lastName"
            />
            <ErrorMessage name="lastName"/>
            </div>
            
            <div className="form-control">
            <label htmlFor="email">E-Mail</label>
            <Field
            type='email'
            id="email"
            name="email"
            />
            <ErrorMessage name="email"/>
            </div>
            <div className="form-control">
            <label htmlFor="Password">Password</label>
            <Field
            type='password'
            id="password"
            name="password"
            />
            <ErrorMessage name="password"/>
            </div>
            
           
            <button >Submit</button>
        </Form>
    </Formik>
    
  )
}

export default CustomerLoginPage
