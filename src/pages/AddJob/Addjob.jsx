import React from "react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Addjob = () => {

  const { user} = UseAuth();

  const handelAddJob = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const { maxsalary, minsalary, currency, ...newjob } = data;
    newjob.salaryRange = { minsalary, maxsalary, currency };
    
    newjob.requirements = newjob.requirements.split(',').map(req => req.trim());
    newjob.responsibility = newjob.responsibility
      .split(",")
      .map((res) => res.trim());
    
    newjob.status = "active";


    // save job the database

    axios.post("http://localhost:3000/jobs", newjob)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "new job added succesfully",  
            showConfirmButton: false,
            timer: 1500,
          });
       }
        
      })
      .catch(error => {
      console.log(error);
    })


  }


  return (
    <div>
      <h1>Please Add a job</h1>

      <form onSubmit={handelAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Info</legend>

          <label className="label"> Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Location Name"
          />
          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input"
            placeholder="Company Logo Url"
          />
        </fieldset>

        {/* others fieldset */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobtype"
              aria-label="All"
              
            />
            <input
              className="btn"
              type="radio"
              name="jobtype"
              aria-label="Onsite"
              value="Onsite"
            />
            <input
              className="btn"
              type="radio"
              name="jobtype"
              aria-label="Remote"
              value="remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobtype"
              aria-label="Hybrid"
              value="Hybrid"
            />
          </div>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" name="deadline" className="input" />
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="minsalary"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>
            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="maxsalary"
                className="input"
                placeholder="Maximum Name"
              />
            </div>
            <div>
              <label className="label"> Job Currency </label>
              <select
                defaultValue="select a Currency "
                name="currency"
                className="select"
              >
                <option disabled={true}>select a Currency</option>
                <option>BDT</option>
                <option>USA</option>
                <option>EURO</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea className="textarea" placeholder="Description" name="description"></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Recuirments</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Requirments (separate by comma)"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilitys</legend>
          <textarea
            className="textarea"
            name="responsibility"
            placeholder="responsibility (separate by comma)"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label"> HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="HR Name"
          />

          <label className="label">Email</label>
          <input
            type="text"
            name="hr_email"
            defaultValue={user.email}
            className="input"
            placeholder="HR Email"
          />

          <input type="submit" value="Add Job" className="btn" />
         
        </fieldset>
      </form>
    </div>
  );
};

export default Addjob;
