import React from 'react';
import './App.css';
import Nav from "./Nav"
import About from "./About"
import Shop from "./Shop"
import Home from "./Home"

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
  );
}

export default App;
