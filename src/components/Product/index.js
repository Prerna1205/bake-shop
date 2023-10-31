import React from "react";
import "./index.css";
const Product = (props) => {
  const { product } = props;
  
  return (
    <div className="dish">
      <img src={product.img} alt="product" className="dishImg"  />
      <h4>{product.name}</h4>
      <h5>{product.desc}</h5>
      <p>Rs.{product.price}</p>
     
    </div>
  );
};
export default Product;
