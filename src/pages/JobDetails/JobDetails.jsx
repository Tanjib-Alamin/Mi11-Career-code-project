import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const { _id,title, company } = useLoaderData();
    console.log();

    return (
      <div>
        <h1 className="text-4xl">Job Details of : {title}</h1>
        <p>company : {company}</p>
        <Link to={`/jobapply/${_id}`}>
          <button className="btn btn-primary">Apply Now</button>
        </Link>
        
      </div>
    );
};

export default JobDetails;