import React from 'react';
import './App.css';
import Home from './components/Home';
import Department from './components/Department';
import Employee from './components/Employee';
import Navigation from './components/Navigation';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">

        <h3 className="m-3 d-flex justify-content-center" >
          ReactJS 
        </h3>
        <h5 className="m-3 d-flex justify-content-center">
          Employye managesment Portal
        </h5>
        
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/department" component={Department} />
          <Route path="/employee" component={Employee} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
