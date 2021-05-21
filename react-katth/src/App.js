import React, { useEffect } from 'react';
//import Mock from './Mock';
import './App.css';

function App() {
  let getData = async() => {
    const url = `http://localhost:8000/clothing`
    const getFetchData = await fetch(url).then(result => result.json())
    console.log(getFetchData)
  }
  useEffect(() =>{
    getData()
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
