import Logo from "../assets/images/logo.jpg"
//import reactrouterdom
import {useNavigate} from "react-router-dom"
const Navbar = () => {

  const navigate = useNavigate()

  const onChangePage = (page)=>{
    navigate(page)
  }

  return (
    <div>
      <div className="navbar">
        <img src={Logo} alt="logo" id="logo" />
        <ul className="menu-bar">
          <li onClick={() => onChangePage('/')}>ABOUT US</li>
          <li onClick={() => onChangePage('/service')}>SERVICE</li>
          <li onClick={() => onChangePage('/blognnews')}>BLOG & NEWS</li>
          <li onClick={() => onChangePage('/contactus')}>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
