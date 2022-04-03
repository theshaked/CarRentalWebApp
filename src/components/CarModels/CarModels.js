import "./CarModels.css";
import { useParams } from "react-router-dom";
import CarModel from "../CarModel/CarModel.js";

const carsInventory = [
    {
        id: 1,
        brand: "Kia",
        modelName: "Picanto",
        type: "Mini",
        year: "2018",
        pricePerDay: "250",
        review: "רכב שמור נהג אחד בלבד, כל הקודם זוכה!",
        img: "https://images.auto.co.il/Attachment/Gallery/243916/1654690/Kia-Picanto-2021-1600-15-removebg.png?width=480",
    },
    {
        id: 2,
        brand: "Kia",
        modelName: "Picanto",
        type: "Mini",
        year: "2019",
        pricePerDay: "280",
        review: "במצב טוב",
        img: "https://images.auto.co.il/Attachment/Gallery/243916/1654690/Kia-Picanto-2021-1600-15-removebg.png?width=480",
    },
    {
        id: 3,
        brand: "Opel",
        modelName: "Corsa",
        type: "Super-Mini",
        year: "2022",
        pricePerDay: "500",
        review: "חדש בנילונים",
        img: "https://www.ccarprice.com/products/Opel-Corsa-2020_1.jpg",
    },
    {
        id: 4,
        brand: "Seat",
        modelName: "Ibiza",
        type: "Super-Mini",
        year: "2021",
        pricePerDay: "450",
        review: "נסע רק 10 אלף קילומטרים",
        img: "https://carfind-cdn-media.azureedge.net/cars/LF/seat_ibiza_hatchback_benzin_5-doors_lf.webp",
    },
];



const CarModels = () =>
{
    const { segmentName } = useParams(); //TODO use query-string lib
    const segmentModels = carsInventory.filter(model => model.type == segmentName)
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
