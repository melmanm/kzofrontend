import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Welcome from './Components/Welcome';
import GraphArea from './Components/GraphArea';
import ResultComponent from './Components/Result';
import PrivacyComponent from './Components/StaticSites/Privacy.js'
import ToWinter from './Components/StaticSites/ToWinter';

function App() {
  return (
    <Router>
      
    <div className="container">
      <Route exact path="/" component={Welcome} />
      <Route path="/result" component={ResultComponent} />
      <Route path="/polityka-prywatnosci" component={PrivacyComponent} />
      <Route path="/na-zimowe" component={ToWinter} />
    </div>
  </Router>
  );
}

export default App;
