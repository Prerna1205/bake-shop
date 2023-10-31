
import "./index.css";
import { deleteitem,updateItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Cart = () => {
  const { items,totalItems,totalCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(deleteitem(product));
  };
  const updateCart = (product,action) => {
    dispatch(updateItem({...product,actionPerformed:action}));
  };
  return (
    <div className="cartContainer" >
      {items.length > 0
        ? items.map((dish) => (
            <div className="cart">
              <img className="cartImg" src={dish.img} alt="" />
              <h3 className="cartname"> {dish.name}</h3>
              <h3 className="cartPrice"> Rs. {dish.price}</h3>
              <h3 className="cartQty">
                {dish.quantity}{" "}
                <button className="up" onClick={() => updateCart(dish,"add")}>
                  ↑
                </button>
                <button className="down" onClick={() => updateCart(dish,"remove")}>
                  ↓
                </button>
              </h3>
              <button
                className="removeButton"
                onClick={() => removeFromCart(dish)}
              >
                X
              </button>
            </div>
          ))
        : "Cart is Empty"}
        <hr></hr>
        <div className="totalCart">
        <h3 className="cartname"> Total Quantity:{totalItems}</h3>
         <h3 className="cartPrice">Total Price:Rs. {totalCost}</h3>
         <button>Proceed For Payment</button>
         </div>
        
    </div >
  );
};
export default Cart;
