import React from 'react';

const featuredProjects = [
    {img: "img/breast-cancer-comfort.jpg", name: "Breast Cancer Comfort", type: "Client Website", visit: "https://breast-cancer-comfort.netlify.com/", view: "https://github.com/vishalicious213/bcc", desc: "Breast cancer charity in Long Island, NY. Formerly Wordpress site. Built webpage with HTML/CSS/LESS. Navigation bar written with JavaScript.", stack: ["js", "html", "css", "less"]},
    {img: "img/react-wars.jpg", name: "React Wars", type: "Sprint Challenge V: React", visit: "https://vish213-reactwars.netlify.com", view: "https://github.com/vishalicious213/6.5-Sprint-Challenge-React-Wars", desc: "Used axios to access the Star Wars API, then used React components, state and side effects to render information about Star Wars characters. Imported and rendered images separately.", stack: ["js", "react", "axios"]},
    {img: "img/american-football.jpg", name: "Football Scoreboard", type: "React Components & Component State", visit: "https://vish213-scoreboard.netlify.com/", view: "https://github.com/vishalicious213/6.1-react-american-football-scoreboard-v2", desc: "Football scoreboard: Two buttons per team - one increments score by 3 points (field goal) and the other by 7 (touchdown + extra point). Demonstrates React components, state and click handlers.", stack: ["js", "react"]},
    {img: "img/github-usercard.jpg", name: "GitHub Followers", type: "Components II", visit: "https://vishalicious213.github.io/5.4-github-usercard-v2/", view: "https://github.com/vishalicious213/5.4-github-usercard-v2", desc: "Accessed the GitHub API using the axios JavaScript library and built a component that creates social cards of my GitHub followers based on returned data.", stack: ["js", "dom", "axios"]},
    {img: "img/potluck.jpg", name: "Potluck Planner", type: "Build Week 1", visit: "https://vishalicious213.github.io/4.x-buildWeek1-Potluck-Planner/", view: "https://github.com/vishalicious213/4.x-buildWeek1-Potluck-Planner", desc: "A group project - I designed and implemented every aspect of the main website while teammates developed the application and back end. Two other designers' websites were linked as alternate 'themes' in the navigation.", stack: ["html", "css", "less"]},
    {img: "img/blog.jpg", name: "Redo From Start", type: "Personal Project", visit: "https://neophyte.home.blog/", view: "#", desc: "My programming blog details my experience learning how to think like a programmer, grasp computer science concepts and, of course, tackling coding projects.", stack: ["html", "css", "wp"]}
]

class TestComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            featuredProjects.map(project => <p>{project.name}</p>)
        )
    }


    // render() {
    //     return (
    //         <div>
    //             <div>Test Component</div>
    //             <div>
    //                 <span><b>{featuredProjects[0].name}: </b></span>
    //                 <span>{featuredProjects[0].type}</span>
    //             </div>
    //             <div>
    //                 <span><b>{featuredProjects[1].name}: </b></span>
    //                 <span>{featuredProjects[1].type}</span>
    //             </div>
    //         </div>
    //     )
    // }

    // render: function() {
    //     return (
    //         <div>
    //             <div>Test Component</div>
    //             {featuredProjects.map((project, index) =>
    //                 return <div>{project[index].name}</div>
    //             )}
    //         </div>
    //     )
    // }

    // render: function() {
    // const elements = ['one', 'two', 'three'];
    // return (
    //     <ul>
    //     {elements.map((value, index) => {
    //         return <li key={index}>{value}</li>
    //     })}
    //     </ul>
    // )
    // }

} // class TestComponent

export default TestComponent;