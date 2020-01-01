import React from 'react';
import './App.css';
import Header from './Header';
import AboutMeButtons from './infoComponents/AboutMeButtons';
// import Selected from './Selected';
import ProjectButtons from './projComponents/ProjectButtons';
import GetInTouch from './GetInTouch';
// import ProjectCardJS from './projComponents/ProjectCardJS';

function App() {
  return (
    <div>
      <Header />
      <AboutMeButtons />
      <ProjectButtons />
      {/* <Selected /> */}
      {/* <ProjectCardJS /> */}
      <GetInTouch />
    </div>
  );
}

export default App;
