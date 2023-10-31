import React, { useState, createContext } from "react";
import { doLogin,doSignUp } from "../api";

const AuthCtx = createContext();

const useAuthentication = () => {
  const dataSession=  sessionStorage.getItem("user");
  const [user, setUser] = useState(dataSession?JSON.parse(dataSession):null);
  const [error, setError] = useState(null);

  const signUp = (email, password, name) =>
  doSignUp(email, password, name)
      .then(({user,token}) => {
        setUser(user);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        
        setUser(null);
      });
  const login = (data) =>
    {if(data.payload.user)
      {
        setUser(data.payload.user);
        sessionStorage.setItem("user",JSON.stringify(data.payload.user));
      }
      else{
        setError(data.payload.error?data.payload.error:null);
        sessionStorage.clear();
        setUser(null);
      }
        return true;
    }

  const logOut = () => {
    setUser(null);
    setError(null);
  };
  return {
    AuthCtx,
    AuthProvider: ({ children }) => (
      <AuthCtx.Provider value={{ error, user, login, logOut, signUp }}>
        {children}
      </AuthCtx.Provider>
    ),
  };
};

export default useAuthentication;
