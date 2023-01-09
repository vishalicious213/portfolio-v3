import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

class Featured extends Component {
    constructor() {
        super();
        this.state = {render: 'featured', cards: 'featuredProjects'}
    }

    render() {
        return (
        <div className="Anchor">
            <Container>
                <div className="Front">
                    <h2>Featured Projects</h2>
                    <p>Here are six projects made using a combination of <b>HTML/CSS</b>, <b>JavaScript</b> and <b>React</b>. These responsive websites include client projects, personal projects, projects from Lambda School and other coding courses. My <a href='https://neophyte.home.blog/'>programming blog</a> is available in WordPress Websites - I regularly write about coding, sharing my experiences with a growing readership and reinforcing my understanding by explaining topics in essay form.</p>
                </div>
            </Container>
            <ProjectCard cards='featuredProjects' />
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

    h2 {
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

    p {
        color: gainsboro;
        text-align: left;

        @media screen and (max-width: 840px) {
            font-size: .9rem;
        } // @media 840
    }

    a {
        color: gainsboro;
    }
`

export default Featured;