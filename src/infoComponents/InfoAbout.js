import React from 'react';
import styled from 'styled-components';

function About() {
    return (
        <div>
            <TopBorder></TopBorder>
            <Container>
                <div className="About">
                    <div className="tinyPictureFrame">
                        <img src={require('../img/v5.jpg')} alt="Vish's face, with black cap on."></img>
                    </div>
                    <div className="sectionInfo">
                        <h3>Father, Bass Enthusiast, Extreme Metaller</h3>
                        <p>Intertwined with my coding interests are my role as a father, my study of electric bass (its not a guitar!) and my love of extreme metal, food, air frying and the Instant Pot. Years ago, I was a sprinter, tabletop gamer, ran a Renegade BBS, read for leisure instead of work and collected comic books.</p>
                        <p>These days, when there's time, I blog and unsuccessfully try to keep my distance from Nick Jr, Disney Junior, Roblox videos and marathons of Winx Club while being outnumbered by my wife and two girls. I also walk a 5k several times a week. Soon, I'll run it.</p>
                    </div>
                    <div className="pictureFrame">
                        <img src={require('../img/v5.jpg')} alt="Older daughter playing guitar and younger daughter playing drums."></img>
                    </div>
                </div>
            </Container>
            <BottomBorder></BottomBorder>
        </div>
    )
}

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

    .About {
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
        .About {
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

export default About;