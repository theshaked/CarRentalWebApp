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
    img: "https://cdn.imagin.studio/getImage?angle=01&customer=carwow&make=kia&modelFamily=picanto&modelVariant=hatchback&modelYear=2022&paintDescription=solid---honey-bee+D8BD42&paintId=156707&tailoring=carwow&width=430&zoomLevel=60&zoomType=fullscreen",
  },
  {
    id: 2,
    type: "Super-Mini",
    review: "They are practical for transporting small loads,popular with young drivers or those on a budget.",
    img: "https://cdn.imagin.studio/getImage?angle=01&customer=carwow&make=volkswagen&modelFamily=polo&modelVariant=hatchback&modelYear=2022&paintDescription=solid---ascot-grey+A6A59C&paintId=144289&tailoring=carwow&width=430&zoomLevel=60&zoomType=fullscreen",
  },
  {
    id: 3,
    type: "SUV",
    review: "ideal for transporting equipment like watersports equipment and bicycles.",
    img: "https://cdn.imagin.studio/getImage?angle=01&customer=carwow&make=peugeot&modelFamily=2008&modelVariant=estate&modelYear=2020&paintDescription=metallic---orange-fusion+DD9C0A&paintId=146196&tailoring=carwow&width=430&zoomLevel=60&zoomType=fullscreen",
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
          <CarSegment type={car.type}
            SDate={startDate?.toISOString().split('T', 1)[0]}
            EDate={finishDate?.toISOString().split('T', 1)[0]} imgsrc={car.img} review={car.review} />
        ))}
      </ul>
    </div>
  );
};

export default CarSegments;
