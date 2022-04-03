import "./CarSegment.css";
import { Link } from "react-router-dom";

const CarSegment = ({ type, imgsrc, review }) =>
{
  return (
    <Link to={type}>
      <div className="CarSegment">
        <img alt="car" src={imgsrc} />
        <li>
          <h2>{type}</h2>
          <h3>
            {type} - {review}
          </h3>
        </li>
      </div>
    </Link>
  );
};

export default CarSegment;
