import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Jobapply = () => {
    const { id } = useParams();
    console.log(id);
    const { user} = UseAuth();
    
    const handelApplyForm = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
       
        
        const application = {
            id,
            applicant: user.email,
            linkedIn,
            github,
            resume
        }

        axios
          .post("http://localhost:3000/applications", application)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your applicatin has been succes",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });

    }

  return (
    <div>
      <h3> Apply for this jobs: <Link to={`/jobs/${id}`}>details</Link></h3>

      <form onSubmit={handelApplyForm}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link </label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="LinkedIn profile link"
          />

          <label className="label">GitHub Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github profile link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume profile link"
          />
          <input type="submit" className="btn" value="apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default Jobapply;
