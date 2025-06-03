import React, { use } from "react";
import Jobcard from "./Jobcard";

const Hotjobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

    return <div>
        <h1 className="text-5xl text-center font-bold p-10">Hot Jobs of The Day</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-10">
            {
                jobs.map(job=> <Jobcard key={job._id} job={job}></Jobcard>)
            }
      </div>
  </div>;
};

export default Hotjobs;
