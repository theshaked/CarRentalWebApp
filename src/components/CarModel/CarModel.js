import "./CarModel.css";

const CarModel = ({ model }) =>
{
    return (
        <div className="CarModel">
            <h2> {model.brand} - {model.modelName}</h2>
            <img alt="car" src={model.img} />
            <div className="flex-row">
                <h3>שנת: {model.year} </h3>
                <h3>קילומארז: {model.year} </h3>
                <h3>סניף: {model.year} </h3>
            </div>
            <h3>הערות: {model.review}</h3>

            <div className="flex-row">
                <h3>מחיר ליום: {model.pricePerDay}₪ </h3>
                <h3>מחיר לשבוע: {model.pricePerDay}₪ </h3>
            </div>
        </div>
    );
};

export default CarModel;
