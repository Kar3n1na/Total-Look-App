import React, { useEffect } from 'react';
import './App.css';
import getData from './main';

function App() {
  useEffect(() =>{
    getData();
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
