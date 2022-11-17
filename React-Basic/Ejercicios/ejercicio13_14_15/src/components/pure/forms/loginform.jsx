/**
 * Contiene un formulario para autenticacion de usuario
 */


import React, { useState } from 'react';
export const Loginform = () => {

    
    const Initialcredentials = [
        {
            user: '',
            password: ''
        }
    ]
    
    const [credential, setCredential] = useState(Initialcredentials)

    return (
        <div>

        </div>
    );
}

