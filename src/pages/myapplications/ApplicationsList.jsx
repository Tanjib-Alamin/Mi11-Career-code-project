import React, { use } from "react";
import Jobapplicationrows from "./Jobapplicationrows";

const ApplicationsList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h1 className="text-3xl">jobs Applied so far : {applications.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <Jobapplicationrows
                key={application._id}
                application={application}
                index={index}
              ></Jobapplicationrows>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsList;
