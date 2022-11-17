import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'


export default function HomePage() {
  
const location = useLocation();
const navigate = useNavigate();

console.log(location.pathname);

  function navigat(path){
    navigate(path);
  }
  
  function goBack(){
    navigate(-1)
  }

  function goForward(){
    navigate(1)
  }


  
  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={()=>navigat('/profile')}>
        Go to Profile
      </button>



      <button onClick={()=>goBack()}>
        Go Back
      </button>
      
    
      <button onClick={()=>goForward(1)}>
        Go ForWard
      </button>
      
    
    </div>
  )
}

