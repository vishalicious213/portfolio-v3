import React, { useState } from 'react';
import AboutMeSwitch from './AboutMeSwitch';
import styled from 'styled-components';

const Container = styled.section`
    background-color: #2d3040;
    display: flex;
    justify-content: center;

    button {
        color: white;
        background-color: #2d3040;
        font-size: .8rem;
        font-family: Raleway, Helvetica, sans-serif;
        margin: 0px 1rem 1rem; // top r/l bot
        border: 2px solid #484A59;
        width: 8rem;
        padding: .5rem 1rem .5rem 1rem;
        border-radius: .25rem;
        
        a {
            text-decoration: none; // page buttons below each page's projects
                    color: white;
        }
    }

    button:hover {
        background-color: #353849;
    }
`

function AboutMeButtons() {
    return (
        <Container>
            <button onClick={() => AboutMeSwitch('frontend')}>Front-End Development</button>
            <button onClick={() => AboutMeSwitch('backend')}>Back-End Development</button>
            <button onClick={() => AboutMeSwitch('about')}>About Me</button>
        </Container>
    )
}

export default AboutMeButtons;