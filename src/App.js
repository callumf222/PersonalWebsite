import React from 'react';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

import './Css/App.css';
import './Css/LandingPage.css';
import './Css/AboutMe.css';
import './Css/Projects.css';
import './Css/Contact.css';


function App() {
  return (
    <>
      <LandingPage  />
      <AboutMe />
      <Projects />
      <Contact />
    </>
      
      
  );  
  }

export default App;
