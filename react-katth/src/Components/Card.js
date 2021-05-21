import React from "react";
import "./Card.css";
import imagen from "../Assets/baner3.jpg"
//import Card from "./Components/Card.js";
function Card() {
  return (
    <div className="Card">
      <img className="Card_img"   src={imagen} alt=""> 
      </img> 
      <p>Descripción del Producto</p>

      <p><b>Precio</b></p>
      
      <p>Tallas</p>
      <span class="material-icons">add_box</span>
   </div>
  );
}

export default Card;
