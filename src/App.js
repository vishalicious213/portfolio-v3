import React from 'react';
import './App.css';
import Header from './Header';
import AboutMeButtons from './infoComponents/AboutMeButtons';
// import Selected from './Selected';
import ProjectButtons from './projComponents/ProjectButtons';
import GetInTouch from './GetInTouch';
// import ProjectCardJS from './projComponents/ProjectCardJS';
// import ProjectCard from './projComponents/ProjectCard';
// import TestComponent from './testComponents/TestRender';
import TestProjectCard from './testComponents/TestProjectCard';

function App() {
  return (
    <div>
      {/* <TestComponent /> */}
      <Header />
      <AboutMeButtons />
      <ProjectButtons />
      {/* <Selected /> */}
      {/* <ProjectCard /> */}
      <TestProjectCard />
      <GetInTouch />
    </div>
  );
}

export default App;
