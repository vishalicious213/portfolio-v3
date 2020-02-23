import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Container = styled.section`
    background-color: #2d3040;
    padding: 1rem 1rem 0px;
    display: flex;
    justify-content: center;

    .Front {
        width: 90%;
    }

    h2, h3 {
        color: white;
        font-size: 1.15rem;
        font-family: Raleway, Helvetica, sans-serif;
        letter-spacing: .1rem;
        text-transform: uppercase;
        margin: 0px 0px 1px; // top r/l bot
        padding-bottom: 1.25rem;
        border-bottom: 1px solid lightslategray;
        text-align: left;
    }

    h3 {
        font-size: 1.05rem;
    }

    p, div {
        color: gainsboro;
        text-align: left;
    }

    .keyTech {
            // border: 1px solid red;
            display: grid;
            grid-template-columns: 5rem auto;
            grid-row-gap: .25rem;
        }
`

class WPSites extends Component {
    constructor() {
        super();
        this.state = {render: 'Wordpress', cards: 'WPProjects'}
    }

    render() {
        return (
        <div>
            <Container>
                <div className="Front">
                    <h2>WordPress Websites</h2>
                    <p>RESPONSIVE WEBSITES BUILT USING WORDPRESS</p>
                    <p><b>WordPress</b> is a content management system (CMS) used to create blogs, online stores and other websites. It is the most-used CMS in the world with a robust plugin selection and vast template system which is used to create distinct themes to personalize websites.</p>
                    <p><b>Divi</b> is a WordPress theme and site builder which adds a drag-and-drop user interface that allows WordPress developers to create web pages visually.</p>
                </div>
            </Container>
            <ProjectCard cards='WPProjects' />
        </div>
        )
    }
}

export default WPSites;