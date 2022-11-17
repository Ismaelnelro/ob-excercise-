import React, { useState, useEffect } from 'react';
import getRandomUser from '../../services/axiosSerive';
import { User } from '../../models/user.class';

const AxiosExample = () => {

    const [user, setuser] = useState(null);

    // useEffect(() => {
    //     obtainUser();
    // }, [])



    const obtainUser = () => {
        getRandomUser()
            .then((resp) => {
                console.log(resp)
                if (resp.status === 200) {
                    setuser(resp.data.results)
                }
            }
            )
            .catch()
    }


    return (
        <div>
            <h1>Axios Example</h1>

            {(user != null) ? (
                <div>
                    {/* <img src={user.picture.medium} alt="avatar" /> */}
                    <h2> Name: {user.name.title} {user.name.first} {user.name.last}</h2>
                </div>
            ) : (
                <div>
                    <p>Generate a new user</p>
                    <button onClick={obtainUser} > Random user</button>
                </div>
            )}


        </div>
    );
}

export default AxiosExample;
