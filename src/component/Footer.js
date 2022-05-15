import React, { useState, useEffect } from "react"
import Cube from "../assets/images/cube.png"
import Logo from "../assets/images/logo-black.png"
import Avania from "../assets/images/partner/Avania.png"
import BNP from "../assets/images/partner/BNP.png"
import CryptoCup from "../assets/images/partner/Crypto Cup.png"
import GreatDreamGuild from "../assets/images/partner/Great Dream Guild.png"
import Moomonster from "../assets/images/partner/Moomonster.png"
import PRX from "../assets/images/partner/PRX.png"
import Varisoft from "../assets/images/partner/Varisoft.png"
import Wirtual from "../assets/images/partner/Wirtual.png"
import Facebook from '../assets/images/facebook.png'
import Email from '../assets/images/email.png'
import { useNavigate } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'
import
{
  HStack,
  Icon,
  Text,
  Image,
  Flex,
  Center
} from "@chakra-ui/react"
import { ImFacebook } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"

export default () =>
{
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  let navigate = useNavigate()

  let partner = [Avania, BNP, CryptoCup, GreatDreamGuild, Moomonster, PRX, Varisoft, Wirtual]



  let iconStyle = {
    border: '4px solid #fba653',
    padding: '8px',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: '#fff',
    transition: 'all 0.16s ease-in-out',
    _hover: {
      backgroundColor: '#fba653',
    }
  }

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


  const changePage = (page) =>
  {
    //scroll to top
    window.scrollTo(0, 0)
    navigate(page)
  }

  return (
    <div>
      <div className="partner">
        <h1>PARTNER</h1>
        <Center>
          <Flex width='90%' maxWidth='1440px' justifyContent='space-between'>
            {partner.map((item, index) => (
              <Image src={item} alt="cube" id="cube" width='144px'/>
            ))}
          </Flex>
        </Center>
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
        <Flex justify='space-around' gap='0px' width='50vw'>
          <HStack gap='16px'>
            <div className="foot-text">
              <h1>9 CAT DIGITAL</h1>
              <div className="welcome">
                <img src={Cube} alt="cube" id="cube" />
                <h2>Blockchain One-stop-service</h2>
              </div>
            </div>
            <img src={Logo} alt="logo" id="logo" />
          </HStack>
          <HStack fontFamily='arial' color='#fff' gap='8px'>
            <a onClick={() => changePage('/')}>
              <Text cursor='pointer'>HOME</Text>
            </a>
            <a onClick={() => changePage('/service')}>
              <Text cursor='pointer'>SERVICE</Text>
            </a>
            <a onClick={() => changePage('/blognnews')}>
              <Text cursor='pointer'>BLOG & NEWS</Text>
            </a>
            <a onClick={() => changePage('/contactus')}>
              <Text cursor='pointer'>CONTACT US</Text>
            </a>

          </HStack>
        </Flex>
        <HStack spacing={4}>
          <a href='https://www.facebook.com/9catdigital/' target='_blank'>
            <Icon as={ImFacebook} boxSize='60px' sx={iconStyle} />
          </a>
          <a href='mailto:contact@9catdigital.com' target='_blank'>
            <Icon as={AiOutlineMail} boxSize='60px' sx={iconStyle} />
          </a>
        </HStack>
      </div>
    </div>
  )
}
