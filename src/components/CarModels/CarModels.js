import "./CarModels.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import CarModel from "../CarModel/CarModel.js";
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

    const { segmentName } = useParams(); //TODO use query-string lib
    const segmentModels = cars.filter(model => model.type == segmentName)
    return (
        segmentModels == 0 ? <h1>There is no {segmentName} in our inventory , try other segment</h1> :
            <div className="CarModels">
                <h1>This is all the {segmentName} cars in our inventory:</h1>
                <ul>
                    {segmentModels.map((model) => (
                        <CarModel model={model} />
                    ))}
                </ul>
            </div>
    );
};

export default CarModels;
