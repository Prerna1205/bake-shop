import image1 from "../../img/pancake.jpg";
import "./index.css";
import { cartReducer } from "../../redux/cartSlice";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dish = {
    id: 1,
    name: "Pancake",
    img: image1,
    desc: "Pancakes are fluffy and delecious.",
    price: "Rs100",
  };
  return (
    <>
      {items.length > 0
        ? items.map((dish) => (
            <div className="cart">
              <img className="cartImg" src={dish.img} alt="" />
              <h3 className="cartname"> {dish.name}</h3>
              <h3 className="cartPrice"> {dish.price}</h3>
              <h3 className="cartQty">
                {" "}
                {dish.qty} <button className="up">↑</button>{" "}
                <button className="down">↓</button>
              </h3>
              <button className="removeButton"> &#10060</button>
            </div>
          ))
        : "Cart is Empty"}
    </>
  );
};
export default Cart;
