import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              <label className="label">Email address</label>
              <input type="email" className="input" placeholder="Enter your email address" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Enter your password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>

          <p className="text-center font-semibold pt-5">
            Dont’t Have An Account ?{" "}
            <Link className="text-secondary" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
