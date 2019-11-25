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
        font-family: Raleway, Helvetics, sans-serif;
        margin: 0px 1rem 1rem; // top r/l bot
        border: 2px solid @gray4;
        // text-align: center;
        width: 8rem;
        padding: .5rem 1rem .5rem 1rem;
        border-radius: .25rem;
        
        a {
            text-decoration: none; // page buttons below each page's projects
                    color: white;
        }
    }

    button:hover {
        background-color: @gray3;
    }
`

function AboutMeButtons() {
    return (
        <Container>
            <button>Front-End Development</button>
            <button>Back-End Development</button>
            <button>About Me</button>
        </Container>
    )
}

export default AboutMeButtons;