import CarSegment from "../CarSegment/CarSegment";
import DateStartFinish from "../DateStartFinish/DateStartFinish";
import { DaysBetweenDates } from "../../Utils/DateTime"
import { useState, useEffect } from 'react'
import "./CarSegments.css";

const carsArr = [
  {
    id: 1,
    type: "Mini",
    review: "best for city driving, as they are easy to manoeuver through the traffic and are also cheaper to maintain",
    img: "https://images.auto.co.il/Attachment/Gallery/243916/1654690/Kia-Picanto-2021-1600-15-removebg.png?width=480",
  },
  {
    id: 2,
    type: "Super-Mini",
    review: "They are practical for transporting small loads,popular with young drivers or those on a budget.",
    img: "https://opel.co.il/wp-content/uploads/2020/06/view1-3-1-e1591084605603.jpg",
  },
  {
    id: 3,
    type: "SUV",
    review: "ideal for transporting equipment like watersports equipment and bicycles.",
    img: "https://kong-proxy-aws.toyota-europe.com/c1-images/resize/ccis/680x680/zip/il/product-token/ff850f57-bfb4-475a-a327-792e46796991/vehicle/90e3b741-83cc-4c2a-a4cb-8dcf89b89eed/padding/50,50,50,50/image-quality/70/day-exterior-4_040.png",
  },
];

const CarSegments = () =>
{
  const [validDates, setValidDates] = useState();
  const [startDate, setStartDate] = useState();
  const [finishDate, setFinishDate] = useState();
  const [duration, setDuration] = useState();

  useEffect(() =>
  {
    validDates && setDuration(DaysBetweenDates(startDate, finishDate));
  }, [startDate, finishDate]);

  return (
    <div className="CarSegments">
      <div className="DateRow">
        <DateStartFinish setValidDates={setValidDates} setStartDate={setStartDate} setFinishDate={setFinishDate} />
        {validDates ? <h1>Rental time of {duration} Days</h1> : <h1>Please insert valid dates</h1>}
      </div>
      <ul>
        {carsArr.map((car) => (
          <CarSegment type={car.type} imgsrc={car.img} review={car.review} />
        ))}
      </ul>
    </div>
  );
};

export default CarSegments;
