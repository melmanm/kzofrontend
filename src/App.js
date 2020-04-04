import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  BrowserRouter,
  HashRouter,
  StaticRouter,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Welcome from './Components/Welcome';
import GraphArea from './Components/GraphArea';
import ResultComponent from './Components/Result';
import PrivacyComponent from './Components/StaticSites/Privacy.js'
import ToWinter from './Components/StaticSites/ToWinter';
import ToSummer from './Components/StaticSites/ToSummer';
import Rules from './Components/StaticSites/Rules';
import ScrollToTop from './ScrollToTop';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-162359441-1');

function App() {
  const history = useHistory();
  useEffect(() => {
    history.listen(x=>{ReactGA.pageview(x.pathname);});
    ReactGA.pageview(history.location.pathname);
}, []);
  return (
    <div>
      <ScrollToTop/>
      <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/result" component={ResultComponent} />
      <Route path="/polityka-prywatnosci" component={PrivacyComponent} />
      <Route path="/na-zimowe" component={ToWinter} />
      <Route path="/na-letnie" component={ToSummer} />
      <Route path="/regulamin" component={Rules} />
      <Route path='*' component={Welcome} />
      </Switch>
      </div>
  );
}

export default App;
