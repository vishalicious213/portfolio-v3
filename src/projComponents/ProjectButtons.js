import React, { Component } from 'react';
import styled from 'styled-components';
import Featured from './ProjectsFeatured';
import HtmlCss from './ProjectsHTMLCSS';
import JsProjects from './ProjectsJS';
import ReactProjects from './ProjectsReact';
import WPSites from './ProjectsWP';

const Container = styled.section`
    background-color: #2d3040;
    display: flex;
    flex-wrap: wrap;
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
    } // button

    button:hover {
        background-color: #353849;
    }

    // @media screen and (max-width: 840px) {
    //     width: 800px;
    // }
`

class ProjectButtons extends Component {
    constructor() {
        super();
        this.state = {render:'featured'}
    }

    handleClick(projSection, event){
        // console.log(projSection);
        this.setState({render:projSection});
    }

    _renderSubComp(){
        switch(this.state.render){
            case 'featured': return <Featured />
            case 'html-css': return <HtmlCss />
            case 'javascript': return <JsProjects />
            case 'react': return <ReactProjects />
            case 'Wordpress' : return <WPSites />
            default:
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <button onClick={
                        this.handleClick.bind(this, 'featured')
                    }>Featured Projects</button>

                    <button onClick={
                        this.handleClick.bind(this, 'html-css')
                    }>HTML / CSS Websites</button>

                    <button onClick={
                        this.handleClick.bind(this, 'javascript')
                    }>JavaScript Projects</button>

                    <button onClick={
                        this.handleClick.bind(this, 'react')
                    }>React & Next.js Projects</button>

                    <button onClick={
                        this.handleClick.bind(this, 'Wordpress')
                    }>WordPress Websites</button>
                </Container>

                {this._renderSubComp()}
            </div>
        )
    }
}
export default ProjectButtons;