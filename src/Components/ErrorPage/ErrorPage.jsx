import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Opps!!!</h2>
            <button className='btn'><NavLink to="/">Go Back</NavLink></button>
        </div>
    );
};

export default ErrorPage;