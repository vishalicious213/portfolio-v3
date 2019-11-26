import React from 'react';
import './App.css';
import Header from './Header';
// import Frontend from './InfoFrontend';
// import About from './InfoAbout';
import AboutMeButtons from './AboutMeButtons';
import AboutMeSwitch from './AboutMeSwitch';
import Selected from './Selected';
import ProjectButtons from './ProjectButtons';

function App() {
  return (
    <div>
      <Header />
      <AboutMeButtons />
      <AboutMeSwitch />
      {/* <Frontend />
      <About /> */}
      <Selected />
      <ProjectButtons />
    </div>
  );
}

export default App;
