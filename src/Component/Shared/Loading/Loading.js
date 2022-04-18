import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-300 d-flex justify-content-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;