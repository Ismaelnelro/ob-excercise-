import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'


const AboutPage = () => {
    const navigate = useNavigate();


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
            <h1>
                About | FAQS Page
            </h1>


      <button onClick={()=>navigat('/profile')}>
        Go to Profile
      </button>



      <button onClick={()=>goBack(-1)}>
        Go Back
      </button>
      
    
      <button onClick={()=>goForward(1)}>
        Go ForWard
      </button>

        </div>
    );
}

export default AboutPage;
