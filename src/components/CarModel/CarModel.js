import "./CarModel.css";

const CarModel = ({ model }) =>
{
    return (
        <div className="CarModel Grow LightCard">
            <div className="SamePostion">
                <img className="Grayscale" alt="heart" id="Heart" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg" />
                <img alt="car" id="Car" src={model.img} />
            </div>

            <div className="flex-row">
                <img id="Logo" alt="logo" src={model.logo} />
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
                <td className="bold">{model.pricePerDay}₪</td>
            </tr>
            <tr>
                <td>Price Per Week:</td>
                <td className="bold">{7 * model.pricePerDay}₪</td>
            </tr>
            <button>Order!</button>
        </div>
    );
};

export default CarModel;
