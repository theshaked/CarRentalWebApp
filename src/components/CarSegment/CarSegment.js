import "./CarSegment.css";
import { Link } from "react-router-dom";

const CarSegment = ({ type, imgsrc, review }) =>
{
  return (
    <Link to={type}>
      <div className="CarSegment ButtonEffects LightCard">
        <img alt="car" src={imgsrc} />
        <li>
          <h2>{type}</h2>
          <p>{review}
          </p>
        </li>
      </div>
    </Link>
  );
};

export default CarSegment;
