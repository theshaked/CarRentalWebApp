import "./CarModel.css";

const CarModel = ({ model, duration }) =>
{
    const OrderCar = async () =>
    {
        //const res = await fetch("http://localhost:5000/cars");
        //const data = await res.json();

        //return data;
        console.log("OrderCar");
    };

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
                <td>Price for {duration} days:</td>
                <td className="bold">{duration * model.pricePerDay}₪</td>
            </tr>
            <button onClick={OrderCar}>Order!</button>
        </div>
    );
};

export default CarModel;
