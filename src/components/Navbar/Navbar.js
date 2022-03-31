import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () =>
{
  return (
    <div className="Navbar">
      <img
        id="Logo"
        alt="car"
        src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
      />
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/car_picker">Car Picker</Link>
        <Link to="/temp">Temp</Link>
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
};

export default Navbar;
