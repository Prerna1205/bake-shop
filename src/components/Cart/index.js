import "./index.css";
 import "../../index.css";
import PriceSidebar from "./PriceSidebar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MetaData from "../Common/MetaData";
import CartItem from "./CartItem";
const Cart = () => {
  const { items, totalItems, totalCost } = useSelector((state) => state.cart);
  const placeOrderHandler = () => {
    history.push("/shipping");
  };
  const history = useHistory();
  return (
    <>
      <MetaData title="Shopping Cart | BakeShop" />

      <main className="w-full mt-20">
        {/* <!-- row --> */}
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          {/* <!-- cart column --> */}
          <div className="flex-1">
            {/* <!-- cart items container --> */}
            <div className="flex flex-col shadow bg-white">
              <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                My Cart ({items.length})
              </span>

              {/* {items && items.length === 0 && (
                                <EmptyCart />
                            )} */}

              {items && items.map((item) => <CartItem dish={item} />)}

              {/* <!-- place order btn --> */}
              <div className="flex justify-end">
                <button
                  onClick={placeOrderHandler}
                  disabled={items.length < 1 ? true : false}
                 
                >
                  PLACE ORDER
                </button>
              </div>
              {/* <!-- place order btn --> */}
            </div>
            {/* <!-- cart items container --> */}

            {/* <!-- saved for later items container --> */}
            {/* <div className="flex flex-col mt-5 shadow bg-white">
                            <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">Saved For Later ({saveForLaterItems.length})</span>
                            {saveForLaterItems && saveForLaterItems.map((item) => (
                                <SaveForLaterItem {...item} />
                            )
                            )}
                        </div> */}
            {/* <!-- saved for later container --> */}
          </div>
          {/* <!-- cart column --> */}

          <PriceSidebar cartItems={items} />
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
};
export default Cart;
