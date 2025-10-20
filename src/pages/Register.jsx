import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your name"
              />
              {/* email */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your photo URL"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Enter your email address"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
              />
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className="text-center font-semibold pt-5">
            Already haven account ?{" "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
