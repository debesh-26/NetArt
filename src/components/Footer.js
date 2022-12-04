import React from "react";
import "./Footer.css";
import {MdCall} from "react-icons/md";
import {BsFacebook} from "react-icons/bs";
import {TfiWorld} from "react-icons/tfi"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </div>
      <div className="middle">
        <div className="border">CHEMICALS & PROCESS</div>
        <div className="border">POWER</div> 
        <div className="border">WATER & WASTE WATER</div> 
        <div className="border">PHARMA</div> 
        <div className="border">PAPER & PULP</div> 
        <div className="border">MARINE & DEFENCE</div> 
        <div className="border">METAL & MINING</div> 
        <div className="border">FOOD & BEVERAGE</div> 
        <div className="border">PETROCHEMICAL & REFINERIES</div> 
        <div className="border">SOLAR BUILDING</div> 
        <div className="border">HVAC</div> 
        <div className="border">FIRE FIGHTING</div>
        <div>AGRICULTURE & RESIDENTIAL</div>
      </div>
      <div className="bottom">
        <a href="tel:1800 200 1234" className="last"> <MdCall/>Toll Free&#160;<b>1800 200 1234</b></a>
        <a href="https://www.facebook.com/cripumps/" target="blank" className="last"><BsFacebook/>www.facebook.com/cripumps</a>
        <a href="https://www.crigroups.com/" target="blank" className="last"><TfiWorld/>www.crigroups.com</a>
      </div>
    </div>
  );
};

export default Footer;
