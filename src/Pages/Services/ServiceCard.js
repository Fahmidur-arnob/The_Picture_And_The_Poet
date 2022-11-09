import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, image, price, name} = service;
    return (
        <div>
            <div className="card card-compact w-95 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='rounded-xl w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;