import React from 'react';
import { useEffect, useState } from 'react';
import ServiceCardThree from './ServiceCardThree';

const ServicesHome = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://the-picture-and-the-poet.vercel.app/home`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='mb-20'>
            <div className='text-center mb-4'>
                <p className="text-4xl mb-3 font-bold text-indigo-600">Services</p>
                <h2 className="text-5xl font-semibold text-blue-600 mb-4">Our Service Area</h2>
                <p className='text-2xl font-semibold mb-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-7 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm-grid-cols-1'>
                {
                    services.map(service => <ServiceCardThree
                    key={service._id}
                    service={service}
                    ></ServiceCardThree>)
                }
            </div>
        </div>
        </div>
    );
};

export default ServicesHome;