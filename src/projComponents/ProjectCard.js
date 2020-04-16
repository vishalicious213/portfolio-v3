import React from 'react';
import styled from 'styled-components';
 
const featuredProjects = [
    {img: "react-github-followers.jpg", name: "React GitHub Usercard", type: "The React Lifecycle", visit: "https://vish213-react-github-followers.netlify.com/", view: "https://github.com/vishalicious213/9.2-react-github-user-card", desc: "Used React class component lifecycle methods (componentDidMount & componentDidUpdate) to build an app that renders user & follower data from GitHub API. Added search component to load new user & used library to show GitHub Contribution Calendar for user and followers.", stack: ["js", "react", "axios"]},
    {img: "todo.jpg", name: "To-Do List", type: "Class Components", visit: "https://vish213-todo.netlify.com/", view: "https://github.com/vishalicious213/9.1-react-todo-v2", desc: "Yes, a to-do list. Its cliche, but a great way to work with state & forms. Built stateful class component. Displays task list, input field, submit & clear buttons. Child components use parent helper functions to update state when tasks are added or completed. Expanded to include shopping & notes.", stack: ["js", "react"]},
    {img: "rick-and-morty.jpg", name: "Rick and Morty Fansite", type: "Sprint Challenge VI: Single Page Applications", visit: "https://vish213-rick-and-morty.netlify.com/", view: "https://github.com/vishalicious213/7.5-Sprint-Challenge-Single-Page-Apps-v2", desc: "Got data from Rick and Morty API using axios and rendered character data. Used React Router to build a single-page application (SPA) with Routes and Links to components. Used Styled Components to style site and built a search form that filters through characters to find the one(s) sought.", stack: ["js", "react", "reactr", "axios", "styled"]},
    {img: "breast-cancer-comfort.jpg", name: "Breast Cancer Comfort (v2)", type: "Client Website", visit: "http://www.breastcancercomfort.org/home/", view: "#", desc: "Originally a WordPress site built for a cancer charity in Long Island, NY; I redesigned and rebuilt it using HTML/LESS with JavaScript for the navigation bar. Upon request, I refactored it back to WordPress using the Divi theme (which the COO favored) so that staff without coding knowledge could update it independently.", stack: ["wp", "divi"]},
    {img: "react-wars.jpg", name: "React Wars", type: "Sprint Challenge V: React", visit: "https://vish213-reactwars.netlify.com", view: "https://github.com/vishalicious213/6.5-Sprint-Challenge-React-Wars", desc: "Used axios to access the Star Wars API, then used React components, state and side effects to render information about Star Wars characters. Imported and rendered images separately. Styled using Styled Components.", stack: ["js", "react", "axios", "styled"]},
    {img: "nasa.jpg", name: "Astronomy Photo of the Day", type: "Component Side Effects", visit: "https://vish213-nasa.netlify.com/", view: "https://github.com/vishalicious213/6.3-nasa-photo-of-the-day", desc: "Utilized React's useEffect hook to run axios as a side effect & fetch 'Astronomy Photo of the Day' from NASA API. Built components to get data, render image & details. Held cosmic data on state and passed as props to components. Used ternary operator & state to toggle details on/off. Added a date picker to see new images and details.", stack: ["js", "react", "axios"]},
]

const htmlWebProjects = [
    {img: "covetcare-org.jpg", name: "CovetCare Application Portal", type: "Client Website", visit: "https://vish213-cc.netlify.com/index.html", view: "https://github.com/vishalicious213/CC", desc: "Clinical electronic medical records (EMR) company based out of Long Island, NY. Simple, responsive webpage built using HTML/CSS/LESS. In production, buttons link to applications created by their development team.", stack: ["html", "css", "less"]},
    {img: "breast-cancer-comfort.jpg", name: "Breast Cancer Comfort (v1)", type: "Client Website", visit: "https://breast-cancer-comfort.netlify.com/", view: "https://github.com/vishalicious213/bcc", desc: "Breast cancer charity in Long Island, NY. Formerly Wordpress site. Built webpage with HTML/CSS/LESS. Navigation bar written with JavaScript.", stack: ["js", "html", "css", "less"]},
    {img: "potluck.jpg", name: "Potluck Planner", type: "Build Week 1", visit: "https://vishalicious213.github.io/4.x-buildWeek1-Potluck-Planner/", view: "https://github.com/vishalicious213/4.x-buildWeek1-Potluck-Planner", desc: "A group project - I designed and implemented every aspect of the main website while teammates developed the application and back end. Two other designers' websites were linked as alternate 'themes' in the navigation.", stack: ["html", "css", "less"]},
    {img: "spacewalkers.jpg", name: "Space Walkers Web Page", type: "Sprint Challenge II: Advanced CSS", visit: "https://vishalicious213.github.io/2.5-Sprint-Challenge--Advanced-CSS/", view: "https://github.com/vishalicious213/2.5-Sprint-Challenge--Advanced-CSS", desc: "Space Walkers Magazine used viewport, media queries, LESS imports, mixins, LESS variables and hover states to consolidate my understanding of responsive design and preprocessing.", stack: ["html", "css", "less"]},
    {img: "fun-bus.jpg", name: "Fun Bus Website", type: "Preprocessing II", visit: "https://vishalicious213.github.io/2.4-Preprocessing-II/", view: "https://github.com/vishalicious213/2.4-Preprocessing-II", desc: "The upgraded Fun Bus travel agency added a mobile option, new navigation and header. Buttons utilized preprocessing and a parametric mixin.", stack: ["html", "css", "less"]},
    {img: "resume.jpg", name: "Digital Resume", type: "Preprocessing I", visit: "https://vishalicious213.github.io/2.3-Preprocessing-I/", view: "https://github.com/vishalicious213/2.3-Preprocessing-I", desc: "This simple, single-page resume made use of preprocessing, nesting, mixins and variables in LESS. Work history items benefit from mouse-over highlighting.", stack: ["html", "css", "less"]},
    {img: "responsive.jpg", name: "Adaptive website", type: "Responsive Web Design I", visit: "https://vishalicious213.github.io/2.1-responsive-web-design-I/", view: "https://github.com/vishalicious213/2.1-responsive-web-design-I", desc: "My first adaptive website, this project refactors an HTML/CSS site built with inline-block and upgrades it to Flexbox. It features desktop, tablet and mobile breakpoints.", stack: ["html", "css"]},
    {img: "sprint-1.jpg", name: "User Interface and git", type: "Sprint Challenge I", visit: "https://vishalicious213.github.io/1.5-Sprint-Challenge--User-Interface/", view: "https://github.com/vishalicious213/1.5-Sprint-Challenge--User-Interface", desc: "For my first sprint challenge, I built a missing header (navigation and image) on the home page, updated CSS styling (solving specificity problems) and created an additional About page which linked from the new navigation.", stack: ["html", "css"]},
    {img: "sweet-eats.jpg", name: "Sweet Eats Bakery", type: "User Interface I", visit: "https://codepen.io/vishalicious/pen/WVdwPN", view: "#", desc: "Sweet Eats required knowledge of CSS selectors, properties and inheritance to style the bakery's website. Written in CodePen, the website and code share a page.", stack: ["html", "css"]},
]

const jsDomProjects = [
    {img: "dark-mode.jpg", name: "Crypto Tracker (dark mode)", type: "Composing and Sharing Non-Visual Behavior", visit: "https://vish213-dark-mode.netlify.app/", view: "https://github.com/vishalicious213/9.3-dark-mode", desc: "Created React custom hook that composes multiple hooks together & uses local storage to build dark mode toggle that remembers user's preference. axios was set up to get cryptocurrency coin data from Coin Gecko API & Recharts library produced charts from data.", stack: ["js", "react", "axios"]},
    {img: "react-github-followers.jpg", name: "React GitHub Usercard", type: "The React Lifecycle", visit: "https://vish213-react-github-followers.netlify.com/", view: "https://github.com/vishalicious213/9.2-react-github-user-card", desc: "Used React class component lifecycle methods (componentDidMount & componentDidUpdate) to build an app that renders user & follower data from GitHub API. Added search component to load new user & used library to show GitHub Contribution Calendar for user and followers.", stack: ["js", "react", "axios"]},
    {img: "todo.jpg", name: "To-Do List", type: "Class Components", visit: "https://vish213-todo.netlify.com/", view: "https://github.com/vishalicious213/9.1-react-todo-v2", desc: "Yes, a to-do list. Its cliche, but a great way to work with state & forms. Built stateful class component. Displays task list, input field, submit & clear buttons. Child components use parent helper functions to update state when tasks are added or completed. Expanded to include shopping & notes.", stack: ["js", "react"]},
    {img: "10-recipes.jpg", name: "10 Recipes", type: "React Project [Dev Ed]", visit: "https://vish213-10recipes.netlify.com/", view: "https://github.com/vishalicious213/recipes", desc: "React Hooks application with working searchbar. Uses async/await to query Edamam Recipe Search API & return 10 recipes for a given keyword. Made stateful functional components with useState and useEffect hooks & passed data from parent to child via props. Recipe titles & images link to detailed pages.", stack: ["js", "react"]},
    {img: "rick-and-morty.jpg", name: "Rick and Morty Fansite", type: "Sprint Challenge VI: Single Page Applications", visit: "https://vish213-rick-and-morty.netlify.com/", view: "https://github.com/vishalicious213/7.5-Sprint-Challenge-Single-Page-Apps-v2", desc: "Got data from Rick and Morty API using axios and rendered character data. Used React Router to build a single-page application (SPA) with Routes and Links to components. Used Styled Components to style site and built a search form that filters through characters to find the one(s) sought.", stack: ["js", "react", "reactr", "axios", "styled"]},
    {img: "avengers.jpg", name: "Avengers Assemble!", type: "React Router I", visit: "https://vish213-avengers.netlify.com/", view: "https://github.com/vishalicious213/7.1-react-router-avengers", desc: "Avengers, assemble! Used React Router to build a single-page application (SPA) that gives the appearance of an app with multiple pages. Imported and exported components, set up Routes (including 'exact' routes), used Link to build dynamic URLs and set up dynamic routes using URL parameters.", stack: ["js", "react", "reactr"]},
    {img: "react-wars.jpg", name: "React Wars", type: "Sprint Challenge V: React", visit: "https://vish213-reactwars.netlify.com", view: "https://github.com/vishalicious213/6.5-Sprint-Challenge-React-Wars", desc: "Used axios to access the Star Wars API, then used React components, state and side effects to render information about Star Wars characters. Imported and rendered images separately. Styled using Styled Components.", stack: ["js", "react", "axios", "styled"]},
    {img: "nasa.jpg", name: "Astronomy Photo of the Day", type: "Component Side Effects", visit: "https://vish213-nasa.netlify.com/", view: "https://github.com/vishalicious213/6.3-nasa-photo-of-the-day", desc: "Utilized React's useEffect hook to run axios as a side effect & fetch 'Astronomy Photo of the Day' from NASA API. Built components to get data, render image & details. Held cosmic data on state and passed as props to components. Used ternary operator & state to toggle details on/off. Added a date picker to see new images and details.", stack: ["js", "react", "axios"]},
    {img: "instagram-clone.jpg", name: "Vishtagram", type: "Composing React Components & Passing Props", visit: "https://vish213-instagram.netlify.com/", view: "https://github.com/vishalicious213/6.2-React-Components-Insta-Clone/tree/vish-singh", desc: "Instagram clone using React. Rendered search bar section, posts with thumbnails, images, likes section and comments section. Made use of nested components, updated state with working 'likes' heart icon and drilled props down several levels.", stack: ["js", "react"]},
    {img: "american-football.jpg", name: "Football Scoreboard", type: "React Components & Component State", visit: "https://vish213-scoreboard-v3.netlify.com/", view: "https://github.com/vishalicious213/6.1-react-american-football-scoreboard-v3", desc: "Football scoreboard: Two buttons per team - one increments score by 3 points (field goal) and the other by 7 (touchdown + extra point). Demonstrates React components, state, useState and click handlers.", stack: ["js", "react"]},
    {img: "lambda-times.jpg", name: "Lambda Times", type: "Sprint Challenge IV: Applied JavaScript", visit: "https://vishalicious213.github.io/5.5-Sprint-Challenge-Applied-Javascript-v2/", view: "https://github.com/vishalicious213/5.5-Sprint-Challenge-Applied-Javascript-v2", desc: "This project tied together the DOM, components, axios and HTTP get requests through JavaScript. Article data was retrieved from an API and required manipulation of nested objects and arrays.", stack: ["js", "dom", "axios"]},
    {img: "github-usercard.jpg", name: "GitHub Followers", type: "Components II", visit: "https://vishalicious213.github.io/5.4-github-usercard-v2/", view: "https://github.com/vishalicious213/5.4-github-usercard-v2", desc: "Accessed the GitHub API using the axios JavaScript library and built a component that creates social cards of my GitHub followers based on returned data.", stack: ["js", "dom", "axios"]},
    {img: "newsfeed.jpg", name: "Lambda School Newsfeed", type: "Components I", visit: "https://vish213-newsfeed.netlify.com/", view: "https://github.com/vishalicious213/5.3-Newsfeed-Components-v2", desc: "Created component to assemble and place articles using JavaScript and the DOM. Button expands/contracts each article. Did same with menu.", stack: ["js", "dom"]},
    {img: "fun-bus-dom.jpg", name: "Fun Bus II", type: "DOM II - Event Exploration", visit: "https://vishalicious213.github.io/5.2-DOM-IIv2/", view: "https://github.com/vishalicious213/5.2-DOM-IIv2", desc: "DOM II utilized the Document Object Model and JavaScript to rebuild the Fun Bus website. Interactive elements include mouseover, click, double-click, scroll effects and more.", stack: ["js", "dom"]},    
]

const WPProjects = [
    {img: "breast-cancer-comfort.jpg", name: "Breast Cancer Comfort (v2)", type: "Client Website", visit: "http://www.breastcancercomfort.org/home/", view: "#", desc: "Originally a WordPress site built for a cancer charity in Long Island, NY; I redesigned and rebuilt it using HTML/LESS with JavaScript for the navigation bar. Upon request, I refactored it back to WordPress using the Divi theme (which the COO favored) so that staff without coding knowledge could update it independently.", stack: ["wp", "divi"]},
    {img: "blog.jpg", name: "Redo From Start", type: "Personal Project - Coding Blog", visit: "https://neophyte.home.blog/", view: "#", desc: "My programming blog details my experience learning how to think like a programmer, grasp computer science concepts and, of course, tackling coding projects.", stack: ["wp", "html", "css"]},
    {img: "wp-housecall.jpg", name: "HouseCall Support Services", type: "Client Website", visit: "http://housecallny.com/", view: "#", desc: "In 2016, I started a tech support company in NY, because working full-time at an EMR obviously wasn't consuming enough of my time. Building this site is one of the experiences that led to my desire to learn frontend development. WordPress sufficed to let me quickly create an online presence (coupled with Facebook) and was key to marketing my services.", stack: ["wp"]},
    {img: "wp-mortal.jpg", name: "Mortal Equality", type: "Personal Project - Metal Blog", visit: "https://mortalequality.wordpress.com/", view: "#", desc: "In 2014, I started my metal blog. It wasn't focused on music reviews or the like. It was driven by social issues related to metal, academic research (my wife writes about metal and presents at conferences, internationally) ethnic influences on metal subgenres, and the like. It was an offshoot of my bass blog, which had begun to take in a lot of metal-related topics instead of focusing on bass and music theory. When the stars are right, I'll return to this. There's so much to explore, and its ever-expanding.", stack: ["wp"]},
    {img: "wp-breaking.jpg", name: "Breaking the 4th Wall", type: "Personal Project - Recreational Blog", visit: "https://bt4wall.wordpress.com/", view: "#", desc: "I'm something of a workaholic. In 2013, I tried to take a step away from that and engage in some of my past hobbies. I made this blog to share information about the activities and sub-cultures I had taken part in, and to help turn work/life balance into a series of essays, as is a habit of mine. Some things discussed in my recreational blog included computer games, tabletop roleplaying games, comic books (and the resultant movies and series) and related topics.", stack: ["wp"]},
    {img: "wp-ugly.jpg", name: "Ugly Bass Face", type: "Personal Project - Bass Blog", visit: "https://uglybass.wordpress.com/", view: "#", desc: "In 2011, I decided to teach myself bass. I created a blog to share the experience with other beginner bassists and it developed a following, leading me to create a Facebook group and recruit other bass and music theory bloggers and instructors. I haven't made time to continue with bass recently, but my past efforts and small insights are still available to help guide others, and the Facebook group is still going strong.", stack: ["wp"]},
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
    // margin-top: 2.5rem;
    border-radius: .25rem;

    &:hover {
        border: .5px solid #4c5c96;
        border-top: .5px solid white;
        border-left: .5px solid silver;
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
    padding-top: .5px;
    padding-left: .5px;
    box-sizing: border-box;
    overflow: hidden;
`
const Img = styled.img`
    width: 100%;
    border-radius: .25rem .25rem 0 0;
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
        text-decoration: none;
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
        text-decoration: none;
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

        @media screen and (max-width: 840px) {
            font-size: .9rem;
        } // @media 840
    `
    const Tech = styled.ul`
        border-left: 1px solid lightslategray;
        font-size: 1.5rem;
        margin-left: .5rem;
        padding-left: .5rem;
        text-align: center;
        max-width: 2rem;
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
    const DiviImg = styled.img`
        width: 1.25rem;
        background-color: gainsboro;
        border: 1px solid gainsboro;
        border-radius: .35rem;
    `
    const ReactRImg = styled.img`
        width: 1.25rem;
        border: 1px solid gainsboro;
        border-radius: .35rem;
    `
    const StyledImg = styled.img`
        width: 1.25rem;
        border: 1px solid gainsboro;
        border-radius: .35rem;
    `

const ProjectCard = (props) => {
    // let dataSet=htmlWebProjects;
    let dataSet=props.cards;
    // console.log('props = ', dataSet);

    switch(props.cards){
        case 'featuredProjects':
            dataSet=featuredProjects;
            break;
        case 'htmlWebProjects':
            dataSet=htmlWebProjects;
            break;
        case 'jsDomProjects':
            dataSet=jsDomProjects;
            break;
        case 'WPProjects':
            dataSet=WPProjects;
            break;
        default:
    }

    return (
        <Container>
            {dataSet.map(project =>
                <Card>
                    <Screenshot>
                        <a href={project.visit}>
                            <Img src={require(`../img/${project.img}`)} alt={project.name}></Img>
                        </a>
                    </Screenshot>
                    <WorkInfo>
                        <Title>{project.name}</Title>
                        <Type>{project.type}</Type>
                        <Offsite>
                            <Visit href={project.visit}>
                                <VisitButton>
                                    <i className="far fa-arrow-alt-circle-right"></i>
                                </VisitButton>
                                <VisitText>VISIT SITE</VisitText>
                            </Visit>
                            <View href={project.view}>
                                <ViewButton>
                                    <i className="fab fa-github"></i>
                                </ViewButton>
                                <ViewText>VIEW CODE</ViewText>
                            </View>
                        </Offsite>
                        <TechBox>
                            <Descriptor>{project.desc}</Descriptor>
                            <Tech className={project.stack}>{
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
                                        case 'divi': return (<DiviImg title='Divi' className='shrinkImg' src={require('../img/divi-150x150.png')}></DiviImg>);
                                        case 'reactr' : return (<ReactRImg title='React Router' className='shrinkImg' src={require('../img/react-router.png')}></ReactRImg>);
                                        case 'styled' : return (<StyledImg title='Styled Components' className='shrinkImg' src={require('../img/styled-components.svg')}></StyledImg>);
                                        default:
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

export default ProjectCard;