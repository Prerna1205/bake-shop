import { deleteitem, updateItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ dish }) => {
  const dispatch = useDispatch();

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
      <h3 className="cartPrice"> Rs. {dish.price}</h3>
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
    </div>
  );
};
export default CartItem;
