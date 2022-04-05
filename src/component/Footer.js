import React, { useState, useEffect } from "react";
import Cube from "../assets/images/cube.png";
import Logo from "../assets/images/logo-black.png";
// import axios from "axios";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSend = (e) => {
    e.preventDefault();
    // axios.post("", {
    //     name: name,
    //     email: email,
    //     message: message
    //   })
    //   .then((res) => {
    //     alert("already sent!");
    //   });
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted == true) {
      let loop = setInterval(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => clearInterval(loop);
    }
  }, [isSubmitted]);

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
          <input
            type="text"
            placeholder="name"
            className="namebox"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="email"
            className="emailbox"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            type="text"
            placeholder="message"
            className="messagebox"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          {isSubmitted == false ? (
            <button
              type="submit"
              className="sent-btn"
              onClick={(e) => onSend(e)}
            >
              submit
            </button>
          ) : (
            <button
              type="submit"
              className="sent-btn"
              onClick={(e) => onSend(e)}
            >
              sent!
            </button>
          )}
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
