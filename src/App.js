import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
