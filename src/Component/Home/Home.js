import React from 'react';
import UseService from '../../hooks/UseService';

import cyber2 from '../../images/banner/banner2.png'
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = UseService([]);
    return (
        <div className='container mt-5'>


            <img src={cyber2} className=" img-banar w-100 h-50" alt="..." />

            <div className=" container row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}>

                    </Service>)
                }

            </div>


        </div>

    );
};

export default Home;