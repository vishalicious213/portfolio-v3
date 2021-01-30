import React from 'react';
import styled from 'styled-components';

function GetInTouch() {
    return (
        <div>
            <TopBorder></TopBorder>
            <Container>
                <div className="Front">
                    <h3>Get In Touch</h3>
                    <p>Lets build the future together! If you have a need for a website or an idea for a web application, lets design it and show it to the world. Prior to my endeavor to become a full-stack developer, I already worked in software development as a designer for a clinical EMR for long-term care. I didn't know code then, and helped build a system that was ahead of its time. Now, I've started building skills to craft websites and web applications. Let me exercise this knowledge by putting it to work for you!</p>

                    <ContactForm>
                        <form id='contact-form' name='contact-form' method='POST' data-netlify='true'>
                            <input type='hidden' name='form-name' value='contact-form' />
                            
                            <label htmlFor='name'>NAME</label>
                            <input
                                id='name'
                                name='name'
                                type='text'
                                placeholder='name'
                                className='field'
                            />
                            
                            <label htmlFor='email'>EMAIL</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='email'
                                className='field'
                            />
                            
                            <label htmlFor='phone'>PHONE</label>
                            <input
                                id='phone'
                                name='phone'
                                type='text'
                                placeholder='phone'
                                className='field'
                            />
                            
                            <label htmlFor='message'>MESSAGE</label>
                            <textarea
                                id='message'
                                name='message'
                                rows='4'
                                cols='50'
                                placeholder='message'
                                className='field'
                            />

                            <button type='submit'>Send Message</button>
                        </form>

                        <section className='social'>

                        </section>
                    </ContactForm>
                </div>
            </Container>
        </div>
    )
}

const TopBorder = styled.div`
    width: 100%;
    height: 3rem;
    background: linear-gradient(to right bottom, #2e3141 49%, #353849 50%);
`
const Container = styled.section`
    background-color: #353849;
    padding: 1rem 1rem 0px;
    display: flex;
    justify-content: center;
    padding-bottom: 1.5rem;

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

const ContactForm = styled.section`
    display: flex;
    
    #contact-form {
        display: flex;
        flex-direction: column;
    }

    label {
        color: gainsboro;
        font-size: .8rem;
        font-weight: 700;
        letter-spacing: .1rem;
        margin-bottom: .5rem;
    }

    input {
        margin-bottom: 1.5rem;
    }

    .field {
        background: #353849
        border: 2px solid #494c5b;
        border-radius: .35rem;
        padding: 1rem;
    }
`

export default GetInTouch;