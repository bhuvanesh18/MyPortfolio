import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav/index';
import Home from './components/Home';
import Skills from './components/Skills/index';
import Projects from './components/Projects/index';
import InternWork from './components/InternWork/index';
import Certificates from './components/Certificates/index';
import Resume from './components/Resume/index';
import SocialNetwork from './components/SocialNetwork/index';
import ContactDetails from './components/ContactDetails/index';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Home />  
      <Skills />
      <Projects />
      <InternWork />
      <Certificates />
      <Resume />
      <SocialNetwork />
      <ContactDetails />
      <Footer />
    </div>
  );
}

export default App;
