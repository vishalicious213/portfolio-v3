import React from 'react';
import styled from 'styled-components';
 
const featuredProjects = [
    {img: "iconic-v2.gif", name: "Iconic Web Studios v2", type: "Professional Project", visit: "https://iconicweb.dev/", view: "https://github.com/vishalicious213/iconic-v3", desc: "This is v2 of the website for Iconic Web Studios, my web development company. Visually, I went in a completely different direction from v1. I still used React and Next.js to build it, but added on Google Maps and Netlify Forms. This site lives at www.iconicweb.dev.", stack: ["js", "react", "next", "g-maps", "netlify"]},
    {img: "breast-cancer-comfort.jpg", name: "Breast Cancer Comfort (v2)", type: "Client Website", visit: "http://www.breastcancercomfort.org/", view: "#", desc: "Originally a WordPress site built for a cancer charity in Long Island, NY; I redesigned and rebuilt it using HTML/LESS with JavaScript for the navigation bar. Upon request, I refactored it back to WordPress using the Divi theme (which the COO favored) so that staff without coding knowledge could update it independently.", stack: ["wp", "divi"]},
    {img: "wildfires.jpg", name: "Wildfire Tracker", type: "Personal Project", visit: "https://vish213-wildfire.netlify.app/", view: "https://github.com/vishalicious213/wildfires", desc: "React Hooks app. Displays wildfires around the globe. Uses NASA Open API for wildfire data, Google Maps API for map generation, Google-Map-React to render data geolocationally & Iconify to provide fire icons.", stack: ["js", "react", "nasa", "g-maps", "map", "iconify"]},
    {img: "smurfs.jpg", name: "React Smurfs Village", type: "10.5 Sprint Challenge X: Advanced State Management", visit: "https://vish213-smurfs.netlify.app/", view: "https://github.com/vishalicious213/10.5-sprint-challenge-state-management-smurfs-v2", desc: "Managed global state with Context API & built Smurf village. Fetched data from local API with axios. Made form to update API data with new smurfs. Added ability to render male or female smurfs conditionally. Note: API will update locally, but not at Netlify.", stack: ["js", "react", "axios"]},
    {img: "react-github-followers.jpg", name: "React GitHub Usercard", type: "9.2 The React Lifecycle", visit: "https://vish213-react-github-followers.netlify.com/", view: "https://github.com/vishalicious213/9.2-react-github-user-card", desc: "Used React class component lifecycle methods (componentDidMount & componentDidUpdate) to build an app that renders user & follower data from GitHub API. Added search component to load new user & used React GitHub Calendar to show GitHub contribution calendar for user and followers.", stack: ["js", "react", "axios", "rgcal"]},
    {img: "todo.jpg", name: "To-Do List", type: "9.1 Class Components", visit: "https://vish213-todo.netlify.com/", view: "https://github.com/vishalicious213/9.1-react-todo-v2", desc: "Yes, a to-do list. Its cliche, but a great way to work with state & forms. Built stateful class component. Displays task list, input field, submit & clear buttons. Child components use parent helper functions to update state when tasks are added or completed. Expanded to include shopping & notes.", stack: ["js", "react"]},
]

const htmlWebProjects = [
    {img: "covetcare-org.jpg", name: "CovetCare Application Portal", type: "Client Website", visit: "https://vish213-cc.netlify.com/index.html", view: "https://github.com/vishalicious213/CC", desc: "Clinical electronic medical records (EMR) company based out of Long Island, NY. Simple, responsive webpage built using HTML/LESS. In production, buttons link to applications created by their development team.", stack: ["html", "css", "less"]},
    {img: "breast-cancer-comfort.jpg", name: "Breast Cancer Comfort (v1)", type: "Client Website", visit: "https://breast-cancer-comfort.netlify.com/", view: "https://github.com/vishalicious213/bcc", desc: "Breast cancer charity in Long Island, NY. Formerly Wordpress site. Built webpage with HTML/CSS/LESS. Navigation bar written with JavaScript.", stack: ["js", "html", "css", "less"]},
    {img: "potluck.jpg", name: "Potluck Planner", type: "4.0 Build Week 1", visit: "https://vishalicious213.github.io/4.x-buildWeek1-Potluck-Planner/", view: "https://github.com/vishalicious213/4.x-buildWeek1-Potluck-Planner", desc: "A group project - I designed and implemented every aspect of the main website while teammates developed the application and back end. Two other designers' websites were linked as alternate 'themes' in the navigation.", stack: ["html", "css", "less"]},
    {img: "glass.jpg", name: "Glassmorphic Portfolio Page", type: "Personal Project", visit: "https://vish213-glass.netlify.app/", view: "https://github.com/vishalicious213/glassmorphic-site", desc: "'Glassmorphic'-style portfolio. Features scrollable translucent body, details & summary HTML elements. Scrolling over background shows translucent images beneath.", stack: ["html", "css"]},
    {img: "resume-v2.jpg", name: "Digital Resume (v2)", type: "Personal Project", visit: "https://vish213.netlify.app/", view: "https://github.com/vishalicious213/resume-v2", desc: "Updated online resume. Used details & summary HTML elements, fluid typography (responsive font sizes) and outline-offset for the first time. Clickable education, projects & experience entries reveal details.", stack: ["html", "css"]},
    {img: "fcc-5.jpg", name: "fCC Personal Portfolio Webpage", type: "freeCodeCamp Responsive Web Design Project 5", visit: "https://codepen.io/vishalicious/full/bGeqqaV", view: "https://codepen.io/vishalicious/pen/bGeqqaV", desc: "Final Responsive Web Design project at freeCodeCamp. Semantic HTML, navbar with in-page links, external links to projects & social media, pinned navbar. Earned Responsive Web Design certificate with completion of this project.", stack: ["html", "css", "codepen"]},
    {img: "fcc-4.jpg", name: "fCC Technical Documentation Page", type: "freeCodeCamp Responsive Web Design Project 4", visit: "https://codepen.io/vishalicious/full/xxOgoJr", view: "https://codepen.io/vishalicious/pen/xxOgoJr", desc: "Responsive page. Navigation sidebar turns into top-aligned menu for mobile. Included sections with lists, code areas & text. Navbar used in-page links to sections. Used positioning, flexbox & percentage dimensions for responsiveness.", stack: ["html", "css", "codepen"]},
    {img: "fcc-3.jpg", name: "fCC Product Landing Page", type: "freeCodeCamp Responsive Web Design Project 3", visit: "https://codepen.io/vishalicious/full/pobRavL", view: "https://codepen.io/vishalicious/pen/pobRavL", desc: "Product landing page includes responsive text & image, buttons in navigation bar, embedded video & a simple form to collect email addresses. Navbar attached to top of screen. Flexbox & media queries provide responsiveness.", stack: ["html", "css", "codepen"]},
    {img: "fcc-2.jpg", name: "fCC Survey Form", type: "freeCodeCamp Responsive Web Design Project 2", visit: "https://codepen.io/vishalicious/full/GRqrJrm", view: "https://codepen.io/vishalicious/pen/GRqrJrm", desc: "Built a survey form with mandatory fields. Form fields used validation checking & range checking for numbers. Included text fields, text area, date fields, drop-down lists, checkboxes, radio buttons, labels & a submit button.", stack: ["html", "css", "codepen"]},
    {img: "fcc-1.jpg", name: "fCC Tribute Page", type: "freeCodeCamp Responsive Web Design Project 1", visit: "https://codepen.io/vishalicious/full/YzWGBpV", view: "https://codepen.io/vishalicious/pen/YzWGBpV", desc: "Built a tribute page using semantic HTML and styled with CSS. Used HTML id tags, CSS id selectors, a responsively-resizing image and centering.", stack: ["html", "css", "codepen"]},
    {img: "spacewalkers.jpg", name: "Space Walkers Web Page", type: "2.5 Sprint Challenge II: Advanced CSS", visit: "https://vishalicious213.github.io/2.5-Sprint-Challenge--Advanced-CSS/", view: "https://github.com/vishalicious213/2.5-Sprint-Challenge--Advanced-CSS", desc: "Space Walkers Magazine used viewport, media queries, LESS imports, mixins, LESS variables and hover states to consolidate my understanding of responsive design and preprocessing.", stack: ["html", "css", "less"]},
    {img: "fun-bus.jpg", name: "Fun Bus Website", type: "2.4 Preprocessing II", visit: "https://vishalicious213.github.io/2.4-Preprocessing-II/", view: "https://github.com/vishalicious213/2.4-Preprocessing-II", desc: "The upgraded Fun Bus travel agency added a mobile option, new navigation and header. Buttons utilized preprocessing and a parametric mixin.", stack: ["html", "css", "less"]},
    {img: "resume.jpg", name: "Digital Resume", type: "2.3 Preprocessing I", visit: "https://vishalicious213.github.io/2.3-Preprocessing-I/", view: "https://github.com/vishalicious213/2.3-Preprocessing-I", desc: "This simple, single-page resume made use of preprocessing, nesting, mixins and variables in LESS. Work history items benefit from mouse-over highlighting.", stack: ["html", "css", "less"]},
    {img: "responsive.jpg", name: "Adaptive website", type: "2.1 Responsive Web Design I", visit: "https://vishalicious213.github.io/2.1-responsive-web-design-I/", view: "https://github.com/vishalicious213/2.1-responsive-web-design-I", desc: "My first adaptive website, this project refactors an HTML/CSS site built with inline-block and upgrades it to Flexbox. It features desktop, tablet and mobile breakpoints.", stack: ["html", "css"]},
    {img: "sprint-1.jpg", name: "User Interface and git", type: "1.5 Sprint Challenge I", visit: "https://vishalicious213.github.io/1.5-Sprint-Challenge--User-Interface/", view: "https://github.com/vishalicious213/1.5-Sprint-Challenge--User-Interface", desc: "For my first sprint challenge, I built a missing header (navigation and image) on the home page, updated CSS styling (solving specificity problems) and created an additional About page which linked from the new navigation.", stack: ["html", "css"]},
    {img: "yosemite.jpg", name: "Yosemite Park Guide", type: "1.3 Intro CSS", visit: "https://vishalicious213.github.io/web-module-project-intro-css/", view: "https://github.com/vishalicious213/web-module-project-intro-css", desc: "Structured elements on page using semantic HTML and styled them using CSS. Used dynamic size units (no pixels) and replaced non-working images with new ones.", stack: ["html", "css"]},
    {img: "sweet-eats.jpg", name: "Sweet Eats Bakery", type: "1.1 User Interface I", visit: "https://codepen.io/vishalicious/full/WVdwPN", view: "https://codepen.io/vishalicious/pen/WVdwPN", desc: "Sweet Eats required knowledge of CSS selectors, properties and inheritance to style the bakery's website. Written in CodePen, the website and code share a page.", stack: ["html", "css", "codepen"]},
]

const jsDomProjects = [
    {img: "iconic-v2.gif", name: "Iconic Web Studios v2", type: "Professional Project", visit: "https://iconicweb.dev/", view: "https://github.com/vishalicious213/iconic-v3", desc: "This is v2 of the website for Iconic Web Studios, my web development company. Visually, I went in a completely different direction from v1. I still used React and Next.js to build it, but added on Google Maps and Netlify Forms. This site lives at www.iconicweb.dev.", stack: ["js", "react", "next", "g-maps", "netlify"]},
    {img: "iconic-v1.gif", name: "Iconic Web Studios v1", type: "Professional Project", visit: "https://vish213-iconic.netlify.app/", view: "https://github.com/vishalicious213/iconic-v2", desc: "Iconic Web Studios is my web development company. I've assembled a small team of developers and designers whose focus is on using responsive, mobile-first design and SEO best practices to build a web presence for small businesses and individuals and help them succeed in their markets. This was my proof-of-concept design.", stack: ["js", "react", "next"]},
    {img: "wildfires.jpg", name: "Wildfire Tracker", type: "Personal Project", visit: "https://vish213-wildfire.netlify.app/", view: "https://github.com/vishalicious213/wildfires", desc: "React Hooks app. Displays wildfires around the globe. Uses NASA Open API for wildfire data, Google Maps API for map generation, Google-Map-React to render data geolocationally & Iconify to provide fire icons.", stack: ["js", "react", "nasa", "g-maps", "map", "iconify"]},
    {img: "friends.jpg", name: "F-R-I-E-N-D-S List", type: "11.2 Client-Side Authentication", visit: "https://vish213-friends.netlify.app/", view: "https://github.com/vishalicious213/11.2-auth-friends", desc: "Used React-Router, protected routes, axios, AJAX, promises & authentication tokens to build CRUD app. User can login & view friends list. Secured pages require token for access. User can change each friend's details, add new friends & delete friends. Note: API server works locally.", stack: ["js", "react", "axios"]},
    {img: "smurfs.jpg", name: "React Smurfs Village", type: "10.5 Sprint Challenge X: Advanced State Management", visit: "https://vish213-smurfs.netlify.app/", view: "https://github.com/vishalicious213/10.5-sprint-challenge-state-management-smurfs-v2", desc: "Managed global state with Context API & built Smurf village. Fetched data from local API with axios. Made form to update API data with new smurfs. Added ability to render male or female smurfs conditionally. Note: API will update locally, but not at Netlify.", stack: ["js", "react", "axios"]},
    {img: "womens-world-cup.jpg", name: "Women's World Cup", type: "9.5 Sprint Challenge IX: Advanced React", visit: "https://vish213-wwc.netlify.app/", view: "https://github.com/vishalicious213/9.5-sprint-challenge-advanced-react-v4", desc: "To viewers, this is a simple React app that uses axios to read data from a local API and toggles color schemes. Behind the scenes though, it makes use of a custom hook and testing via React Testing Library.", stack: ["js", "react", "axios", "styled", "rtl"]},
    {img: "dark-mode.jpg", name: "Crypto Tracker (dark mode)", type: "9.3 Composing and Sharing Non-Visual Behavior", visit: "https://vish213-dark-mode.netlify.app/", view: "https://github.com/vishalicious213/9.3-dark-mode", desc: "Created React custom hook that composes multiple hooks together & uses local storage to build dark mode toggle that remembers user's preference. axios was set up to get cryptocurrency coin data from Coin Gecko API & Recharts library produced charts from data.", stack: ["js", "react", "axios", "recharts"]},
    {img: "react-github-followers.jpg", name: "React GitHub Usercard", type: "9.2 The React Lifecycle", visit: "https://vish213-react-github-followers.netlify.com/", view: "https://github.com/vishalicious213/9.2-react-github-user-card", desc: "Used React class component lifecycle methods (componentDidMount & componentDidUpdate) to build an app that renders user & follower data from GitHub API. Added search component to load new user & used React GitHub Calendar to show GitHub contribution calendar for user and followers.", stack: ["js", "react", "axios", "rgcal"]},
    {img: "todo.jpg", name: "To-Do List", type: "9.1 Class Components", visit: "https://vish213-todo.netlify.com/", view: "https://github.com/vishalicious213/9.1-react-todo-v2", desc: "Yes, a to-do list. Its cliche, but a great way to work with state & forms. Built stateful class component. Displays task list, input field, submit & clear buttons. Child components use parent helper functions to update state when tasks are added or completed. Expanded to include shopping & notes.", stack: ["js", "react"]},
    {img: "react-test-projects.jpg", name: "React Test Projects", type: "Personal Project", visit: "https://vish213-react-form-tests.netlify.app/", view: "https://github.com/vishalicious213/react-test-projects", desc: "Experiments with forms, state-controlled inputs and form validation using React. The goal is to let state control values for different input types, including clearing state and onscreen JSX elements when a form is reset.", stack: ["js", "react", "reactr"]},
    {img: "10-recipes.jpg", name: "10 Recipes", type: "Personal Project", visit: "https://vish213-10recipes.netlify.com/", view: "https://github.com/vishalicious213/recipes", desc: "React Hooks application with searchbar. Uses async/await to query Edamam Recipe Search API & return 10 recipes for a given keyword. Made stateful functional components with useState & useEffect hooks. Passed data from parent to child via props. Recipe titles & images link to detailed pages.", stack: ["js", "react"]},
    {img: "rick-and-morty.jpg", name: "Rick and Morty Fansite", type: "7.5 Sprint Challenge VII: Single Page Applications", visit: "https://vish213-rick-and-morty.netlify.com/", view: "https://github.com/vishalicious213/7.5-Sprint-Challenge-Single-Page-Apps-v2", desc: "Got data from Rick and Morty API using axios & rendered it. Used React Router to build a single-page application (SPA) with Routes & Links to components. Styled site with Styled Components & built a search form that filters characters to find target.", stack: ["js", "react", "reactr", "axios", "styled"]},
    {img: "avengers.jpg", name: "Avengers Assemble!", type: "7.1 React Router I", visit: "https://vish213-avengers.netlify.com/", view: "https://github.com/vishalicious213/7.1-react-router-avengers", desc: "Avengers, assemble! Used React Router to build a single-page application (SPA) that gives the appearance of an app with multiple pages. Imported & exported components, set up Routes, Built dynamic URLs with Link & set up dynamic routes using URL parameters.", stack: ["js", "react", "reactr"]},
    {img: "react-wars.jpg", name: "React Wars", type: "6.5 Sprint Challenge VI: React", visit: "https://vish213-reactwars.netlify.com", view: "https://github.com/vishalicious213/6.5-Sprint-Challenge-React-Wars", desc: "Used axios to access the Star Wars API, then used React components, state and side effects to render information about Star Wars characters. Imported and rendered images separately. Styled using Styled Components.", stack: ["js", "react", "axios", "styled"]},
    {img: "nasa.jpg", name: "Astronomy Photo of the Day", type: "6.3 Component Side Effects", visit: "https://vish213-nasa.netlify.com/", view: "https://github.com/vishalicious213/6.3-nasa-photo-of-the-day", desc: "Utilized useEffect hook to run axios as a side effect & fetch 'Astronomy Photo of the Day' from NASA API. Built components to get data, render image & details. Held cosmic data on state & passed as props to components. Used ternary operator & state to toggle details on/off. Added a date picker to see new images & details.", stack: ["js", "react", "axios", "nasa"]},
    {img: "instagram-clone.jpg", name: "Vishtagram", type: "6.2 Composing React Components & Passing Props", visit: "https://vish213-instagram.netlify.com/", view: "https://github.com/vishalicious213/6.2-React-Components-Insta-Clone/tree/vish-singh", desc: "Instagram clone using React. Rendered search bar section, posts with thumbnails, images, likes section & comments section. Made use of nested components, updated state with working 'likes' heart icon & drilled props down several levels.", stack: ["js", "react"]},
    {img: "american-football.jpg", name: "Football Scoreboard", type: "6.1 React Components & Component State", visit: "https://vish213-scoreboard-v3.netlify.com/", view: "https://github.com/vishalicious213/6.1-react-american-football-scoreboard-v3", desc: "Football scoreboard: Two buttons per team - one increments score by 3 points (field goal) and the other by 7 (touchdown + extra point). Demonstrates React components, state, useState and click handlers.", stack: ["js", "react"]},
    {img: "lambda-times.jpg", name: "Lambda Times", type: "5.5 Sprint Challenge V: Applied JavaScript", visit: "https://vishalicious213.github.io/5.5-Sprint-Challenge-Applied-Javascript-v2/", view: "https://github.com/vishalicious213/5.5-Sprint-Challenge-Applied-Javascript-v2", desc: "This project tied together the DOM, components, axios & HTTP get requests through JavaScript. Article data was retrieved from an API & required manipulation of nested objects & arrays.", stack: ["js", "dom", "axios"]},
    {img: "github-usercard.jpg", name: "GitHub Followers", type: "5.4 Components II", visit: "https://vishalicious213.github.io/5.4-github-usercard-v2/", view: "https://github.com/vishalicious213/5.4-github-usercard-v2", desc: "Accessed the GitHub API using the axios JavaScript library and built a component that creates social cards of my GitHub followers based on returned data.", stack: ["js", "dom", "axios"]},
    {img: "pw-generator.jpg", name: "Random Password Generator", type: "Personal Project", visit: "https://vish213-pwgen.netlify.app/", view: "https://github.com/vishalicious213/password-generator", desc: "Generates two random 15-character password strings with the click of a button using letters, numbers & symbols and renders them onscreen for visitor to copy.", stack: ["js", "dom"]},
    {img: "singh-fighter.jpg", name: "Singh Fighter", type: "Personal Project", visit: "https://vish213-sf.netlify.app/", view: "https://github.com/vishalicious213/singh-fighter", desc: "Small project to entertain my kids. Based on Emoji Fighter project. Lets the girls randomly generate combatants from our family and a few other odds & ends.", stack: ["js", "dom"]},
    {img: "emoji-fighter.jpg", name: "Emoji Fighter", type: "Personal Project", visit: "https://vish213-emoji-fighter.netlify.app/", view: "https://github.com/vishalicious213/emoji-fighter", desc: "Uses the Math.random() and Math.floor() functions to generate a random integer and render two emoji characters in a Street Fighter II matchup splash screen.", stack: ["js", "dom"]},
    {img: "basketball-scoreboard.jpg", name: "Basketball Scoreboard", type: "Personal Project", visit: "https://vish213-basket-score.netlify.app/", view: "https://github.com/vishalicious213/basketball-scoreboard", desc: "Basketball scoreboard. Three buttons per team to increment score by 1, 2 or 3 points. Made use of getElementById to wire button-connected functions to HTML elements.", stack: ["js", "dom"]},
    {img: "blackjack.jpg", name: "Blackjack", type: "Personal Project", visit: "https://vish213-blackjack.netlify.app/", view: "https://github.com/vishalicious213/blackjack", desc: "Single-player blackjack game. Used JavaScript to manipulate DOM elements to update game state. Draw a hand, get a new card, reset game.", stack: ["js", "dom"]},
    {img: "rep-counter.jpg", name: "Repitition/Lap Counter", type: "Personal Project", visit: "https://vish213-reps.netlify.app/", view: "https://github.com/vishalicious213/rep-counter", desc: "Track the number of reps in a set when working out or the number of minutes in a lap when running/walking. Used getElementById to connect button outputs to HTML elements.", stack: ["js", "dom"]},
    {img: "newsfeed.jpg", name: "Lambda School Newsfeed", type: "5.3 Components I", visit: "https://vish213-newsfeed.netlify.com/", view: "https://github.com/vishalicious213/5.3-Newsfeed-Components-v2", desc: "Created component to assemble and place articles using JavaScript and the DOM. Button expands/contracts each article. Did same with menu.", stack: ["js", "dom"]},
    {img: "fun-bus-dom.jpg", name: "Fun Bus II", type: "5.2 DOM II - Event Exploration", visit: "https://vishalicious213.github.io/5.2-DOM-IIv2/", view: "https://github.com/vishalicious213/5.2-DOM-IIv2", desc: "DOM II utilized the Document Object Model and JavaScript to rebuild the Fun Bus website. Interactive elements include mouseover, click, double-click, scroll effects and more.", stack: ["js", "dom"]},    
]

const WPProjects = [
    {img: "breast-cancer-comfort.jpg", name: "Breast Cancer Comfort (v2)", type: "Client Website", visit: "http://www.breastcancercomfort.org/", view: "#", desc: "Originally a WordPress site built for a cancer charity in Long Island, NY; I redesigned and rebuilt it using HTML/LESS with JavaScript for the navigation bar. Upon request, I refactored it back to WordPress using the Divi theme (which the COO favored) so that staff without coding knowledge could update it independently. Link goes to current site, WP version is gone.", stack: ["wp", "divi"]},
    {img: "blog.jpg", name: "Redo From Start", type: "Personal Project - Coding Blog", visit: "https://neophyte.home.blog/", view: "#", desc: "My programming blog details my experience learning how to think like a programmer, grasp computer science concepts and, of course, tackling coding projects.", stack: ["wp", "html", "css"]},
    {img: "wp-housecall.jpg", name: "HouseCall Support Services", type: "Client Website", visit: "http://housecallny.com/", view: "#", desc: "In 2016, I started a tech support company in NY, because working full-time at an EMR obviously wasn't consuming enough of my time. Building this site is one of the experiences that led to my desire to learn frontend development. WordPress sufficed to let me quickly create an online presence (coupled with Facebook) and was key to marketing my services.", stack: ["wp"]},
    {img: "wp-mortal.jpg", name: "Mortal Equality", type: "Personal Project - Metal Blog", visit: "https://mortalequality.wordpress.com/", view: "#", desc: "In 2014, I started my metal blog. It wasn't focused on music reviews or the like. It was driven by social issues related to metal, academic research (my wife writes about metal and presents at conferences, internationally) ethnic influences on metal subgenres, and the like. It was an offshoot of my bass blog, which had begun to take in a lot of metal-related topics instead of focusing on bass and music theory. When the stars are right, I'll return to this. There's so much to explore, and its ever-expanding.", stack: ["wp"]},
    {img: "wp-breaking.jpg", name: "Breaking the 4th Wall", type: "Personal Project - Recreational Blog", visit: "https://bt4wall.wordpress.com/", view: "#", desc: "I'm something of a workaholic. In 2013, I tried to take a step away from that and engage in some of my past hobbies. I made this blog to share information about the activities and sub-cultures I had taken part in, and to help turn work/life balance into a series of essays, as is a habit of mine. Some things discussed in my recreational blog included computer games, tabletop roleplaying games, comic books (and the resultant movies and series) and related topics.", stack: ["wp"]},
    {img: "wp-ugly.jpg", name: "Ugly Bass Face", type: "Personal Project - Bass Blog", visit: "https://uglybass.wordpress.com/", view: "#", desc: "In 2011, I decided to teach myself bass. I created a blog to share the experience with other beginner bassists and it developed a following, leading me to create a Facebook group and recruit other bass and music theory bloggers and instructors. I haven't made time to continue with bass recently, but my past efforts and small insights are still available to help guide others, and the Facebook group is still going strong.", stack: ["wp"]},
]

// {img: "#", name: "#", type: "#", visit: "#", view: "#", desc: "#", stack: ["#", "#"]},

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
                <Card key={project.name}>
                    <Screenshot>
                        <a target="_blank" rel="noopener noreferrer" href={project.visit}>
                            <Img src={require(`../img/${project.img}`)} alt={project.name}></Img>
                        </a>
                    </Screenshot>
                    <WorkInfo>
                        <Title>{project.name}</Title>
                        <Type>{project.type}</Type>
                        <Offsite>
                            <Visit target="_blank" rel="noopener noreferrer" href={project.visit}>
                                <VisitButton>
                                    <i className="far fa-arrow-alt-circle-right"></i>
                                </VisitButton>
                                <VisitText>VISIT SITE</VisitText>
                            </Visit>
                            <View target="_blank" rel="noopener noreferrer" href={project.view}>
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
                                        case 'html': return (<Li title='HTML5' key='html' className='fab fa-html5'></Li>);
                                        case 'css': return (<Li title='CSS3' key='css' className='fab fa-css3-alt'></Li>);
                                        case 'less': return (<Lib title='LESS' key='less' className='fab fa-less'></Lib>);
                                        case 'js': return (<Li title='JavaScript' key='js' className='fab fa-js-square'></Li>);
                                        case 'wp': return (<Li title='WordPress' key='wp' className='fab fa-wordpress'></Li>);
                                        case 'react': return (<Li title='React' key='react' className='fab fa-react'></Li>);
                                        case 'dom' : return (<Li title='DOM' className="iconify" key='dom' data-icon="file-icons:dom" data-inline="false"></Li>);
                                        case 'axios' : return (<Li title='axios' className="iconify" key='axios' data-icon="bx:bx-transfer-alt" data-inline="false"></Li>);
                                        case 'divi' : return (<Li title='Divi' className="iconify" key='divi' data-icon="emojione-monotone:letter-d" data-inline="false"></Li>);
                                        case 'reactr' : return (<Li title='React Router' className="iconify" key='reactr' data-icon="simple-icons:reactrouter" data-inline="false"></Li>);
                                        case 'styled' : return (<Li title='Styled Components' className="iconify" key='styled' data-icon="simple-icons:styled-components" data-inline="false"></Li>);
                                        case 'rgcal' : return (<Lib title='React Github Calendar' key='rgcal' className='fas fa-code'></Lib>);
                                        case 'recharts' : return (<Lib title='Recharts library' key='recharts' className='fas fa-code'></Lib>);
                                        case 'rtl' : return (<Lib title='React Testing Library' key='rtl' className='fas fa-code'></Lib>);
                                        case 'codepen' : return (<Lib title='Codepen' key='codepen' className='fab fa-codepen'></Lib>);
                                        case 'nasa' : return (<Lib title='Nasa API' key='nasa' className='fas fa-space-shuttle'></Lib>);
                                        case 'g-maps' : return (<Li title='Google Maps API' className="iconify" key='g-maps' data-icon="zmdi:google-maps" data-inline="false"></Li>);
                                        case 'map' : return (<Lib title='Google-Map-React' key='map' className='far fa-map'></Lib>);
                                        case 'iconify' : return (<Lib title='Iconify' className="iconify" key='iconify' data-icon="simple-icons:iconify" data-inline="false"></Lib>);
                                        case 'next' : return (<Lib title='Next.js' className="iconify" key='next-js' data-icon="file-icons:nextjs" data-inline="false"></Lib>);
                                        case 'netlify' : return (<Lib title='Netlify Forms' className="iconify" key='netlify' data-icon="file-icons:netlify" data-inline="false"></Lib>);
                                        default: return null
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
    const Lib = styled.li`
        list-style-type: none;
        font-size: 1.1rem;
        line-height: 2rem;
        color: gainsboro;
    `

export default ProjectCard;