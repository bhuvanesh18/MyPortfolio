import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Home />  
      <Skills />
      <Projects />
      <Page1 />
      <Page2 />
    </div>
  );
}

export default App;
