import React, { useState, useEffect } from "react"
import Cube from "../assets/images/cube.png"
import Avania from "../assets/images/partner/Avania.png"
import BNP from "../assets/images/partner/BNP.png"
import CryptoCup from "../assets/images/partner/Crypto Cup.png"
import GreatDreamGuild from "../assets/images/partner/Great Dream Guild.png"
import Moomonster from "../assets/images/partner/Moomonster.png"
import PRX from "../assets/images/partner/PRX.png"
import Varisoft from "../assets/images/partner/Varisoft.png"
import Wirtual from "../assets/images/partner/Wirtual.png"
import Facebook from '../assets/images/facebook.png'
import Email from '../assets/images/email_white.png'
import { useNavigate } from "react-router-dom";
import Logo from '../assets/images/logo.png'


// import axios from "axios";

export default () =>
{
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onChangePage = (page) =>
  {
    navigate(page)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })

  };

  const onSend = (e) =>
  {
    e.preventDefault()
    // axios.post("", {
    //     name: name,
    //     email: email,
    //     message: message
    //   })
    //   .then((res) => {
    //     alert("already sent!");
    //   });
    setIsSubmitted(true)
  }

  let partner = [Avania, BNP, CryptoCup, GreatDreamGuild, Moomonster, PRX, Varisoft, Wirtual, Avania, BNP, CryptoCup, GreatDreamGuild, Moomonster, PRX, Varisoft, Wirtual]


  useEffect(() =>
  {
    if (isSubmitted == true)
    {
      let loop = setInterval(() =>
      {
        setIsSubmitted(false)
      }, 3000)
      return () => clearInterval(loop)
    }
  }, [isSubmitted])

  return (
    <div>
      <div className="partner">
        <h1>PARTNER</h1>
        <div className="carousel">
          <div className="slidebar">
            {partner.map((item, index) =>
            {

              return <img src={item} alt="cube" className="move" />
            }
            )}

          </div>
        </div>
      </div>
      <div className="footer">
        {/* <form className="form">
          <input
            type="text"
            placeholder="name"
            className="namebox"
            onChange={(e) =>
            {
              setName(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="email"
            className="emailbox"
            onChange={(e) =>
            {
              setEmail(e.target.value)
            }}
          />
          <textarea
            type="text"
            placeholder="message"
            className="messagebox"
            onChange={(e) =>
            {
              setMessage(e.target.value)
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
          
        </form> */}
        <div className="foot-text">
          <div className="left">
            <h1>9 CAT DIGITAL</h1>
            <div className="welcome">
              <img src={Cube} alt="cube" id="cube" />
              <h2>WELCOME TO OUR SERVICE</h2>
            </div>
          </div>
          <img src={Logo} alt="logo" id="logo" />
          <div className='menu-flex'>
            <span onClick={() => onChangePage('/')}>
              HOME
            </span>
            <span onClick ={() => onChangePage('/service')}>
              SERVICE
            </span>
            <span onClick ={() => onChangePage('/blognnews')}>
              BLOG & NEWS
            </span>
            <span onClick ={() => onChangePage('/contactus')}>
              CONTACT US
            </span>

          </div>
          <div>
            <a href='https://www.facebook.com/9catdigital' target='_blank'>
              <img src={Facebook} className='contact'></img>
            </a>
            <a href='mailto:contact@9catdigital.com' target='_blank'>
              <img src={Email} className='contact'></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
