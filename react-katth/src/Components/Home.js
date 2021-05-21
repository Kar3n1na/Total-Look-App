import React, {useEffect, useState} from "react";
import "../Components/Home.css";
import Header from "./Header";
import Body from "./Body.js";
import Footer from "./Footer.js";

function Home() {

  //const [products, setProducts] = useState();

  const getData = async () => {
    const urls = [
      `http://localhost:8000/clothing`,
      `http://localhost:8000/shoes`,
      `http://localhost:8000/accessories`
    ];
    
    let requests = urls.map(url => fetch(url));
    
    Promise.all(requests)
    .then(responses => {
      return responses;
    }).then(responses => Promise.all(responses.map(r => r.json())))
    .then((response) => {
      let mergedArray = response.reduce((acc, category) => acc.concat(category), []);
      console.log(mergedArray);
      setProducts(mergedArray)
    })
  }
  
  useEffect(() =>{
    getData();
  }, [])

  return (
    <div className="Home">
      <Header />
      <Body
       />
      <Footer />
    </div>
  );
}

export default Home;
