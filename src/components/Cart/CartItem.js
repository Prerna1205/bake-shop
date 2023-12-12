import { deleteitem, updateItem } from "../../redux/cartSlice";
import { saveForLater } from '../../actions/saveForLaterAction';
import { useSnackbar } from 'notistack';
import { useDispatch } from "react-redux";
import { getDeliveryDate, getDiscount } from '../../utils/functions';
const CartItem = ({ dish }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const saveForLaterHandler = (id,dish) => {
   
    dispatch(saveForLater(id));
    removeFromCart(dish);
    enqueueSnackbar("Saved For Later", { variant: "success" });
}
  const removeFromCart = (product) => {
    dispatch(deleteitem(product));
  };
  const updateCart = (product, action) => {
    dispatch(updateItem({ ...product, actionPerformed: action }));
  };
  return (
    <div className="cart" key="dish">
      <img className="cartImg" src={dish.img} alt="" />
      <h3 className="cartname"> {dish.name}</h3>
      <div className="flex items-baseline gap-2 text-xl font-medium">
                        <span>₹{(dish.cuttedPrice * dish.quantity).toLocaleString()}</span>
                        <span className="text-sm text-gray-500 line-through font-normal">₹{(dish.price * dish.quantity).toLocaleString()}</span>
                        <span className="text-sm text-primary-green">{getDiscount(dish.cuttedPrice, dish.price)}%&nbsp;off</span>
                    </div>
      <div className="flex gap-1 items-center">
        <span className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border flex items-center justify-center cursor-pointer" onClick={() => updateCart(dish, "add")}>
          +
        </span>
        <input className="w-11 border outline-none text-center rounded-sm py-0.5 text-gray-700 font-medium text-sm qtyInput" value={dish.quantity} disabled />
               
        <span className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border flex items-center justify-center cursor-pointer" onClick={() => updateCart(dish, "remove")}>
          -
        </span>
      </div>
      <button className="removeButton" onClick={() => removeFromCart(dish)}>
        X
      </button>
      <button onClick={() => saveForLaterHandler(dish._id,dish)} className="sm:ml-4 font-medium hover:text-primary-blue">SAVE FOR LATER</button>
    </div>
  );
};
export default CartItem;
