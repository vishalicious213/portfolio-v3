import React, { useState } from 'react';
import Frontend from './InfoFrontend';
import About from './InfoAbout';

export default function AboutMeSwitch() {
    const [meButton, updateMeButton] = useState('frontend');

    if (meButton == 'frontend') {return <Frontend />} else
    if (meButton == 'about') {return <About />}
}