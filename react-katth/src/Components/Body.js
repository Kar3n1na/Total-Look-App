import React from "react";
import "./Body.css";
import Baner from "../Assets/Baner.png";
import Card from "../Components/Card"

function Body({mergedArray}) {
  return (
    <div className="Body">
      <div className="Baner">
        <img src={Baner} alt="foto1" className="Body_Banner" />
        <Card
        mergedArray={mergedArray}
        />
      </div>
    </div>
  );
}

export default Body;
