import React from "react";
import Marketing from "../assets/images/marketing.png";
import Consult from "../assets/images/consult.png";
import VC from "../assets/images/vc.png";
import Media from "../assets/images/media.png";
import Visual from "../assets/images/visual.png";
import Finance from "../assets/images/finance.png";
import Game from "../assets/images/game.png";
import Developer from "../assets/images/developer.png";
import Contract from "../assets/images/contract.jpeg";
import Website from "../assets/images/website.jpeg";
import Web3 from "../assets/images/web3.jpeg";
import Dapp from "../assets/images/dapp.jpeg";

export default () => {
  return (
    <div>
      <div className="service-head">
        <div className="triangle1"></div>
        <h1>SERVICE</h1>
        <div className="triangle2"></div>
      </div>
      <div className="service-body">
        <div className="container1">
          <img src={Marketing} alt="marketing" />
          <h2>Margeting</h2>
          <p>
            เราอยู่เบื้องหลังความสำเร็จของโปรเจคหลายโปรเจค
            เราสามารถช่วยผลักดันการตลาดและคอมมิวนิตี้ให้ถึงเป้าหมายได้
          </p>
        </div>
        <div className="container2">
          <img src={Consult} alt="consult" />
          <h2>Consult</h2>
          <p>
            Margeting Consult<br></br>Tokenomic design
          </p>
        </div>
        <div className="container2">
          <img src={VC} alt="VC" />
          <h2>VC</h2>
          <p>
            เราโฟกัสการลงทุนใน Game-fi Financial Project and Blockchain
            Infrastructure
          </p>
        </div>
        <div className="container1">
          <img src={Media} alt="media" />
          <h2>Media</h2>
          <p>Art design, Sound Studio</p>
        </div>
        <div className="container1">
          <img src={Visual} alt="visual" />
          <h2>Visual Art</h2>
          <p>ให้บริการ visual art ตามความต้องการของลูกค้า</p>
        </div>
        <div className="container2">
          <img src={Finance} alt="finance" />
          <h2>Decentralized Finance</h2>
          <p>
            สามารถช่วยเหลือและสร้างแพลตฟอร์ม defi ได้ตามที่ลูกค้่าต้องการ
            และมีการติดตามผลอย่างต่อเนื่องเพื่อให้โปรดักออกมาเพื่อแข่งขันในตลาดได้่
          </p>
        </div>
      </div>
      <div className="nft-game">
        <img src={Game} alt="game" />
        <div className="container">
          <h2>NFT Gamefi</h2>
          <p>
            พวกเราสามารถช่วยเหลือดีไซน์เกมตามคอนเซปต์ที่ลูกค้าต้องการ
            โดยสามารถทำได้ตั้งแต่ก่อนเริ่มจนโปรเจคปล่อยออกมา
            รวมทั้งการดูแลและพัฒนาอย่างต่อเนื่อง
          </p>
        </div>
      </div>
      <div className="developer">
        <div className="dev-text">
          <img src={Developer} alt="developer" />
          <h2>DEVELOPER</h2>
          <p>
            ทางเรามีทีม Developer
            ที่มีประสบการณ์คอยให้บริการเพื่อรองรับความต้องการของลูกค้า
            ไม่ว่าแบบไหนในโลกของ Cryptocurrency
          </p>
        </div>
        <div className="dev-box">
          <div className="dev-flex">
            <div className="container1">
              <img src={Contract} alt="contract" />
              <h2>Smart Contract</h2>
            </div>
            <div className="container2">
              <img src={Website} alt="website" />
              <h2>Website</h2>
            </div>
          </div>
          <div className="dev-flex">
            <div className="container2">
              <img src={Web3} alt="web3" />
              <h2>Web3 Platform</h2>
            </div>
            <div className="container1">
              <img src={Dapp} alt="Dapp" />
              <h2>DApp</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
