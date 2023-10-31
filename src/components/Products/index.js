import Productlist from "../ProductList";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
const Products = () => {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto filterBar">
            <li className="nav-item active">
              <Link className="nav-button" to={`${url}/breads`}>
              <button>Breads</button> <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-button" to={`${url}/cakes`}>
               <button>Cakes</button> 
              </Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-button" to={`${url}/snacks`}>
              <button>Snacks</button> 
              </Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-button" to={`${url}/brulle`}>
              <button>Brulle</button> 
              </Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-button" to={`${url}/tarts`}>
              <button>Tarts</button> 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
    
        <Route path={`${path}/:category?/:productId?`}>
          <Productlist />
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
