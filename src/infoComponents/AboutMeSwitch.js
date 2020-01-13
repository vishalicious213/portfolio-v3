// import React, { useState } from 'react';
import React, { Component } from 'react';
import Frontend from './InfoFrontend';
import Backend from './InfoBackend';
import About from './InfoAbout';

export default class AboutMeSwitch extends Component {
    // const [meButton, updateMeButton] = useState('frontend');
    // render() {
        // return (
            // console.log('AboutMeSwitch: ', this.meButton);
            // updateMeButton(props);

            if (meButton = 'frontend') {return <Frontend />} else
            if (meButton = 'backend') {return <Backend />} else
            if (meButton = 'about') {return <About />}
        // )
    // }
}