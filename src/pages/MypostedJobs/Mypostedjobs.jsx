import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import Jobslist from './jobslist';
import { jobsCreatedByPromise } from '../../api/jobsapi';

const Mypostedjobs = () => {


    const { user } = UseAuth();

    return (
      <div>
        <h2>My Posted Jobs</h2>
        <Suspense>
          <Jobslist jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></Jobslist>
        </Suspense>
      </div>
    );
};

export default Mypostedjobs;