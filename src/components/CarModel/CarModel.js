import "./CarModel.css";

const CarModel = ({ model }) =>
{
    return (
        <div className="CarModel">

            <img alt="car" id="Car" src={model.img} />
            <div className="flex-row">
                <img id="Logo" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Opel-Logo_2017.svg" />
                <div className="bold">
                    <p>{model.brand}</p>
                    <p>{model.modelName}</p>
                </div>
            </div>
            <line />
            <tr>
                <td>Model year:</td>
                <td>{model.year}</td>
            </tr>
            <p>{model.review}</p>
            <line />
            <tr>
                <td>Price Per Day:</td>
                <td>{model.pricePerDay}₪</td>
            </tr>
            <tr>
                <td>Price Per Week:</td>
                <td>{7 * model.pricePerDay}₪</td>
            </tr>
            <button>הזמן</button>
        </div>
    );
};

export default CarModel;
