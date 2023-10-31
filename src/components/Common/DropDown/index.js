import "./index.css";
import {AiFillCaretDown} from 'react-icons/ai';
import { Link } from "react-router-dom";
const DropDown=({header,items})=>
{
    return(
<div className="dropdown">
  <button className="dropbtn">{header}<AiFillCaretDown/></button>
  <div className="dropdown-content">
  {
  items.length > 0 ? (
    items.map(
    (obj) => {
    return(<Link className="dropdownItem" to={obj.link}>{obj.name}</Link>);
  })):<Link to="/" >No Data</Link>
}
    
  </div>
</div>

    );
}
export default DropDown;