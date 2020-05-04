import React , {lazy , Suspense} from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import SideNav from './components/SideNav/index';
const Home = lazy(() => import('./components/Home'));
//import Skills from './components/Skills/index';
const Projects = lazy(() => import('./components/Projects/index'));
const InternWork = lazy(() => import('./components/InternWork/index'));
const Certificates = lazy(() => import('./components/Certificates/index'));
//import Resume from './components/Resume/index';
const SocialNetwork = lazy(() => import('./components/SocialNetwork/index'));
const ContactDetails = lazy(() => import('./components/ContactDetails/index'));
const Footer = lazy(() => import('./components/Footer'));
const SharableButton = lazy(() => import('./components/SharableButton/index'));

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Suspense fallback={<LoadingSpinner />}>
      <Home />
      {/*
      <Skills />
      */}
      <Projects />
      <InternWork />
      <Certificates />
      {/*
      <Resume />
      */}
      <SocialNetwork />
      <ContactDetails />
      <Footer />
      <SharableButton /> 
      </Suspense>
    </div>
  );
}

export default App;
