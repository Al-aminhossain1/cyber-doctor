import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Checout = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h4>this is checkout page</h4>

        </div>

    );
};

export default Checout;