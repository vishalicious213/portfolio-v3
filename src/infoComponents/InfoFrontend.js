import React from 'react';
import styled from 'styled-components';

const TopBorder = styled.div`
    width: 100%;
    height: 3rem;
    background: linear-gradient(to right bottom, #2d3040 49%, #4c5c96 50%);
`
const BottomBorder = styled.div`
    width: 100%;
    height: 3rem;
    background: linear-gradient(to right top, #2e3141 49%, #4c5c96 50%);
`
const Container = styled.section`
    background-color: #4c5c96;
    padding: 1rem 1rem 0px;
    display: flex;
    justify-content: center;

    .Front {
        width: 90%;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-areas:
            h3 img
            p img
        grid-column-gap: 3rem;
        align-items: center;
    }

    h3 {
        color: white;
        font-size: 1.05rem;
        font-family: Raleway, Helvetica, sans-serif;
        letter-spacing: .1rem;
        text-transform: uppercase;
        margin: 0px 0px 1px; // top r/l bot
        padding-bottom: 1.25rem;
        border-bottom: 1px solid lightslategray;
        text-align: right;
    }

    p {
        color: gainsboro;
        text-align: right;

        @media screen and (max-width: 840px) {
            font-size: .9rem;
        } // @media 840
    }

    img {
        width: 100%;
        border-radius: 50%;
    }

    @media screen and (min-width: 577px) {
        .tinyPictureFrame {
            display: none;
        }
    }

    @media screen and (max-width: 576px) {
        .Front {
            grid-template-columns: 1fr;
        }

        .pictureFrame {
            @media screen and (max-width: 576px) {
                display: none;
            } // @media 576
        }

        .sectionInfo {
            @media screen and (max-width: 576px) {
                width: 100%;
            } // @media 576
        }

        h3 {
            text-align: center;
        }

        .tinyPictureFrame {
            width: 50%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
        }
    } // @media 576
`

function Frontend() {
    return (
        <div>
            <TopBorder></TopBorder>
            <Container>
                <div className="Front">
                    <div className="tinyPictureFrame">
                        <img src={require('../img/v1.jpg')} alt="Vish's face, with black cap on."></img>
                    </div>
                    <div className="sectionInfo">
                        <h3>Front-End Development</h3>
                        {/* <p>The first unit at Lambda School has taught me the basics of semantic HTML and CSS, including the pains of inline-block, the mighty Flexbox and a start at responsive web design. We've since delved into JavaScript, the DOM and are learning React, with its virtual DOM, for component-driven front-end development.</p> */}
                        <p>My approach to front-end web development centers on presenting data to the viewer through interactive graphical interfaces using technologies such as semantic HTML, CSS (including Flexbox and CSS Grid), JavaScript and React. Data is often read from outside API sources via axios and display is guided by responsive web design principles.</p>
                    </div>
                    <div className="pictureFrame">
                        <img src={require('../img/v1.jpg')} alt="Vish's face, with black cap on."></img>
                    </div>
                </div>
            </Container>
            <BottomBorder></BottomBorder>
        </div>
    )
}

export default Frontend;