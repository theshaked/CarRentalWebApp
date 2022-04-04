import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../../images/LogoWhite.png';

const Navbar = () =>
{
  return (
    <div className="Navbar">
      <img
        id="Logo"
        alt="car"
        src={logo}
      />
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/CarPicker">Car Picker</Link>
        <Link to="/SignUp">Sign-Up</Link>
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
};

export default Navbar;
