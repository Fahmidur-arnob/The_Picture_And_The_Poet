import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, phone, customer, email, service, message } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setReviewService(data));
    }, [service])

    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
                <br />
                <span className="badge badge-ghost badge-sm">${email}</span>
            </td>
            <th>
                <Link 
                onClick={() => handleStatusUpdate(_id)}
                className="text-xl">{message ? message : 'no message'}</Link>
            </th>
        </tr>
    );
};

export default ReviewRow;