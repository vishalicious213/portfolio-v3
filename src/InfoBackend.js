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

    .Back {
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
        font-family: Raleway, Helvetics, sans-serif;
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
    }

    img {
        width: 100%;
        border-radius: 50%;
    }
`

function Backend() {
    return (
        <div>
            <TopBorder></TopBorder>
            <Container>
                <div className="Back">
                    <div className="sectionInfo">
                        <h3>Back-End Development</h3>
                        <p>Once our JavaScript/React entanglement is complete, we move on to back-end development with NodeJS, Java, Python and RDBMS. This will be augmented with deep dives into algorithms, data structures, hash tables, blockchain, graphs and computer architecture.</p>
                    </div>
                    <div className="pictureFrame">
                        <img src={require('./img/v2.jpg')}></img>
                    </div>
                </div>
            </Container>
            <BottomBorder></BottomBorder>
        </div>
    )
}

export default Backend;