import "bootstrap/dist/css/bootstrap.min.css";
import cartIcon from "../../img/cart_icon.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import  DropDown  from "../Common/DropDown";

const Navigation = (prop) => {
  const { totalItems } = useSelector((state) => state.cart);
  
  return (
    <nav  className="navbar navbar-expand-lg navbar-light  nav">
      <span className="navbar-brand mb-0 h1" href="#">
        <img
          src="https://cdn2.vectorstock.com/i/1000x1000/68/71/baking-icons-and-elements-vector-526871.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        The Bake Shop
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
     

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">
              Shop Items
            </Link>
          </li>
          <li className="nav-item">
            <DropDown  className="nav-link" header="User" items={[{name:"Add Personal Information",link:"/addInfo"},{name:"Add Address",link:"/addAddress"}]}/>
             
            
          </li>
          <li className="nav-item">
            <DropDown  className="nav-link" header="Order" items={[{name:"Order Details",link:"/orderDetails"}]}/>
             
            
          </li>
          <li className="nav-item end">
          <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item end">
          <Link className="nav-link" to="/signUp">
             Sign Up
            </Link>
          </li>
          <li className="nav-link-cart">
            <Link to="/cart">
           
              <img
                src={cartIcon}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="cart-Icon"
              />
            </Link>
            <span id="cartQty">{totalItems}</span>
          </li>

          
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
