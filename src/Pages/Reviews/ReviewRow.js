import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import {FaUser} from 'react-icons/fa';

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, phone, customer, email, service, message } = review;
    const [reviewService, setReviewService] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])


    return (
        <tr >
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <th>
                {
                    user?.photoURL
                        ?
                        <img style={{ height: '30px' }} rounded-xl src={user?.photoURL} title={`${user?.displayName}`} alt="No Img" />
                        :
                        user?.uid ? <FaUser></FaUser> : <></>
                }
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