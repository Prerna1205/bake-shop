import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import {catalogApi} from "./redux/apiSlice";
import useAuthentication from "./service/useAuthentication";
import "./css/style.css";
import  storeNew  from "./redux/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
//import {ApiProvider} from "@reduxjs/toolkit/query/react";
function ConnectedApp() {
  const { AuthProvider } = useAuthentication();
  return (
    
    <Provider store={storeNew}>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      ></SnackbarProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
      <SnackbarProvider/>
    </Provider>

  );
}

ReactDOM.render(<ConnectedApp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
