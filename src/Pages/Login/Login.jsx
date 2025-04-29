import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form action="">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div className="mt-2">
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          New to this website? Please{" "}
          <Link className="text-blue-500 underline" to="/register">
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
