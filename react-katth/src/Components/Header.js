import React from "react";
import "./Header.css";
import logo from "../Assets/logo.png";
import car from "../Assets/carrito.png";

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="logo" className="Header_logo" />
      <p>Bienvenido</p>
      <img src={car} alt="carrito" className="Header_carrito" />
    </div>
  );
}

export default Header;
