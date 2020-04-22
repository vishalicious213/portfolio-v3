import React, { Component } from 'react';
import styled from 'styled-components';
import Frontend from './InfoFrontend';
import Backend from './InfoBackend';
import About from './InfoAbout';

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
        cursor: pointer;
        
        a {
            text-decoration: none; // page buttons below each page's projects
                    color: white;
        }

        @media screen and (max-width: 840px) {
            font-size: .6rem;
            width: 6rem;
        } // @media 840
    }

    button:hover {
        background-color: #353849;
    }
`

class AboutMeButtons extends Component {
    constructor() {
        super();
        this.state = {render:'frontend'}
    }

    handleClick(infoSection, event){
        // console.log(infoSection);
        this.setState({render:infoSection});
    }

    _renderSubComp(){
        switch(this.state.render){
            case 'frontend': return <Frontend />
            case 'backend': return <Backend />
            case 'about': return <About />
            default:
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <button onClick={
                        this.handleClick.bind(this, 'frontend')
                    }>Front-End Development</button>

                    <button onClick={
                        this.handleClick.bind(this, 'backend')
                    }>Back-End Development</button>

                    <button onClick={
                        this.handleClick.bind(this, 'about')
                    }>About Me</button>
                </Container>

                {this._renderSubComp()}
            </div>
        )
    }
}

export default AboutMeButtons;