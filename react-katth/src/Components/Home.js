import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import "../Components/Home.css";
import Header from "./Header";
import Body from "./Body.js";
import Footer from "./Footer.js";
import Shoes from './Shoes.js';
import Clothes from "./Clothes";
import Accesories from "./Accesories"

function Home() {

  const history = useHistory();

  const historyPageA = () => {
    history.push('/Shoes')
  }
  const historyPageB = () => {
    history.push('/Clothes')
  }
  const historyPageC = () => {
    history.push('/Accesories')
  }


  return (
    <>
    <div className="ProductsBtn">
      <button onClick={historyPageA}
        className="buttonP">Zapatos</button>
      
    </div >
    <div className="ProductsBtnR">
      <button onClick={historyPageB}
        className="buttonP">Ropa</button>
      
    </div >
    <div className="ProductsBtnA">
      <button onClick={historyPageC}
        className="buttonA">Accesorios</button>
      
    </div >
    
              

    <div className="Home">
      <Header />
      <Body />
      <Footer />
    </div>
    </>
  );
}

export default Home;
