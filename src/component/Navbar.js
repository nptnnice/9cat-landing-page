import Logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={Logo} alt="logo" id="logo" />
        <h1>"ปราดเปรียวบนโลกบล็อกเชน ดูแลจบครบในที่เดียว"</h1>
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
