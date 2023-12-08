import React from "react";
import "./index.css";
const Product = (props) => {
  const { product } = props;
  
  return (
    <div className="dish">
      <img src={product.img} alt="product" className="dishImg"  />
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <p>Rs.{product.price}</p>
     
    </div>
  );
};
export default Product;
