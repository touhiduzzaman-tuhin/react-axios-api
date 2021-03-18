import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RandomUserDetails from './RandomUserDetails';

const RandomUser = () => {
    const [randomUser, setRandomUser] = useState([]);
    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=50')
            .then(response => {
                const randomUser = response.data.results;
                // console.log(randomUser);
                setRandomUser(randomUser)
            })
    }, [])
    return (
        <div className='container' align='center'>
            <h3 className='my-5'>Random Users List</h3>
            <div className='row'>
                {
                    randomUser.length > 0 && randomUser.map(users => <RandomUserDetails key={users.phone} users={users}></RandomUserDetails>)
                }
            </div>
        </div>
    );
};

export default RandomUser;