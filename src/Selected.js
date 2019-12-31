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

function Selected() {
    return (
        <div>
            <Container>
                <div className="Front">
                    <h3>Selected Works</h3>
                    <p>The start of my education in web development has progressed quickly. In a week's time I've managed to go from 'Hello World' in CodePen to writing an adaptive website using HTML and CSS in VS Code. I blog about it regularly, sharing my experiences with a growing readership and reinforcing my understanding by explaining it in essay form.</p>
                </div>
            </Container>
            {/* <BottomBorder></BottomBorder> */}
        </div>
    )
}

export default Selected;