import React, { use } from "react";
import { Link } from "react-router";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const authUser = use(AuthContext);
  console.log(authUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <h2 className="text-2xl text-center py-2 font-bold">Register now!</h2>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <label className="label">name</label>
          <input name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div className="mt-2">
            <a className="link link-hover">Forgot password?</a>
          </div>
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
        <p>
          Already have an account? Please
          <Link className="text-blue-500 underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
