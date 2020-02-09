import React from 'react';
import './App.css';
import Header from './Header';
import AboutMeButtons from './infoComponents/AboutMeButtons';
// import Selected from './Selected';
import ProjectButtons from './projComponents/ProjectButtons';
import GetInTouch from './GetInTouch';
import ProjectCard from './projComponents/ProjectCard';
// import TestComponent from './testComponents/TestRender';

function App() {
  return (
    <div>
      {/* <TestComponent /> */}
      <Header />
      <AboutMeButtons />
      <ProjectButtons />
      {/* <Selected /> */}
      {/* <ProjectCard /> */}
      <GetInTouch />
    </div>
  );
}

export default App;
