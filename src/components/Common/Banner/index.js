import "./index.css";
import {useHistory} from 'react-router-dom';
const Banner = () => {
  const history=useHistory();
  return (
    <div className="banner">
      <div className="heading">
        <b>The Bake Shop</b>
        <br></br>
        <small>We bake happiness.</small>
        <div className="orderDiv">
        <button className="orderBtn" onClick={()=>{history.push("/shop")}}>Order Now! </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
