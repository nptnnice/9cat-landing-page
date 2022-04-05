import Logo from "../assets/images/logo.jpg";
import Cube from "../assets/images/cube.png";
//import reactrouterdom
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  const onChangePage = (page) => {
    navigate(page);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" id="logo" />
          <img src={Cube} alt="cube" id="cube" />
          <h1>"ปราดเปรียวบนโลกบล็อกเชน ดูแลจบครบในที่เดียว"</h1>
        </div>
        <ul className="menu-bar">
          <li onClick={() => onChangePage("/")}>
            <img src={Cube} alt="cube" id="cube" />
            ABOUT US
          </li>
          <li onClick={() => onChangePage("/service")}>
            <img src={Cube} alt="cube" id="cube" />
            SERVICE
          </li>
          <li onClick={() => onChangePage("/blognnews")}>
            <img src={Cube} alt="cube" id="cube" />
            BLOG & NEWS
          </li>
          <li onClick={() => onChangePage("/contactus")}>
            <img src={Cube} alt="cube" id="cube" />
            CONTACT US
          </li>
        </ul>
      </div>
    </div>
  );
};
