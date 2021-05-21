import React from "react";
import "./Card.css";
//import imagen from "../Assets/baner3.jpg"



function Card(props) {
  const {id, description, price, image, name } = props;
  console.log(props)
  return (
    <div className="Card">
      <img className="Card_img" src={image} alt="" ></img> 
      <p>{name}</p>
      <p>{description}</p>
      <p><b>{price}</b></p>
      <p>Tallas</p>
      <span class="material-icons">add_box</span>
   </div>
  );
}

export default Card;
 