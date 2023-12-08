import axios from "axios";
import {useSelector} from 'react-redux';
import { ALL_ORDERS_FAIL, ALL_ORDERS_REQUEST, ALL_ORDERS_SUCCESS, CLEAR_ERRORS, DELETE_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, MY_ORDERS_FAIL, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS, NEW_ORDER_FAIL, NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, PAYMENT_STATUS_FAIL, PAYMENT_STATUS_REQUEST, PAYMENT_STATUS_SUCCESS, UPDATE_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS } from "../constants/orderConstants";


    
// New Order
export const newOrder = (order,user,token) => async (dispatch) => {
  
    const bodyParameters = {
    user,
    order
    };
    try {
        dispatch({ type: NEW_ORDER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        };

        const { data } = await axios.post('http://localhost:3000/api/orders/new', bodyParameters, config);

        dispatch({
            type: NEW_ORDER_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: NEW_ORDER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get User Orders
export const myOrders = (token) => async (dispatch) => {
    try {
        dispatch({ type: MY_ORDERS_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        };
        const { data } = await axios.get('http://localhost:3000/api/orders/me',config);

        dispatch({
            type: MY_ORDERS_SUCCESS,
            payload: data.orders,
        })

    } catch (error) {
        dispatch({
            type: MY_ORDERS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Order Details
export const getOrderDetails = (id,token) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });

        const { data } = await axios.get(`http://localhost:3000/api/orders/${id}`,config);

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data.order,
        })

    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Payment Status
export const getPaymentStatus = (id,user,token) => async (dispatch) => {
    
    const bodyParameters = {
    user,
   
    };
    const config = {
        headers: {
           
            Authorization: `Bearer ${token}`
        },
    };
    try {
        dispatch({ type: PAYMENT_STATUS_REQUEST });
       
        const { data } = await axios.get(`http://localhost:3000/api/payment/status/${id}`,bodyParameters,config);

        dispatch({
            type: PAYMENT_STATUS_SUCCESS,
            payload: data.txn,
        })

    } catch (error) {
        dispatch({
            type: PAYMENT_STATUS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get All Orders ---ADMIN
export const getAllOrders = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_ORDERS_REQUEST });

        const { data } = await axios.get('/api/admin/orders');

        dispatch({
            type: ALL_ORDERS_SUCCESS,
            payload: data.orders,
        })

    } catch (error) {
        dispatch({
            type: ALL_ORDERS_FAIL,
            payload: error.response.data.message,
        });
    }
};



// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}