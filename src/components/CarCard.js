import "./CarCard.css";
import { Link } from "react-router-dom";

const CarCard = ({ brandName, imgsrc, slogan }) => {
  return (
    <Link to={`/car_picker/${brandName}`}>
      <div className="CarCard">
        <img alt="car" src={imgsrc} />
        <li>
          <h2>{brandName}</h2>
          <h3>
            {brandName} - {slogan}
          </h3>
        </li>
      </div>
    </Link>
  );
};

export default CarCard;
