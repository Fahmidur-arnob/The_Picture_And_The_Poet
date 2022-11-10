import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';


const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const { _id } = useLoaderData();

    const handleSubmittingReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            service: _id,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    alert('Review Submitted successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div className='mt-16 mb-20 max-w-lg mx-auto shadow-2xl p-7 rounded-2xl'>
            <h2 className="text-5xl text-indigo-500 mb-5">Please give a review</h2>
            <form onSubmit={handleSubmittingReview}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />

                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />

                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />

                    <input name="email" type="text" placeholder="Your email" className="input input-ghost w-full  input-bordered" />
                </div>
                <textarea name="message" className="textarea mt-5 textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn mt-4 bg-blue-800' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Reviews;