import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <button className='btn loading'>Loading</button>
    }
    else if(!user){
        return children
    }
    return <Navigate to='/login' state={{from:children}} replace></Navigate>
};

export default PrivateRoute;