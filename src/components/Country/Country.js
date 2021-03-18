import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountryDetails from './CountryDetails';

const Country = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                const country = response.data;
                // console.log(country);
                setCountry(country)
            })
    }, [])
    return (
        <div className='container' align='center'>
            <h3 className='my-5'>All Country List</h3>
            <div className="row">
                {
                    country.map(nation => <CountryDetails key={nation.alpha3Code} nation={nation}></CountryDetails>)
                }
            </div>
        </div>
    );
};

export default Country;