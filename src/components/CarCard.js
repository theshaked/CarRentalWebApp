import "./CarCard.css";
import { Link } from "react-router-dom";

const CarCard = ({ type, imgsrc, slogan }) =>
{
  return (
    <Link to={type}>
      <div className="CarCard">
        <img alt="car" src={imgsrc} />
        <li>
          <h2>{type}</h2>
          <h3>
            {type} - {slogan}
          </h3>
        </li>
      </div>
    </Link>
  );
};

export default CarCard;
