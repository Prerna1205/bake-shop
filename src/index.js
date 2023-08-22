import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import useAuthentication from "./service/useAuthentication";
import reportWebVitals from "./reportWebVitals";
import "./css/style.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function ConnectedApp() {
  const { AuthProvider } = useAuthentication();
  return (
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  );
}

ReactDOM.render(<ConnectedApp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
