import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='text-center mt-5 mb-0 py-5 bg-dark text-light'>
            <small>copyright@ {year}</small>
        </div>
    );
};

export default Footer;