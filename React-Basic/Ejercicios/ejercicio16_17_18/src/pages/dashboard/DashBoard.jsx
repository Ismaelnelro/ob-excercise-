import React from 'react';
import Button from '@mui/material/Button';
import Copyrigth from '../../components/pure/forms/Copyrigth';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {


    const navigate = useNavigate();

    const loggout =() =>{
        navigate('/login')
    }

    return (
        <div>
            <Button variant="contained" onClick={loggout}>Logout</Button>
            <Copyrigth/>
        </div>
    );
}

export default DashBoard;
