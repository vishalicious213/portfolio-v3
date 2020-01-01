import React, { useState } from 'react';
import styled from 'styled-components';

const featuredProjects = [
    {img: "img/breast-cancer-comfort.jpg", name: "Breast Cancer Comfort", type: "Client Website", visit: "https://breast-cancer-comfort.netlify.com/", view: "https://github.com/vishalicious213/bcc", desc: "Breast cancer charity in Long Island, NY. Formerly Wordpress site. Built webpage with HTML/CSS/LESS. Navigation bar written with JavaScript.", stack: ["js", "html", "css", "less"]},
    {img: "img/react-wars.jpg", name: "React Wars", type: "Sprint Challenge V: React", visit: "https://vish213-reactwars.netlify.com", view: "https://github.com/vishalicious213/6.5-Sprint-Challenge-React-Wars", desc: "Used axios to access the Star Wars API, then used React components, state and side effects to render information about Star Wars characters. Imported and rendered images separately.", stack: ["js", "react", "axios"]},
    {img: "img/american-football.jpg", name: "Football Scoreboard", type: "React Components & Component State", visit: "https://vish213-scoreboard.netlify.com/", view: "https://github.com/vishalicious213/6.1-react-american-football-scoreboard-v2", desc: "Football scoreboard: Two buttons per team - one increments score by 3 points (field goal) and the other by 7 (touchdown + extra point). Demonstrates React components, state and click handlers.", stack: ["js", "react"]},
    {img: "img/github-usercard.jpg", name: "GitHub Followers", type: "Components II", visit: "https://vishalicious213.github.io/5.4-github-usercard-v2/", view: "https://github.com/vishalicious213/5.4-github-usercard-v2", desc: "Accessed the GitHub API using the axios JavaScript library and built a component that creates social cards of my GitHub followers based on returned data.", stack: ["js", "dom", "axios"]},
    {img: "img/potluck.jpg", name: "Potluck Planner", type: "Build Week 1", visit: "https://vishalicious213.github.io/4.x-buildWeek1-Potluck-Planner/", view: "https://github.com/vishalicious213/4.x-buildWeek1-Potluck-Planner", desc: "A group project - I designed and implemented every aspect of the main website while teammates developed the application and back end. Two other designers' websites were linked as alternate 'themes' in the navigation.", stack: ["html", "css", "less"]},
    {img: "img/blog.jpg", name: "Redo From Start", type: "Personal Project", visit: "https://neophyte.home.blog/", view: "#", desc: "My programming blog details my experience learning how to think like a programmer, grasp computer science concepts and, of course, tackling coding projects.", stack: ["html", "css", "wp"]}
]
// {img: "#", name: "#", visit: "#", view: "#", desc: "#"},

// projectAnchor = document.querySelector(".featuredWorks");
// featuredProjects.forEach(project => {
//     // console.log(project);
//     projectAnchor.appendChild(projectCard(project));
// })

const Container = styled.section`
    background-color: #2d3040;
    padding: 1rem 1rem 0px;
    display: flex;
    justify-content: center;
`
const Card = styled.section`
    background-color: #353849;
    border: .5px solid #2e3141;
    width: 30%;
    margin: 1rem;
    margin-top: 2.5rem;
    border-radius: .25rem;

    &:hover {
        border: .5px solid silver;
    }
`
const Screenshot = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    border-radius: .25rem .25rem 0 0;
`
const Img = styled.img`
    width: 100%;
`
const WorkInfo = styled.div`
    padding: 1rem;
`
    const Title = styled.h3`
        color: white;
        font-family: Raleway, Helvetica, sans-serif;
        font-weight: 700;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        font-size: 1rem;
        border-bottom: none;
        margin: 0;
        padding-bottom: 0;
    `
    const Type = styled.p`
        color: darkgray;
        font-size: 1rem;
        font-family: "Source Sans Pro", Helvetica, sans-serif;
        font-weight: 200;
        line-height: 1.5;
        border-bottom: 1px solid lightslategray;
        margin: 0px 0px 1rem;
        padding-bottom: 1rem;
    `


function ProjectCard() {
    return (
        <Container>
            <Card>
                <Screenshot>
                    <Img src={require('../img/blog.jpg')} alt=""></Img>
                    {/* <StyledImg className="image" src={require('../img/'+`${props.name}`+'.jpg')} alt=""></StyledImg> */}
                </Screenshot>
                <WorkInfo>
                    <Title>Project Title</Title>
                    <Type>Project Type</Type>
                </WorkInfo>
            </Card>
        </Container>
    )
}

export default ProjectCard;