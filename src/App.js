import React from 'react';
import './App.css';
import Header from './Header';
import AboutMeButtons from './AboutMeButtons';
import Selected from './Selected';
import ProjectButtons from './ProjectButtons';

function App() {
  return (
    <div>
      <Header />
      <AboutMeButtons />
      <Selected />
      <ProjectButtons />
    </div>
  );
}

export default App;
