import React, { useState, useContext, useEffect, createRef } from "react";
import useAuthentication from "../../service/useAuthentication";
import { useHistory, useLocation } from "react-router-dom";
import "./index.css";

const Login = () => {
  const name = createRef();
  const pass = createRef();
  const email = createRef();
  const confirmPass = createRef();
  
  const history = useHistory();
  const location = useLocation();
  const { AuthCtx } = useAuthentication();
  const { signUp, user } = useContext(AuthCtx);
  let {error}=useContext(AuthCtx);
  const { from } = (location && location.state) || {
    from: { pathname: "/" },
  };
  useEffect(() => {
    user && history.replace(from);
  }, [user, from, history]);

  const loginUser = () => {
    const email1 = email.current.value;
    const password = pass.current.value;
    const confirmPass1=confirmPass.current.value;
    const name1=name.current.value;
    if(password===confirmPass1)
    {
      signUp(email1, password,name1);
    }
    else{
      error="New Password ans Confirm Password are not same!"
    }
   
  };
  return (
    <div className="Auth-form-container">
      <div className="Auth-container">
        <div className="Auth-img-container">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/68/71/baking-icons-and-elements-vector-526871.jpg"
            alt="login"
            width="350px"
            height="350px"
          />
        </div>
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                type="name"
                className="form-control mt-1"
                placeholder="Enter Name"
                ref={name}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                ref={email}
              />
            </div>
            <div className="form-group mt-3">
              <label>New Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter New password"
                ref={pass}
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm password"
                ref={confirmPass}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={loginUser}
              >
               Sign Up
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
        <div>
        {error ? "Ërror in login!" + error : null}
        </div>
      </div>
    </div>
  );
};
export default Login;
