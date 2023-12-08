import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { emptyCart } from "../../redux/cartSlice";
import {
  clearErrors,
  getPaymentStatus,
  newOrder,
} from "../../actions/orderAction";
import Loader from "../Common/Loader";

const OrderStatus = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();

  const { shippingInfo, items } = useSelector((state) => state.cart);
  const { user, token } = useSelector((state) => state.auth);
  const { loading, txn, error } = useSelector((state) => state.paymentStatus);
  const {
    loading: orderLoading,
    order,
    error: orderError,
  } = useSelector((state) => state.newOrder);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const orderData = {
    shippingInfo,
    orderItems: items,
    totalPrice,
  };
//   
useEffect(() => {
    if (loading === false) {
      if (txn) {
        if (txn.status === "TXN_SUCCESS") {
          orderData.paymentInfo = {
            id: txn.id,
            status: txn.status,
          };

          dispatch(newOrder(orderData, user, token));
        } else {
          enqueueSnackbar("Processing Payment Failed!", { variant: "error" });
          navigate.push("/orders/failed");
        }
      } else {
        navigate.push("/cart");
      }
    }
    // eslint-disable-next-line
  }, [loading]);

  useEffect(() => {
    if (orderLoading === false) {
      if (order) {
        enqueueSnackbar("Order Placed", { variant: "success" });
        
        dispatch(emptyCart());
     
        navigate.push("/orders/payment/success");
        
      } else {
        navigate.push("/orders");
      }
    }
    // eslint-disable-next-line
  }, [orderLoading]);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (orderError) {
      enqueueSnackbar(orderError, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getPaymentStatus(params.id, user, token));
  }, [dispatch, error, orderError,enqueueSnackbar]);

  return <Loader />;
};

export default OrderStatus;
