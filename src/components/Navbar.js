import "./Navbar.css";

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
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="news.asp">Login</a>
        </li>
        <li>
          <a href="contact.asp">Maker</a>
        </li>
        <li>
          <a href="about.asp">Info</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
