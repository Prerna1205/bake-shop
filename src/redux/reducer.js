import  {catalogReducer}  from "./catlogSlice";
import { combineReducers } from "@reduxjs/toolkit";
import  {cartReducer}  from "./cartSlice";
import { catalogApi } from './apiSlice';
import {saveForLaterReducer} from './saveForLaterReducer';
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer, paymentStatusReducer } from './orderReducer';
import { forgotPasswordReducer, profileReducer, userReducer, allUsersReducer, userDetailsReducer } from './userReducer';
import { newProductReducer,
   productReducer,productsReducer} from "./adminProductReducer";
import authReducer from "./authSlice";
import userSlice from "./userSlice";
import signUpSlice from "./signUpSlice";
export default combineReducers({
    cart: cartReducer,
    catalog: catalogReducer,
    auth:authReducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    paymentStatus: paymentStatusReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    saveForLater: saveForLaterReducer,
    userDetails:userSlice,
    newProduct: newProductReducer,
    product: productReducer,
    users: allUsersReducer,
    products: productsReducer,
    signUp:signUpSlice
});
