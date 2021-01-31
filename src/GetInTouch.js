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
                            
                            <div className='form-half'>
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
                            </div>
                            
                            <div className='form-half'>
                                <label htmlFor='message'>MESSAGE</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='4'
                                    cols='50'
                                    placeholder='message'
                                    className='field message'
                                />

                                <button id='contact-button' type='submit'>SEND MESSAGE</button>

                                <Social>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vish213/" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/vishalicious213" title="GitHub"><i className="fab fa-github"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://neophyte.home.blog/" title="Wordpress"><i className="fab fa-wordpress"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/vishalicious213" title="Twitter"><i className="fab fa-twitter"></i></a>
                                    {/* <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vish213" title="Facebook"><i className="fab fa-facebook-square"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vishalicious213/" title="Instagram"><i className="fab fa-instagram"></i></a> */}
                                    <a target="_blank" rel="noopener noreferrer" href="mailto:vishalicious213@gmail.com" title="Gmail"><i className="fas fa-envelope"></i></a>
                                </Social>
                            </div>
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
    #contact-form {
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;
    }

    .form-half {
        display: flex;
        flex-direction: column;
        width: 48%;
    }

    label, #contact-button {
        color: gainsboro;
        font-size: .8rem;
        font-weight: 700;
        letter-spacing: .1rem;
        margin-bottom: .5rem;
    }

    input {
        margin-bottom: 1.5rem;
    }

    .message {
        height: 7.15rem;
    }

    .field, #contact-button {
        background: #353849
        border: 2px solid #494c5b;
        border-radius: .35rem;
        padding: 1rem;
    }

    #contact-button {
        color: white;
        margin-top: 3rem;
    }

    #contact-button:hover {
        background: #494c5b;
        border: 2px solid #5d606d;
        transition: .25s
    }
`

const Social = styled.section`
    margin-top: 1rem;
    font-size: 1.25rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    a {
        text-decoration: none;
        color: silver;
    }

    a:hover {
        color: white;
    }
`

export default GetInTouch;