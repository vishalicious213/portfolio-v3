import React, { Component } from 'react';
import styled from 'styled-components';
import Featured from './ProjectsFeatured';
import HtmlCss from './ProjectsHTMLCSS';
import JSReact from './ProjectsJSReact';

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
        
        a {
            text-decoration: none; // page buttons below each page's projects
                    color: white;
        }
    }

    button:hover {
        background-color: #353849;
    }
`

class ProjectButtons extends Component {
    constructor() {
        super();
        this.state = {render:'featured'}
    }

    handleClick(projSection, event){
        console.log(projSection);
        this.setState({render:projSection});
    }

    _renderSubComp(){
        switch(this.state.render){
            case 'featured': return <Featured />
            case 'html-css': return <HtmlCss />
            case 'JS-React': return <JSReact />
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
                        this.handleClick.bind(this, 'JS-React')
                    }>JavaScript & React Sites</button>
                </Container>

                {this._renderSubComp()}
            </div>
        )
    }
}
export default ProjectButtons;