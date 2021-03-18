import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './UserDetails.css';

const UserDetails = (props) => {
    console.log(props);
    const {name, email, phone, username, website, company, address} = props.user;
    // console.log(name);
    const {street, city} = address;
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');

    return (
        <div className='col-md-4'>
            <div className='user-details'>
                <p>Name : {name}</p>
                <p>User-Name : {username}</p>
                <p>Phone : {number}</p>
                <p>Email : {mail}</p>
                <p>Company Name : {company.name}</p>
                <p>Website : {website}</p>
                <p>Address : {street}-{city}</p>
                <Button variant='success' onClick={() => setNumber(phone)}>
                    Phone
                </Button>
                &nbsp; &nbsp;
                <Button variant='danger' onClick={() => setMail(email)}>
                    Email
                </Button>
            </div>
        </div>
    );
};

export default UserDetails;