import React from "react";
import "./Body.css";
import Baner from "../Assets/Baner.png";

function Body() {
  return (
    <div className="Body">
      <div className="Baner">
        <img src={Baner} alt="foto1" className="Body_Banner" />
      </div>
    </div>
  );
}

export default Body;
