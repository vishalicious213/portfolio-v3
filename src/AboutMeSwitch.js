import React, { useState } from 'react';
import Frontend from './InfoFrontend';
import Backend from './InfoBackend';
import About from './InfoAbout';

export default function AboutMeSwitch(props) {
    const [meButton, updateMeButton] = useState('frontend');

    console.log(props.panel);
    // updateMeButton(props);

    if (meButton == 'frontend') {return <Frontend />} else
    if (meButton == 'backend') {return <Backend />} else
    if (meButton == 'about') {return <About />}
}