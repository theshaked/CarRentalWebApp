import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../../images/GlobusCarsLogoBlueCrop.png';

const Navbar = ({ token }) =>
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
        {token ?
          <Link to="/MyAccont">{token}'s Accont</Link> :
          <Link to="/Login">Login</Link>
        }
      </ul>
    </div>
  );
};

export default Navbar;
