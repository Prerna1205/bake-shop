import React, { Component, useContext } from "react";
import Navigation from "./components/Navigation";
import Protected from "./components/Protected";
import Products from "./components/Products";
import Cart from "./components/Cart";
import useAuthentication from "./service/useAuthentication";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";

import { Switch, Route, BrowserRouter } from "react-router-dom";
const App = () => {
  const { AuthCtx } = useAuthentication();
  const { user, logOut } = useContext(AuthCtx);

  return (
    <div>
      <BrowserRouter>
        <Navigation count="0" />
        <Switch>
          <div className="content">
            <Route exact path="/">
              <Home />
            </Route>

            <Protected user={user} path="/shop">
              <h1>Best Selling Desserts</h1>

              <Products />
            </Protected>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
