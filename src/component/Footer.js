import React from "react";
import Cube from "../assets/images/cube.png";
import Logo from "../assets/images/logo-black.png";

export default () => {
  return (
    <div>
      <div className="partner">
          <h1>PARTNER</h1>
          <div className="carousel">
            <img src={Cube} alt="cube" id="cube" />
            <img src={Cube} alt="cube" id="cube" />
            <img src={Cube} alt="cube" id="cube" />
            <img src={Cube} alt="cube" id="cube" />
            <img src={Cube} alt="cube" id="cube" />
            <img src={Cube} alt="cube" id="cube" />
            <img src={Cube} alt="cube" id="cube" />
            <img src={Cube} alt="cube" id="cube" />
            <img src={Cube} alt="cube" id="cube" />
          </div>
      </div>
      <div className="footer">
        <form className="form">
          <input type="text" placeholder="NAME" className="namebox" />
          <input type="text" placeholder="EMAIL" className="emailbox" />
          <input type="text" placeholder="MESSAGE" className="messagebox" />
        </form>
        <div className="foot-text">
          <h1>9 CAT DIGITAL</h1>
          <div className="welcome">
            <img src={Cube} alt="cube" id="cube" />
            <h2>WELCOME TO OUR SERVICE</h2>
          </div>
        </div>
        <img src={Logo} alt="logo" id="logo" />
      </div>
    </div>
  );
};
