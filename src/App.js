import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Projects from './components/Projects';

function App() {
  return (
  <Router>
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Switch>
      <Route path="/page1" exact component={Page1} />
      <Route path="/page2" exact component={Page2} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
