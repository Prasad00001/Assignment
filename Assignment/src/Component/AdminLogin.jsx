import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { json, NavLink } from "react-router-dom"; 
import './index.css'
import * as Yup from 'yup'
const initialValues={
  email:'',
  password:''
}
const onSubmit=(values)=>{

  console.log(values);
  const response = fetch('http://localhost:8080/login',
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
  email:Yup.string().email('Invalid email format').required('Required!'),
  password:Yup.string().required('Required!'),
  

})
function AdminLogin() {
 
  return (
    
    <div>
     
     <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    className="justify-center"
    >
        <Form>
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
    <h2 className='text-white'>If you don't have account</h2>
    <NavLink to="/AdminRegister"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    SignUp
                                </NavLink>
    </div> 
  )
}

export default AdminLogin
