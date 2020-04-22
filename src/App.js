import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav/index';
import Home from './components/Home';
import Skills from './components/Skills/index';
import Projects from './components/Projects/index';
import InternWork from './components/InternWork/index';


function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Home />  
      <Skills />
      <Projects />
      <InternWork />
    </div>
  );
}

export default App;
