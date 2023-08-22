import React from "react";
import { additem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import "./index.css";
import image2 from "../../img/pancake.jpg";
const Product = (props) => {
  const { product, clicked } = props;
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch(additem(product));
  }

  return (
    <div className="dish">
      <img src={product.img} alt="product" className="dishImg" />
      <h4>{product.name}</h4>
      <h5>{product.desc}</h5>
      <p>{product.price}</p>
      <button onClick={onAddToCart}> Add to cart</button>
    </div>
  );
};
export default Product;
