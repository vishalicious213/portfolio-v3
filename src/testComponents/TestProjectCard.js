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

const Container = styled.section`
    background-color: #2d3040;
    padding: 1rem 1rem 0px;
    display: flex;
    flex-wrap: wrap;
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

    @media screen and (max-width: 1220px) {
    width: 45%;
    } // @media 1220

    @media screen and (max-width: 840px) {
        width: 100%;
    } // @media 840
`
const Screenshot = styled.div`
    width: 100%;
    margin-bottom: .1rem;
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
const Offsite = styled.div`
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1rem;
        border-bottom: 1px solid lightslategray;
`
    const Visit = styled.a`
        width: 48%;
    `
        const VisitButton = styled.span`
            color: white;
            font-size: 1rem;
            font-weight: 600;
            margin-right: .5rem;
            border: 2px solid #484A59;
            padding: .15rem .5rem;
            border-radius: 50%;

            &:hover {
                background-color: #484A59;
            }
        `
        const VisitText = styled.span`
            color: white;
            font-size: .8rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            margin-top: 2rem;
        `
    const View = styled.a`
        width: 48%;
    `
        const ViewButton = styled.span`
            color: white;
            font-size: 1rem;
            font-weight: 600;
            margin-right: .5rem;
            border: 2px solid #484A59;
            padding: .15rem .5rem;
            border-radius: 50%;

            &:hover {
                background-color: #484A59;
            }
        `
        const ViewText = styled.span`
            color: white;
            font-size: .8rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            margin-top: 2rem;
        `
const TechBox = styled.div`
    display: flex;
    align-items: top;
`
    const Descriptor = styled.p`
    	color: gainsboro;
        font-size: 1rem;
        font-family: "Source Sans Pro", Helvetica, sans-serif;
        font-weight: 200;
        line-height: 1.5;
    `
    const Tech = styled.ul`
        border-left: 1px solid lightslategray;
        font-size: 1.5rem;
        margin-left: .5rem;
        padding-left: .5rem;
        text-align: center;
        width: 15%;
    `
    const Li = styled.li`
        list-style-type: none;
        font-size: 1.5rem;
        line-height: 2rem;
        color: gainsboro;
    `
    const AxiosImg = styled.img`
        width: 1.25rem;
        color: gainsboro;
        border: 1px solid gainsboro;
        border-radius: .35rem;
    `
    const DomImg = styled.img`
        width: 1.25rem;
        // background-color: gainsboro;
        border: 1px solid gainsboro;
        border-radius: .35rem;
    `

function TestProjectCard() {
    return (
        <Container>
            {featuredProjects.map(project =>
                <Card>
                    {console.log(project.name)}
                    <Screenshot>
                        {/* <Img src={require(`../img/${project.img}`)} alt=""></Img> */}
                        {/* <Img src={require(`${projectObj.img}`)} alt=""></Img> */}
                        {/* <StyledImg className="image" src={require('../img/'+`${props.name}`+'.jpg')} alt=""></StyledImg> */}
                    </Screenshot>
                    <WorkInfo>
                        <Title key={project.name}>{project.name}</Title>
                        {/* {console.log('Title: ', project.name)} */}
                        <Type key={project.name}>{project.type}</Type>
                        {/* {console.log('Type: ', project.type)} */}
                        <Offsite>
                            <Visit key={project.name} href={project.visit}>
                                <VisitButton>></VisitButton>
                                <VisitText>VISIT SITE</VisitText>
                            </Visit>
                            <View key={project.name} href={project.view}>
                                <ViewButton>></ViewButton>
                                <ViewText>VIEW CODE</ViewText>
                            </View>
                        </Offsite>
                        <TechBox>
                            <Descriptor key={project.name}>{project.desc}</Descriptor>
                            <Tech key={project.name} className={project.stack}>{
                                project.stack.map(item => {
                                    switch (item) {
                                        case 'html': return (<Li title='HTML5' className='fab fa-html5'></Li>);
                                        case 'css': return (<Li title='CSS3' className='fab fa-css3-alt'></Li>);
                                        case 'less': return (<Li title='LESS' className='fab fa-less'></Li>);
                                        case 'js': return (<Li title='JavaScript' className='fab fa-js-square'></Li>);
                                        case 'wp': return (<Li title='WordPress' className='fab fa-wordpress'></Li>);
                                        case 'react': return (<Li title='React' className='fab fa-react'></Li>);
                                        case 'dom': return (<DomImg title='DOM' className='shrinkImg' src={require('../img/noun_DOM_13029.png')}></DomImg>);
                                        case 'axios': return (<AxiosImg title='axios' className='shrinkImg' src={require('../img/axios Page 1.svg')}></AxiosImg>);
                                    }
                                })
                            }</Tech>
                        </TechBox>
                    </WorkInfo>
                </Card>
            )}
        </Container>
    ) // return
}

export default TestProjectCard;