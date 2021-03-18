import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './RandomUserDetails.css';

const RandomUserDetails = (props) => {
    console.log(props);
    const {name, email, location, phone, picture, gender, dob} = props.users;
    const {title, first, last} = name;
    const {state, city, country} = location;
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');
    return (
        <div className='col-md-4'>
            <div className='random-user-area'>
                <img src={picture.medium} alt=""/>
                <p>Full Name : {title} {first} {last}</p>
                <p>Gender : {gender}</p>
                <p>Age : {dob.age}</p>
                <p>Phone : {number}</p>
                <p>Email : {mail}</p>
                <p>Address : {state}-{city}-{country}</p>
                <Button variant='dark' onClick={() => setNumber(phone)}>
                    Phone
                </Button>
                &nbsp; &nbsp;
                <Button variant='warning' onClick={() => setMail(email)}>
                    Email
                </Button>
            </div>
        </div>
    );
};

export default RandomUserDetails;