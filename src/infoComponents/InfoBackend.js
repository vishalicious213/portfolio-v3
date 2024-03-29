import React from 'react';
import styled from 'styled-components';
import Certificates from './Certificates';

function Backend() {
    return (
        <div>
            <TopBorder></TopBorder>
            <Container>
                <div className="Back">
                    <div className="tinyPictureFrame">
                        <img src={require('../img/v2.jpg')} alt="Vish's face, with black cap on."></img>
                    </div>
                    <div className="pictureFrame">
                        <img src={require('../img/v2.jpg')} alt="Back of Vish's head, holding baby over shoulder."></img>
                    </div>
                    <div className="sectionInfo">
                        <h3>Back-End Development</h3>
                        {/* <p>Once our JavaScript/React entanglement is complete, we move on to back-end development with NodeJS, Java, Python and RDBMS. This will be augmented with deep dives into algorithms, data structures, hash tables, blockchain, graphs and computer architecture.</p> */}
                        <p>Back-end development handles the 'behind-the-scenes' functionality of a web application. It connects the front-end with a database, implements APIs, manages user connections and structures the business logic of a web application.</p>
                        <p>The technologies I use most frequently for back-end work include Node.JS, Express.JS, SQL, knex and Python. I've implemented authentication through cookies and with JSON Web Tokens. I've also used Netlify serverless functions to build ecommerce sites that don't rely on a server for backend functions.</p>
                        <p><b>Skills:</b> HTML, CSS, JavaScript, Tailwind, React.JS, Next.JS, Node.JS, Express.JS</p>
                        <Certificates />
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
    background: linear-gradient(to left bottom, #2d3040 49%, #4c5c96 50%);
`
const BottomBorder = styled.div`
    width: 100%;
    height: 3rem;
    background: linear-gradient(to left top, #2e3141 49%, #4c5c96 50%);
`
const Container = styled.section`
    background-color: #4c5c96;
    padding: 1rem 1rem 0px;
    display: flex;
    justify-content: center;

    .sectionInfo {
        
    }

    .Back {
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 3fr;
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
        text-align: left;
    }

    p {
        color: gainsboro;
        text-align: left;

        @media screen and (max-width: 840px) {
            font-size: .9rem;
        } // @media 840
    }

    .certs-list {
        align-items: start;
        
        @media screen and (min-width: 840px) {
            justify-content: start;
        }
    }

    .certs {
        text-align: left;
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
        .Back {
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

export default Backend;