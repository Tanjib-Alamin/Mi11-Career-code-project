import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const Jobcard = ({ job }) => {
  const {
    _id,
    title,
    location,
    description,
    company,
    company_logo,
    requirements,
    salaryRange,
  } = job;

  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>
        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex gap-2 items-center">
            <FaLocationDot></FaLocationDot>
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions ">
          {requirements.map((req, index) => (
            <div key={index} className="badge badge-outline">
              {req}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
