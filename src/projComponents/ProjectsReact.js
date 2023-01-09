import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

class ReactProjects extends Component {
    constructor() {
        super();
        this.state = {render: 'JS-React', cards: 'reactProjects'}
    }

    render() {
        return (
        <div>
            <Container>
                <div className="Front">
                    <h2>React & Next.js Projects</h2>
                    <p>RESPONSIVE WEBSITES AND PROJECTS BUILT USING REACT AND NEXT.JS</p>

                    <p><b>React</b> is a JavaScript library designed for building user interfaces. It expands features a component-based architecture, state management and data presentation using a language called JSX (JavaScript Extension). It's frequently used to build single-page applications (SPAs).</p>

                    <p><b>Next.js</b> is a framework that sits on top of React and adds many features commonly incorporated by including multiple JavaScript libraries. Some of these features include routing, server-side rendering, image optimization, component-scoped CSS, basic API routes and the ability to define and customize global page templates.</p>

                </div>
            </Container>
            <ProjectCard cards='reactProjects' />
            {/* <BottomBorder></BottomBorder> */}
        </div>
        )
    }
}

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

    p {
        @media screen and (max-width: 840px) {
            font-size: .9rem;
        } // @media 840
    }
`

export default ReactProjects;