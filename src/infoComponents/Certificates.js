import React from 'react'
import styled from 'styled-components'

function Certificates() {
    return (
        <Cert>
            <div className="certs">
                <div><b>Certificates:</b></div>
                <div className="certs-list">
                    <div><a target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/82e37eab-aa57-4794-9109-bc24cdf04867?source=linked_in_profile">BloomTech: Full-Stack Web Development</a></div>
                    <div><a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/certification/vishalicious213/responsive-web-design">freeCodeCamp: Responsive Web Design</a></div>
                </div>
            </div>
        </Cert>
    )
}

const Cert = styled.div`
    .certs {
        text-align: right;
        color: gainsboro;
    }

    .certs-list {
        display: flex;
        // justify-content: end;
        margin-top: .75rem;
        gap: 1rem;
    }

    .certs-list div {
        width: 7rem;
        text-align: center;
        padding: .5rem .75rem;
        border: 1px solid gainsboro;
        border-radius: .5rem;
        background: #353849;
    }

    .certs-list div:hover {
        background: #2d3040;
    }

    .certs-list div a {
        color: gainsboro;
        text-decoration: none;
    }
`

export default Certificates