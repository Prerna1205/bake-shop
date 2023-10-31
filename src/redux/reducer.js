import  {catalogReducer}  from "./catlogSlice";
import { combineReducers } from "@reduxjs/toolkit";
import  {cartReducer}  from "./cartSlice";
import { catalogApi } from './apiSlice';
import authReducer from "./authSlice";
// // This exports a store which connects to the RTK Query based service which queries our json-server API.
// export const store = configureStore({
//   reducer: {
//     [catalogApi.reducerPath]: catalogApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(catalogApi.middleware);
//   },
// });
export default combineReducers({
    cart: cartReducer,
    catalog: catalogReducer,
    auth:authReducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
   

});
