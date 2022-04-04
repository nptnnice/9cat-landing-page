import Logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={Logo} alt="logo" id="logo" />
        <ul className="menu-bar">
          <li>ABOUT US</li>
          <li>SERVICE</li>
          <li>BLOG & NEWS</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
