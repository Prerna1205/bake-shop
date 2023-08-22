import "bootstrap/dist/css/bootstrap.min.css";
import cartIcon from "../../img/cart_icon.jpg";
import { Link } from "react-router-dom";

const Navigation = (prop) => {
  const { count } = prop;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand mb-0 h1" href="#">
        <img
          src="https://cdn2.vectorstock.com/i/1000x1000/68/71/baking-icons-and-elements-vector-526871.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        My Baking Blog
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
      <span className="navbar-toggler-icon"></span>

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
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Recipies
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li></li>

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
            <span id="cartQty">0</span>
          </li>

          <li className="nav-link">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
