import React from "react"
import Logo from "../assets/images/logocrop.jpg"
import Focus from "../assets/images/target.png"
import Decentralized from "../assets/images/decentralized.png"
import Blockchain from "../assets/images/blockchain.png"
import Coin from "../assets/images/dollar.png"
import { Center } from '@chakra-ui/react'

export default () =>
{
  return (
    <div>
      <div className="header">
        <div className="container">
          <img src={Logo} alt="logo" />
          <h1>9 CAT DIGITAL</h1>
        </div>
        <p>
          ผู้ให้บริการด้านการพัฒนาโปรเจคบล็อคเชนโซลูชั่นแบบ One-stop-service ที่เดียวจบ ดูแลครบวงจร
          โดยผู้เชี่ยวชาญในแต่ละด้าน ไม่ว่าจะเป็น ด้านการตลาด ด้านการพัฒนา (Development)
          ทั้ง ระบบ Tokenomic, ระบบ NFT และ Smart Contract ในแบบตามที่ต้องการ
          และทางบริษัทยังมีประสบการณ์ในการพัฒนาและดูแล Project ในโลกคริปโตมากมาย
        </p>
        <div className="arrow-top">
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
        </div>
        <div className="arrow-bottom">
          <div className="triangle"></div>
          <div className="triangle"></div>
        </div>
      </div>
      <div className="onestop">
        <div className="onestop-head">
          <div className="triangle1"></div>
          <h1>INVESTMENT FOCUS</h1>
          <div className="triangle2"></div>
        </div>
        <div className="onestop-body">
          <div className="arrow1">
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
          </div>
          <div className="container2">
            <Center>
              <img src={Decentralized} alt="decentralized" />
            </Center>
            <h2>
              Decentralized<br></br> Finance
            </h2>
          </div>
          <div className="container2">
            <Center>
              <img src={Blockchain} alt="blockchain" />
            </Center>
            <h2>Blockchain Infrastructure</h2>
          </div>
          <div className="container2">
            <Center>
              <img src={Coin} alt="coin" />
            </Center>
            <h2>GameFi</h2>
          </div>
          <div className="arrow2">
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
          </div>
        </div>
      </div>
      <div className="about-head">ABOUT US</div>
      <div className="about-body">
        <p>
          ทางเราสามารถให้บริการให้คำปรึกษาและเริ่มสร้างโครงการเกี่ยวกับ
          Cryptocurrency ได้ตั้งแต่เริ่มต้นโปรเจคจากไม่มีอะไรเลย
          ไปจนถึงโครงการประสบความสำเร็จ
        </p>
        <div className="step-container">
          <div className="step-item1">
            <h2>Planning</h2>
            <div className="triangle1"></div>
          </div>
          <div className="step-item2">
            <h2>Execution</h2>
            <div className="triangle2"></div>
          </div>
          <div className="step-item3">
            <h2>Marketing</h2>
            <div className="triangle1"></div>
          </div>
          <div className="step-item4">
            <h2>Monitoring & Control</h2>
            <div className="triangle2"></div>
          </div>
          <div className="step-item5">
            <h2>Closure</h2>
            <div className="triangle1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
