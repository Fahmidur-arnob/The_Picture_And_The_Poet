import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const Details = () => {
    const seeDetails = useLoaderData();
    console.log(seeDetails.name);
    return (
        <>
            <div>
                <div className="card card-compact max-w-sm mx-auto mt-20 bg-base-100 shadow-2xl">
                    <figure><img src={seeDetails.image} alt="Shoes" className='rounded-xl w-50' /></figure>
                    <div className="card-body max-w-xl mx-auto">
                        <h2 className="card-title">{seeDetails.name}</h2>
                        <p className='text-2xl text-orange-600 font-semibold'>{seeDetails.description}</p>
                    </div>
                </div>
            </div>
            <Reviews></Reviews>
        </>
    );
};

export default Details;