import React from "react";
import "../components/Lower.css";
import img3 from "../asserts/3.png";

const Lower = () => {
  return (
    <div className="lower">
      <div className="first">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </div>
      <div className="second">
        <img src={img3} alt="img3" className="img3" />
      </div>
      <div className="third">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </div>
    </div>
  );
};

export default Lower;
