import React from 'react';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Copyrigth = () => {
    return (
        <div>
            <Typography variant='body2' color="GrayText" align='center'>
                {'Copyright (C)'}
                <Link color="inherit" href='https://imaginaformacion.com' >
                    Imagina Formacion
                </Link>
            </Typography>
        </div>
    );
}

export default Copyrigth;
