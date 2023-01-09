import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

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
                </div>
            </Container>
            <ProjectCard cards='htmlWebProjects' />
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

export default HtmlCss;