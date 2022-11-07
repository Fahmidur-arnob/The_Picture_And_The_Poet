import React from 'react';

const Appointment = () => {
    return (
        <div className='text-center justify-center'>
            <h1>Book an appointment</h1>
            <div className="form-control mb-5">
                <label className="label mx-auto">
                    <span className="label-text">Your Email</span>
                </label>
                <label className="input-group mx-auto">
                    <input type="text" placeholder="Enter Your Email Here" className="input input-bordered mx-auto rounded-full" />
                </label>
            </div>
            <textarea className="textarea textarea-accent" placeholder="Bio"></textarea>
        </div>
    );
};

export default Appointment;