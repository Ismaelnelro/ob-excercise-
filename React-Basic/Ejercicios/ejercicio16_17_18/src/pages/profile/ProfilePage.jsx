import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProfilePage = ({ user }) => {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1)
    }

    function navigateTo(path) {
        navigate(path)
    }

    return (
        <div>
            <h1> Your Profile</h1>

            <button onClick={() => navigateTo('/tasks')}>
                Tasks
            </button>

            <button onClick={() => goBack()}>
                Go Back
            </button>
        </div>
    );
}

export default ProfilePage;
