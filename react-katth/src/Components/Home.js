import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import "../Components/Home.css";
import Header from "./Header";
import Body from "./Body.js";
import Footer from "./Footer.js";
import Shoes from './Shoes.js';

function Home() {

  const history = useHistory();

  const historyPageA = () => {
    history.push('/Shoes')
  }
  

  return (
    <>
    <div className="ProductsBtn">
      <button onClick={historyPageA}
        className="buttonP">Shoes</button>
      
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
