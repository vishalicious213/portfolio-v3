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

    p {
        @media screen and (max-width: 840px) {
            font-size: .9rem;
        } // @media 840
    }

    .keyTech {
            // border: 1px solid red;
            display: grid;
            grid-template-columns: 5rem auto;
            grid-row-gap: .25rem;
        }
`

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
                    {/* <h3>High-Level</h3> */}
                    <p><b>JavaScript</b> adds interactivity to web pages and online applications. The DOM is an object representation of every element on a website. Together, they transform static web pages built with HTML and CSS into vibrant, dynamic web pages and applications. User events, interaction with other websites, transaction with applications - all of this and more is possible with these combined technologies.</p>
                    {/* <p><b>React</b> expands on JavaScript by way of a component-based architecture and melding of JavaScript functionality with data presentation using a language technology called JSX. Proper use increases the speed of web pages and reduces the need to repeatedly request data from a website.</p> */}

                    {/* <h3>Key Technologies</h3>
                    <section className="keyTech">
                        <div className="techName"><b>JavaScript</b></div>
                        <div className="techDef">powers the internet - it is the most widely-used web programming language in the world and adds interactivity and functionality to websites</div>
                        
                        <div className="techName"><b>React</b></div>
                        <div className="techDef">is a front-end library developed by Facebook. It handles the view layer for web and mobile apps through reusable UI components.</div>
                        
                        <div className="techName"><b>DOM</b></div>
                        <div className="techDef">(The Document Object Model) is a language-agnostic programming interface that features an object-oriented representation of a web page which can be modified by scripting languages</div>

                        <div className="techName"><b>axios</b></div>
                        <div className="techDef">(yes, its all lowercase) is a lightweight, promise-based HTTP client designed to take advantage of async and provide more readable asynchronous code. It gets data from online servers.</div>
                    </section> */}
                </div>
            </Container>
            <ProjectCard cards='jsDomProjects' />
            {/* <BottomBorder></BottomBorder> */}
        </div>
        )
    }
}

export default JsProjects;