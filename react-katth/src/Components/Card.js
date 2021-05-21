import React from "react";
import "./Card.css";
//import imagen from "../Assets/baner3.jpg"



function Card() {
  return (
    <div className="Card">
      <img className="Card_img" alt="">{}</img> 
      <p>Descripción del Producto</p>

      <p><b>{}</b></p>
      
      <p>Tallas</p>
      <span class="material-icons">add_box</span>
   </div>
  );
}

export default Card;
