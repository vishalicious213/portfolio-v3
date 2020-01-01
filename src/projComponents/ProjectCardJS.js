import React from 'react';
// import styled from 'styled-components';

// card component --------------------------------------------------
function ProjectCardJS(projectObj) {
    // define new elements
    const container = document.createElement("div");
        const screenshot = document.createElement("div");
            const img = document.createElement("img");
        const workInfo = document.createElement("div");
            const projectName = document.createElement("h3");
            const projectType = document.createElement("p");
            const offsite = document.createElement("div");
                const visit = document.createElement("a");
                    const visitButton = document.createElement("span");
                    const visitText = document.createElement("p");
                const view = document.createElement("a");
                    const viewButton = document.createElement("i");
                    const viewText = document.createElement("p");
            const techBox = document.createElement("div");
                const descriptor = document.createElement("p");
                const tech = document.createElement("ul");
                    const htmlIco = document.createElement("li");
                    const cssIco = document.createElement("li");
                    const lessIco = document.createElement("li");
                    const wpIco = document.createElement("li");
                    const jsIco = document.createElement("li");
                    const domIco = document.createElement("li");
                    const domImg = document.createElement("img");
                    const axiosIco = document.createElement("li");
                    const axiosImg = document.createElement("img");
                    const reactIco = document.createElement("li");

    // setup structure of elements
    container.appendChild(screenshot);
        screenshot.appendChild(img);
    container.appendChild(workInfo);
        workInfo.appendChild(projectName);
        workInfo.appendChild(projectType);
        workInfo.appendChild(offsite);
            offsite.appendChild(visit);
                visit.appendChild(visitButton);
                visit.appendChild(visitText);
            if (projectObj.view != "#") {
                offsite.appendChild(view);
                    view.appendChild(viewButton);
                    view.appendChild(viewText);
            }
        workInfo.appendChild(techBox);
            techBox.appendChild(descriptor);
            techBox.appendChild(tech);

    // set class names
    container.classList.add("container");
        screenshot.classList.add("screenshot");
        workInfo.classList.add("workInfo");
            projectName.classList.add("title");
            projectType.classList.add("type");
            offsite.classList.add("offsite");
                visitText.classList.add("visit");
                visitButton.classList.add("chevron");
                viewText.classList.add("view");
                viewButton.classList.add("chevron", "git", "fab", "fa-github");
            techBox.classList.add("techBox");
                tech.classList.add("tech");
                    htmlIco.classList.add("fab", "fa-html5");
                    cssIco.classList.add("fab", "fa-css3-alt");
                    lessIco.classList.add("fab", "fa-less");
                    wpIco.classList.add("fab", "fa-wordpress");
                    jsIco.classList.add("fab", "fa-js-square");
                    domImg.classList.add("nounImg");
                    axiosImg.classList.add("axiosImg");
                    reactIco.classList.add("fab", "fa-react");

    // set text content
    img.src = projectObj.img;
    projectName.textContent = projectObj.name;
    projectType.textContent = projectObj.type;
    
    visit.style.display = "flex";
    visit.style.alignItems = "baseline";
    visit.href = projectObj.visit;
    visitButton.textContent = ">";
    visitText.textContent = " VISIT SITE";
    
    view.style.display = "flex";
    view.style.alignItems = "baseline";
    view.href = projectObj.view;
    viewText.textContent = " VIEW CODE";
    
    descriptor.textContent = projectObj.desc;
    tech.style.display = "flex";
    tech.style.flexDirection = "column";

    domImg.src = "img/noun_DOM_13029.svg";
    domImg.style.verticalAlign = "middle";
    axiosImg.src = "img/axios Page 1.svg";
    axiosImg.style.verticalAlign = "middle";

    htmlIco.title = "HTML5";
    cssIco.title = "CSS3";
    lessIco.title = "LESS";
    wpIco.title = "Wordpress";
    jsIco.title = "JavaScript";
    domImg.title = "DOM";
    axiosImg.title = "axios";
    reactIco.title = "React";

    // tech stack icons

    const stackArr = projectObj.stack;

    if (stackArr.includes("html")) {
        // console.log(`${projectObj.name} includes html`);
        tech.appendChild(htmlIco);
    };
    if (stackArr.includes("css")) {
        // console.log(`${projectObj.name} includes css`);
        tech.appendChild(cssIco);
    };
    if (stackArr.includes("less")) {
        // console.log(`${projectObj.name} includes less`);
        tech.appendChild(lessIco);
    };
    if (stackArr.includes("wp")) {
        // console.log(`${projectObj.name} includes wp`);
        tech.appendChild(wpIco);
    };
    if (stackArr.includes("js")) {
        // console.log(`${projectObj.name} includes js`);
        tech.appendChild(jsIco);
    };
    if (stackArr.includes("dom")) {
        // console.log(`${projectObj.name} includes dom`);
        tech.appendChild(domIco);
        domIco.appendChild(domImg);
    };
    if (stackArr.includes("axios")) {
        // console.log(`${projectObj.name} includes axios`);
        tech.appendChild(axiosIco);
        axiosIco.appendChild(axiosImg);
    };
    if (stackArr.includes("react")) {
        // console.log(`${projectObj.name} includes react`);
        tech.appendChild(reactIco);
    };

    return container;
}

export default ProjectCardJS;