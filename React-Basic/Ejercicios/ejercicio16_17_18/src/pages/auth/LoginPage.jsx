import React from 'react'
import { LoginFormik } from '../../components/pure/forms/loginFormik'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(  ) {

  const navigate = useNavigate();

  function navigatTo(path){
    navigate(path)
  }


  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={()=>navigatTo('/register')}>
        Go to Register
      </button>
      <LoginFormik/>
    </div>
  )
}
