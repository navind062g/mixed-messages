import { appIdeas } from './MessageModel.js';

let recommendBtn = document.getElementById('recommendBtn');
let projectDetailsDiv = document.querySelector('.project-details');

function createHTMLObjectOfAppIdea(appIdea) {
    return `<div class="project-heading">${appIdea.name}</div>
    <div class="project-quote">
        <q>${appIdea.description}</q>
    </div>
    <div class="project-level">Difficult Level 
        <span class="level">${appIdea.difficultyLevel}</span>
    </div>
    <div class="example-project">Example: 
        <a href="${appIdea.exampleLink}">${appIdea.exampleProject}</a>
    </div>`;
}

recommendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.innerHTML = "Next Idea";

    let randomProjectNo = Math.floor(Math.random() * 10);
    let appIdea = appIdeas[randomProjectNo];

    let projectDetailsObj = createHTMLObjectOfAppIdea(appIdea);
    projectDetailsDiv.innerHTML = projectDetailsObj;
});