import React from "react";
import "./Body.css";
import img1 from "../asserts/1.png";
import img2 from "../asserts/2.png";

const Body = () => {
  return (
    <div className="container">
      <div className="body-img-left">
        <img src={img1} className="img1" />
      </div>
      <div className="right-side">
        <b>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </b>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <div className="right-img">
          <img src={img2} className="img2" alt="img2" />
        </div>
        <p>
          Government of India has awarded the{" "}
          <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
          Joint Managing Director of C.R.I. Group received the award from Smt.
          Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
          Honorable Minister of State.
        </p>
      </div>
    </div>
    
  );
};

export default Body;
