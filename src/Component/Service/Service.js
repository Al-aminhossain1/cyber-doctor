import React from 'react';


const Service = ({ service }) => {
    const { name, price, description, image } = service;
    return (


        <div className="col">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price:$ {price}</p>
                    <small className="card-text">Service:{description}</small>
                    <br />
                    <button className='btn btn-primary m-2'>purchess</button>

                </div>
            </div>
        </div>


    );
};

export default Service;