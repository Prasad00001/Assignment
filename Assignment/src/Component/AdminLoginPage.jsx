import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { json, Link , NavLink} from "react-router-dom"; 
import './index.css'
import * as Yup from 'yup'
const initialValues={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  role:"Admin"
  
}
const onSubmit=(values)=>{
  console.log(values);
  // const response = fetch('http://localhost:8080/signUp',
  // {
  //     method:'POST',
  //     body:JSON.stringify(values),
  //     headers:{
  //         'Content-Type':'application/json'
  //     }
  // })
  // //const data= response.json();
  // //console.log(data)
  // console.log(values);

}
const validationSchema = Yup.object({
  firstName:Yup.string().required('Required!'),
  lastName:Yup.string().required('Required!'),
  email:Yup.string().email('Invalid email format').required('Required!'),
  password:Yup.string().required('Required!'),
  

})

function AdminLoginPage() {
 
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
            
           
            <button >signUp</button>
        </Form>
    </Formik>
    <h2 className='text-white'>If you have already account </h2>
    
                                <NavLink to="/AdminLogin"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   SignIn
                                </NavLink>
    </div> 
  )
}

export default AdminLoginPage
