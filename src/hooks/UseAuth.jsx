import React, { use } from 'react';
import { AuthContext } from '../context/authcontext/Authcontext';

const UseAuth = () => {

    const authInfo = use(AuthContext)


    return authInfo
};

export default UseAuth;