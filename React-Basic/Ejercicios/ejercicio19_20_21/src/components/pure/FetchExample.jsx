import React, { useEffect, useState } from 'react';
import { getAllUser, getPagesUser, getUserDetail } from '../../services/fetchService';
import { login } from '../../services/fetchService';


const FetchExample = () => {

    const [selectedUser, setSelectedUser] = useState(null)

    const [users, setusers] = useState([])
    const [totalPerPage, setTotalPerPage] = useState(6)
    const [totalUser, setTotalUser] = useState(12)
    const [pages, setPages] = useState(2)

    useEffect(() => {
        obteinUsers();
    }, [])


    const obteinUsers = () => {
        getAllUser()
            .then(resp => {
                console.log(resp.data);
                setusers(resp.data)
                setPages(resp.total_pages)
                setTotalUser(resp.total)
                setTotalPerPage(resp.per_page)

            }).catch(err => alert('Error while retreiving the users', err))
            .finally(
                console.log('User Table'),
                console.table(users)
            )
    }

    const obtainPagedUsers = (page) => {

        getPagesUser(page)
            .then(resp => {
                console.log('All paged Users', resp.data);
                setusers(resp.data)
                setPages(resp.total_pages)
                setTotalUser(resp.total)
                setTotalPerPage(resp.per_page)

            }).catch(err => alert('Error while retreiving the users', err))
            .finally(
                console.log('User Table'),
                console.table(users)
            )
    }


    const obtainUserDetails = (id) => {
        getUserDetail(id)
            .then(resp => {
                console.log('All paged Users', resp.data);
                setSelectedUser(resp.data)
            }).catch(err => alert('Error while retreiving the users', err))
            .finally(
                console.log('User Table'),
                console.table(selectedUser)
            )
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then(resp => {
                console.log('Token', resp.token);
                sessionStorage.setItem('Token',resp.token)
            }).catch(err => alert('Error while login user', err))
    };

    return (
        <div>
            <button onClick={() => authUser()}>Login</button>
            <h2> Users: </h2>
            {users.map((user, index) =>
                (<p key={index} onClick={() => obtainUserDetails(user.id)}> {user.first_name}, {index}</p>)
            )}

            <p>Showing {totalPerPage} users of {totalUser}</p>

            <button onClick={() => obtainPagedUsers(1)}>1</button>
            <button onClick={() => obtainPagedUsers(2)}>2</button>

            <div>
                <h3>User Details</h3>
                {selectedUser && (
                    <div>
                        <p> Name: {selectedUser.first_name}</p>
                        <p> Last-Name {selectedUser.last_name}</p>
                        <img src={selectedUser.avatar} alt="" style={{ height: '50px', width: '50px' }} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default FetchExample;
