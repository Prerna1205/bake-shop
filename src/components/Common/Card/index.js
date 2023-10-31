import "./index.css";

const Card = ({heading,data}) => {
  return (
    <div className="card" >
        
        <img src={data} alt={heading} />   
        <h3>{heading}</h3>
    </div>
  );
};
export default Card;
