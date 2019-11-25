import React from 'react';
import './App.css';
import Header from './Header';
// import Frontend from './InfoFrontend';
// import About from './InfoAbout';
import AboutMeSwitch from './AboutMeSwitch';
import Selected from './Selected';

function App() {
  return (
    <div>
      <Header />
      <AboutMeSwitch />
      {/* <Frontend />
      <About /> */}
      <Selected />
    </div>
  );
}

export default App;
