import "./CarModel.css";
import { useParams } from "react-router-dom";

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
        id: 1,
        brand: "Kia",
        modelName: "Picanto",
        type: "Mini",
        year: "2019",
        pricePerDay: "280",
        review: "במצב טוב",
        img: "https://images.auto.co.il/Attachment/Gallery/243916/1654690/Kia-Picanto-2021-1600-15-removebg.png?width=480",
    },
];


const CarModel = () =>
{
    const { car } = useParams();
    return (
        <div className="CarModel">
            {/* <h1>This is all the {car} cars in our inventory:</h1>*/}

            <h2> {carsInventory[0].brand} - {carsInventory[0].modelName}</h2>
            <img alt="car" src={carsInventory[0].img} />
            <div className="info">
                <h2>שנת עליה לכביש: {carsInventory[0].year} </h2>
                <h2>מחיר ליום: {carsInventory[0].pricePerDay}₪ </h2>
                <h2>הערות: {carsInventory[0].review}</h2>

            </div>

        </div>
    );
};

export default CarModel;
