import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

class JsProjects extends Component {
    constructor() {
        super();
        this.state = {render: 'JS-React', cards: 'jsDomProjects'}
    }

    render() {
        return (
        <div>
            <Container>
                <div className="Front">
                    <h2>JavaScript Projects</h2>
                    <p>RESPONSIVE WEBSITES AND PROJECTS BUILT USING JAVASCRIPT AND DOM MANIPULATION</p>

                    <p><b>JavaScript</b> adds interactivity to web pages and online applications. The DOM is an object representation of every element on a website. Together, they transform static web pages built with HTML and CSS into vibrant, dynamic web pages and applications. User events, interaction with other websites, transaction with applications - all of this and more is possible with these combined technologies.</p>
                </div>
            </Container>
            <ProjectCard cards='jsDomProjects' />
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

export default JsProjects;