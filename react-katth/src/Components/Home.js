import React from "react";
import "../Components/Home.css";
import Header from "./Header";
import Body from "./Body.js";
import Footer from "./Footer.js";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
