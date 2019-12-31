import React from 'react';
import styled from 'styled-components';

// const BottomBorder = styled.div`
//     width: 100%;
//     height: 3rem;
//     background: linear-gradient(to right top, #2e3141 49%, #4c5c96 50%);
// `
const Container = styled.section`
    background-color: #2d3040;
    padding: 1rem 1rem 0px;
    display: flex;
    justify-content: center;

    .Front {
        width: 90%;
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
    }
`

function GetInTouch() {
    return (
        <div>
            <Container>
                <div className="Front">
                    <h3>Get In Touch</h3>
                    <p>Lets build the future together! If you have a need for a website or an idea for a web application, lets design it and show it to the world. Prior to my endeavor to become a full-stack developer, I already worked in software development as a designer for a clinical EMR for long-term care. I didn't know code then, and helped build a system that was ahead of its time. Now, I've started building skills to craft websites and web applications. Let me exercise this knowledge by putting it to work for you!</p>
                </div>
            </Container>
            {/* <BottomBorder></BottomBorder> */}
        </div>
    )
}

export default GetInTouch;