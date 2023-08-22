import React, { useState, useContext, useEffect, createRef } from "react";
import useAuthentication from "../../service/useAuthentication";
import { useHistory, useLocation } from "react-router-dom";
import "./index.css";

const Login = () => {
  const name = createRef();
  const pass = createRef();
  const [userDetails, setUserDetails] = useState([
    { id: "hello", pass: "hello" },
  ]);
  const history = useHistory();
  const location = useLocation();
  const { AuthCtx } = useAuthentication();
  const { login, user, error } = useContext(AuthCtx);
  const { from } = (location && location.state) || {
    from: { pathname: "/" },
  };
  useEffect(() => {
    user && history.replace(from);
  }, [user, from, history]);

  const loginUser = () => {
    const email = name.current.value;
    const password = pass.current.value;
    login(email, password);
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
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                ref={name}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                ref={pass}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={loginUser}
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
        {error ? "Ërror in login!" + error : null}
      </div>
    </div>
  );
};
export default Login;
