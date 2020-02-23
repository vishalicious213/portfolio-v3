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

class HtmlCss extends Component {
    constructor() {
        super();
        this.state = {render: 'html-css', cards: 'htmlWebProjects'}
    }

    render() {
        return (
        <div>
            <Container>
                <div className="Front">
                    <h2>HTML Websites</h2>
                    <p>RESPONSIVE WEBSITES AND PROJECTS BUILT USING HTML5 AND CSS3</p>
                    {/* <h3>High-Level</h3> */}
                    <p><b>HTML</b> and <b>CSS</b> are the basic languages of websites. They're the first tools that web developers learn to create web pages. HTML puts words and images onscreen. CSS gives them a makeover so that they look good. The following websites were all written using HTML and CSS, including a special CSS language called LESS, which makes CSS more dynamic.</p>

                    {/* <h3>Key Technologies</h3>
                    <section className="keyTech">
                        <div className="techName"><b>HTML</b></div>
                        <div className="techDef">(Hyper Text Markup Language) places images and text onscreen and creates links to other pages</div>
                        
                        <div className="techName"><b>CSS</b></div>
                        <div className="techDef">(Cascading Style Sheets) adds color, font size, positioning and many more visual effects to HTML</div>
                        
                        <div className="techName"><b>LESS</b></div>
                        <div className="techDef">(Leaner Style Sheets) is a language extension that adds dynamic programming capability to CSS</div>
                    </section> */}
                </div>
            </Container>
            <ProjectCard cards='htmlWebProjects' />
            {/* <BottomBorder></BottomBorder> */}
        </div>
        )
    }
}

export default HtmlCss;