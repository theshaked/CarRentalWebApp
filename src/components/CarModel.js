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
        <div>
            <h1>This is all the {car} cars in our inventory:</h1>

            <h3>{carsInventory[0].brand} - {carsInventory[0].modelName}</h3>
            <h4>year {carsInventory[0].year} , {carsInventory[0].pricePerDay}₪ </h4>

            <h3>{carsInventory[1].brand} - {carsInventory[1].modelName}</h3>
            <h4>year {carsInventory[1].year} , {carsInventory[1].pricePerDay}₪ </h4>
        </div>
    );
};

export default CarModel;
