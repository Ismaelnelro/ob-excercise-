import React from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterFormik from '../../components/pure/forms/registerFormik';


export default function RegisterPage() {
  
  const navigate = useNavigate();

  function navigatTo(path){
     navigate(path)
  }
  
  
  
  return (
    <div>
      <button onClick={()=>navigatTo('/login')}>
        Go to Login
      </button>
      <h1>Register</h1>
      <RegisterFormik/>
    </div>
  )
}
