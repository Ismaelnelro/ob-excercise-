import React, { useState } from 'react';

export const RegisterForm = () => {
    
    const inicialData= [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ]
    
    const [credential, setCredential] = useState(inicialData)
    
    
    return (
        <div>
            
        </div>
    );
}

