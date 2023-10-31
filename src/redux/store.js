import { configureStore } from '@reduxjs/toolkit';
import combineReducers from './reducer';
import { catalogApi } from './apiSlice';
// using thunk middleware
const reducer = (state, action) => {

  return combineReducers(state, action);
};
const storeNew = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(catalogApi.middleware);
     },

},
  );
  export default storeNew;
 
