import React, { useEffect, createRef,useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {login as loginAuth}  from "../../redux/authSlice";
import { useDispatch,useSelector } from "react-redux";
import "./index.css";
const Login = () => {
  const name = createRef();
  const pass = createRef();
  const dispatch=useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { user, error,loading } = useSelector((state) => state.auth);
  const { from } = (location && location.state) || {
    from: { pathname: "/" },
  };
  useEffect(() => {
   if(!loading)
   {
    user && history.replace(from);
   }
  }, [user, from, history,loading]);

  const [errorsEmail, setErrorsEmail] = useState({});
  const [errorsPass, setErrorsPass] = useState({});
   const handleChange = () => {
   
     const email = name.current.value;
     const password = pass.current.value;
  
     let regEmail =
       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
     if (!email) {
       setErrorsEmail({  email: "Field can not be empty!" });
     } else  {
     if(!regEmail.test(email)) {
     
       setErrorsEmail({  email: "Invalid Email" });
     }else{
     setErrorsEmail({  email: "" });
     }
     }
    
     const passwordRegex = /(?=.*[0-9])/;
     if (!password) {
       setErrorsPass({  password: "Field can not be empty!" });
     } else if (password.length < 8) {
       setErrorsPass({  password: "Password must be 8 characters long." });
      
     } else if (!passwordRegex.test(password)) {
       setErrorsPass({  password: "Invalid password. Must contain one number." });     
     }
 else{
       setErrorsPass({  password: "" });
     }
   
   };
  const loginUser = async() => {
    const email = name.current.value;
    const password = pass.current.value;
    dispatch(loginAuth({email:email, password:password}));
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
                onChange={handleChange}
              />
              {errorsEmail ? <div className="error_login">{errorsEmail.email}</div> : ""}
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                ref={pass}
                onChange={handleChange}
              />
               {errorsPass ? (
                <div className="error_login">{errorsPass.password}</div>
              ) : (
                ""
              )}
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
               type="button"
                className="btn btn-primary"
                onClick={loginUser}
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
            {error? (
                <div className="error_login">{error}</div>
              ) : (
                ""
              )}
          </div>
        </form>
       
      </div>
    </div>
  );
};
export default Login;
