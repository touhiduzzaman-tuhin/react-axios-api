import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UserDetails from './UserDetails';

const User = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data;
                // console.log(users);
                setUsers(users)
            })
    }, [])
    // console.log(users);
    return (
        <div align='center' className='container'>
            <h3 className='my-5'>Json Users List</h3>
            <div className="row">
                {
                    users.map(user => <UserDetails key={user.id} user={user}></UserDetails>)
                }
            </div>
        </div>
    );
};

export default User;