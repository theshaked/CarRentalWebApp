import "./CarModels.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import CarModel from "../CarModel/CarModel.js";
import { DaysBetweenDates } from "../../Utils/DateTime"
const CarModels = () =>
{

    const [cars, setCars] = useState([]);

    useEffect(() =>
    {
        const getCars = async () =>
        {
            const carsFromServer = await fetchCars();
            setCars(carsFromServer);
        };
        getCars();
    }, []);

    const fetchCars = async () =>
    {
        const res = await fetch("http://localhost:5000/cars");
        const data = await res.json();

        return data;
    };

    const { segmentName, SDate, EDate } = useParams(); //TODO use query-string lib
    const duration = DaysBetweenDates(new Date(SDate), new Date(EDate));
    const segmentModels = cars.filter(model => model.type == segmentName)
    return (
        segmentModels == 0 ? <h1>There is no {segmentName} in our inventory , try other segment</h1> :
            <div className="CarModels">
                <h1>{segmentName} cars in our inventory from </h1>
                <ul>
                    {segmentModels.map((model) => (
                        <CarModel model={model} duration={duration} />
                    ))}
                </ul>
            </div>
    );
};

export default CarModels;
