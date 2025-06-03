import React, { Suspense } from 'react';
import MyapplicationsStats from './MyapplicationsStats';
import ApplicationsList from './ApplicationsList';
import UseAuth from '../../hooks/UseAuth';
import { myApplicationsPromise } from '../../api/Applicationsapi';




const Myapplications = () => {

    const { user } = UseAuth();


    return (
      <div>
        <MyapplicationsStats></MyapplicationsStats>
        <Suspense fallback={"Loading"}>
          <ApplicationsList
            myApplicationsPromise={myApplicationsPromise(user.email)}
          ></ApplicationsList>
        </Suspense>
      </div>
    );
};

export default Myapplications;