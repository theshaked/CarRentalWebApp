import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img
        id="Logo"
        alt="car"
        src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
      />
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/car_picker">Car Picker</a>
        </li>
        <li>
          <a href="/temp">Temp</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
