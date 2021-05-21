import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home'
import Shoes from './Components/Shoes.js'



function App() {
  
  return (
    <Router>
      <div className="container-btns">
        <Switch>
          <Route path="/Shoes">
            <Shoes />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
  
}

export default App;
