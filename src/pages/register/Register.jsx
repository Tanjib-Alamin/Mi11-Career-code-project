import Lottie from "lottie-react";
import React, { use } from "react";
import registerlottie from "../../assets/lotties/register.json";
import { AuthContext } from "../../context/authcontext/Authcontext";
import Sociallogin from "../sociallogin/Sociallogin";
import { useNavigate } from "react-router";


const Register = () => {

  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

    const handelRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      console.log(password, email);
      

      createUser(email, password)
        .then(result => {
          console.log(result.user);
          navigate('/')
          
        })
        .catch(error => {
        console.log(error);
      })

    }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "300px" }}
            animationData={registerlottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handelRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                                  type="password"
                                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <Sociallogin></Sociallogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
