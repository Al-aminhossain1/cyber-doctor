import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

function RequireAuth({ children }) {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (user) {
        return children;
    }

    else {
        return <Navigate to="/signup" state={{ from: location }} replace />;
    }
}

export default RequireAuth;