import Product from "../Product";
import { useSelector, useDispatch } from "react-redux";
import { additem } from "../../redux/cartSlice";
import { addtoList, setFilter, clearFilter } from "../../redux/catlogSlice";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import { useGetProductsQuery } from "../../redux/apiSlice";
const ProductList = () => {
  const { category, productId } = useParams();
  const { data: products, isLoading } = useGetProductsQuery();

  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  function onAddToCart(productObj) {
    dispatch(additem({ ...productObj, quantity: 1 }));
  }

  useEffect(() => {
    if (!isLoading) {
      dispatch(addtoList(products["data"]));
      if (category) {
        setFilter(category);
        const productsfetched = products["data"];
        const newarray = productsfetched.filter((obj) => {
          return obj.category == category;
        });
        setState(newarray);
      } else {
        setState(products["data"]);
      }
    }
  }, [category, isLoading, products]);

  return (
    <div id="allDishes">
      {!productId && state.length > 0 && !isLoading ? (
        state.map((productObj) => (
          <div id="productDiv">
            {category?(<Link to={`${category}/${productObj._id}`} key={productObj._id}>
              <Product key={productObj._id} product={productObj} />
            </Link>):(<Link to={`shop/all/${productObj._id}`} key={productObj._id}>
              <Product key={productObj._id} product={productObj} />
            </Link>)}
            <div w-full >
              <button className="bg-primary w-full sm:w-1/2  mx-4 sm:mx-6 my-1 py-1 px-1 font-medium text-white shadow hover:shadow-lg rounded-sm" onClick={() => onAddToCart(productObj)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : productId ? (
        <ProductDetail id={productId} />
      ) : (
        "Loading Data..."
      )}
    </div>
  );
};

export default ProductList;
