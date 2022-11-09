import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const Details = () => {
    const seeDetails = useLoaderData();
    console.log(seeDetails.name);
    return (
        <>
            <div>
                <div className="card card-compact w-95 bg-base-100 shadow-xl">
                    <figure><img src={seeDetails.image} alt="Shoes" className='rounded-xl w-50' /></figure>
                    <div className="card-body">
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