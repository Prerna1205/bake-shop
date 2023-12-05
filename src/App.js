import React, { Component, useContext } from "react";
import { useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import Protected from "./components/Protected";
import Products from "./components/Products";
import Cart from "./components/Cart";
import useAuthentication from "./service/useAuthentication";
import "./index.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Account from "./components/User/Accounts";
import OrderStatus from "./components/Cart/OrderStatus";
import MyOrders from "./components/Order/MyOrders";
import OrderDetails from "./components/Order/OrderDetails";
import AddAddress from "./components/User/AddAddress";
import Shipping from "./components/Cart/Shipping";
import OrderConfirm from "./components/Cart/OrderConfirm";
import Payment from "./components/Cart/Payment";
import OrderSuccess from "./components/Cart/OrderSuccess";

const App = () => {
  // const { AuthCtx } = useAuthentication();
  // const { user, logOut } = useContext(AuthCtx);
  const { user, token } = useSelector((state) => state.auth);
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
              <Products />
            </Protected>
            <Route
              path="/orders/success"
              element={<OrderSuccess success={true} />}
            />
            <Route
              path="/orders/failed"
              element={<OrderSuccess success={false} />}
            />

            <Route path="/login">
              <Login />
            </Route>
            <Protected user={user} path="/addInfo">
              <Account />
            </Protected>
            <Protected user={user} path="/addAddress">
              <AddAddress />
            </Protected>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Protected user={user} path="/cart">
              <Cart />
            </Protected>
            <Protected user={user} path="/orderDetails">
              <MyOrders />
            </Protected>
            <Protected user={user} path="/shipping">
              <Shipping />
            </Protected>
            <Protected user={user} path="/orders/:id">
              <OrderStatus />
            </Protected>

            <Protected user={user} path="/order/confirm">
              <OrderConfirm />
            </Protected>
            <Protected user={user} path="/process/payment">
              <Payment />
            </Protected>

            <Protected user={user} path="/orders">
              <MyOrders />
            </Protected>

            <Protected user={user} path="/order_details/:id">
              <OrderDetails />
            </Protected>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
