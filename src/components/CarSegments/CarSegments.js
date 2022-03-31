import CarSegment from "../CarSegment/CarSegment";
import "./CarSegments.css";

const carsArr = [
  {
    id: 1,
    type: "Mini",
    slogan: "Movement that inspires",
    review: "Best bang for buck",
    img: "https://images.auto.co.il/Attachment/Gallery/243916/1654690/Kia-Picanto-2021-1600-15-removebg.png?width=480",
  },
  {
    id: 2,
    type: "Super-Mini",
    slogan: "The Future is Everyone",
    review: "your go-to German Car",
    img: "https://opel.co.il/wp-content/uploads/2020/06/view1-3-1-e1591084605603.jpg",
  },
];

const CarSegments = () =>
{
  return (
    <div className="CarSegments">
      <ul>
        {carsArr.map((car) => (
          <CarSegment type={car.type} imgsrc={car.img} slogan={car.slogan} />
        ))}
      </ul>
    </div>
  );
};

export default CarSegments;
