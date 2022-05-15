import React from "react"
import Logocrop from "../assets/images/logocrop.jpg"
import Logo from "../assets/images/logo.png"
import Technicals from "../assets/images/technicals.png"
import Business from "../assets/images/business.png"
import Facebook from "../assets/images/facebook.png"
import Email from "../assets/images/email.png"
import Coming from "../assets/images/comingsoon.png"
import {Box} from "@chakra-ui/react"
export default () =>
{
  return (
    <div>
      {/* <div className="contactus">
        <div className="left">
          <img src={Logocrop} alt="logocrop" />
          <h1>
            Marketing &<br></br>Community
          </h1>
        </div>
        <div className="right">
          การให้บริการทางการตลาดผ่านโซเชียลเน็ตเวิร์กหลากหลายแพลตฟอร์ม
          ทั้งยังมีการวิเคราะห์ติดตามการเติบโตของประสิทธิภาพการตลาดอย่างเต็มที่
          รวมไปถึงการสร้าง community
          เพื่อสร้างความผูกพันให้กับแบรนด์หรือผลิตภัณฑ์ของลูกค้า
          ทางเรามีประสบการณ์นำพาโครงการให้ประสบความสำเร็จมาแล้วหลายโครงการ
        </div>
      </div> */}
      {/* <div className="arrow-top">
        <div className="triangle"></div>
        <div className="triangle"></div>
        <div className="triangle"></div>
      </div>
      <div className="arrow-bottom">
        <div className="triangle"></div>
        <div className="triangle"></div>
      </div> */}
      {/* <div className="team">
        <div className="team-head">
          <div className="triangle1"></div>
          <h1>TEAM</h1>
          <div className="triangle2"></div>
        </div>
        <div className="team-body">
          <div className="container">
            <img src={Technicals} alt="technicals" />
            <h2>TECHNICALS</h2>
            <p>
              ทีมงานมีผู้เชี่ยวชาญเฉพาะทางเพื่อตอบโจทย์กับความต้องการของลูกค้าหลากหลายรูปแบบ
            </p>
          </div>
          <div className="container">
            <img src={Business} alt="business" />
            <h2>BUSINESS</h2>
            <p>
              ทีมงานเชี่ยวชาญด้านการบริหารและด้านการจัดการ
              รวมไปถึงการดูแลลูกค้ากับการหาพาร์ทเนอร์
            </p>
          </div>
        </div>
      </div> */}
      <Box marginTop='200px'/>
      <div className="contact-head">
        <div className="triangle1"></div>
        <h1>CONTACT</h1>
        <div className="triangle2"></div>
      </div>
      <div className="contact-body">
        <div className="contact-container">
          <img src={Logo} alt="logo" />
          <div className="container">
            <a href='https://www.facebook.com/9catdigital/' target='_blank'>
              <img src={Facebook} alt="facebook" />
            </a>
            <a href='mailto:contact@9catdigital.com' target='_blank'>
              <img src={Email} alt="email" />
            </a>
          </div>
        </div>
        <div className="community">
          <h2>COMMUNITY</h2>
          <img src={Coming} alt="comingsoon" />
        </div>
      </div>
    </div>
  )
}
