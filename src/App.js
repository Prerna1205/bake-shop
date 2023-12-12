import React, { Component, useContext } from "react";
import { useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import Protected from "./components/Protected";
import Products from "./components/Products";
import Cart from "./components/Cart";
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
import Dashboard from './components/Admin/Dashboard';
import MainData from './components/Admin/MainData';
// import OrderTable from './components/Admin/OrderTable';
// import UpdateOrder from './components/Admin/UpdateOrder';
import ProductTable from './components/Admin/ProductTable';
import NewProduct from './components/Admin/NewProduct';
// import UpdateProduct from './components/Admin/UpdateProduct';
import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  // const { AuthCtx } = useAuthentication();
  // const { user, logOut } = useContext(AuthCtx);
  const { user, token,isAdmin } = useSelector((state) => state.auth);
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
            <Protected user={user} exact path="/orders/payment/success">
              <OrderSuccess success={true} />
            </Protected>
            <Protected user={user} exact path="/orders/:id">
              <OrderStatus />
            </Protected>

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

            <Protected user={user} path="/order/confirm">
              <OrderConfirm />
            </Protected>
            <Protected user={user} path="/process/payment">
              <Payment />
            </Protected>

            <Protected user={user} exact path="/orders">
              <MyOrders />
            </Protected>

            <Protected user={user} path="/order_details/:id">
              <OrderDetails />
            </Protected>

            
          <Protected  isAdmin={true} user={user} path="/admin/Dashboard">
            <Dashboard activeTab={0}>
               <MainData /> 
            </Dashboard>
          </Protected> 
          
          {/* <Protected isAdmin={true} path="/admin/orders">
            <Dashboard activeTab={1}>
              <OrderTable />
            </Dashboard>
          </Protected>
    

     
          <Protected isAdmin={true}  path="/admin/order/:id">
            <Dashboard activeTab={1}>
              <UpdateOrder />
            </Dashboard>
          </Protected> */}
      

       
          <Protected  isAdmin={true} user={user} path="/admin/products">
            <Dashboard activeTab={2}>
              <ProductTable />
            </Dashboard>
          </Protected>
       
       
          <Protected isAdmin={true} user={user} path="/admin/new_product">
            <Dashboard activeTab={3}>
              <NewProduct />
            </Dashboard>
          </Protected>
      
          </div>
        </Switch>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
};

export default App;
