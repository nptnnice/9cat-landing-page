import React from "react";
import Logo from "../assets/images/logo.png";
import Cube from "../assets/images/cube.png";
import Logobw from "../assets/images/logobw.png";
import Close from "../assets/images/close.png";
//import reactrouterdom
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const onChangePage = (page) => {
    navigate(page);
  };

  return (
    <>
      <div className={"nav-mobile" + (sidebar ? " show" : "")}>
        <img
          src={Close}
          alt="close"
          id="close"
          onClick={() => {
            setSidebar(false);
          }}
        />
        <div className="logo-mobile">
          <img src={Logobw} alt="logo" />
        </div>
        <ul className="menu-mobile">
          <li
            onClick={() => {
              onChangePage("/");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setSidebar(false);
            }}
          >
            <img src={Cube} alt="cube" id="cube" />
            HOME
          </li>
          <li
            onClick={() => {
              onChangePage("/service");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setSidebar(false);
            }}
          >
            <img src={Cube} alt="cube" id="cube" />
            SERVICE
          </li>
          <li
            onClick={() => {
              onChangePage("/blognnews");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setSidebar(false);
            }}
          >
            <img src={Cube} alt="cube" id="cube" />
            BLOG & NEWS
          </li>
          <li
            onClick={() => {
              onChangePage("/contactus");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setSidebar(false);
            }}
          >
            <img src={Cube} alt="cube" id="cube" />
            CONTACT US
          </li>
        </ul>
      </div>

      <div className="navbar">
        <div className="navbar-logo">
          <img
            src={Logo}
            alt="logo"
            id="logo"
            onClick={() => {
              onChangePage("/");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          />
          <img src={Cube} alt="cube" id="cube" />
          <h1>"BLOCKCHAIN ONE-STOP-SERVICE"</h1>
        </div>
        <ul className="menu-bar">
          <li
            onClick={() => {
              onChangePage("/");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={Cube} alt="cube" id="cube" />
            HOME

          </li>
          <li
            onClick={() => {
              onChangePage("/service");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={Cube} alt="cube" id="cube" />
            SERVICE
          </li>
          <li
            onClick={() => {
              onChangePage("/blognnews");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={Cube} alt="cube" id="cube" />
            BLOG & NEWS
          </li>
          <li
            onClick={() => {
              onChangePage("/contactus");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={Cube} alt="cube" id="cube" />
            CONTACT US
          </li>
        </ul>
        <div
          className="nav-burger"
          onClick={() => {
            setSidebar(true);
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};
