import "./CarModel.css";

const CarModel = ({ model }) =>
{
    return (
        <div className="CarModel">
            {/* <h1>This is all the {car} cars in our inventory:</h1>*/}

            <h2> {model.brand} - {model.modelName}</h2>
            <img alt="car" src={model.img} />
            <div className="info">
                <h2>שנת עליה לכביש: {model.year} </h2>
                <h2>מחיר ליום: {model.pricePerDay}₪ </h2>
                <h3>הערות: {model.review}</h3>

            </div>

        </div>
    );
};

export default CarModel;
