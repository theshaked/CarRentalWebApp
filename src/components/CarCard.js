import "./CarCard.css";

const CarCard = ({ brandName }) => {
  return (
    <div className="CarCard">
      <img
        alt="car"
        src="https://images.auto.co.il/Attachment/Gallery/243916/1654690/Kia-Picanto-2021-1600-15-removebg.png?width=480"
      />
      <li>
        <h2>{brandName}</h2>
        <h3>{brandName} is the best car</h3>
      </li>
    </div>
  );
};

export default CarCard;
