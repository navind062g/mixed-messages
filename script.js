import { appIdeas } from './MessageModel.js';
import { frontEndFrameworks, backendFrameworks, databases, stylingFrameworks} from './FrameworksModel.js';

let recommendBtn = document.getElementById('recommendBtn');
let projectDetailsDiv = document.querySelector('.project-details');

function createHTMLObjectOfAppIdea(appIdea, framework) {
    return `<div class="project-heading item-shadow">
        ${appIdea.name}
    </div>
    <div class="project-quote">
        <q>${appIdea.description}</q>
    </div>
    <div class="project-level">
        <div>
            Difficult Level <span class="level">${appIdea.difficultyLevel}</span>
        </div>
        <div>
            <div class="item-shadow">
                Technology Stack 
            </div>
            <div class="frameworks">
                <div class="framework project-database" style="background-color: ${framework.database.hex}">
                    <img height="64" width="64" src="${framework.database.imageSrc}" >
                    <span>${framework.database.name}</span>
                </div>
                <div class="framework project-frontend" style="background-color: ${framework.frontend.hex}">
                    <img height="64" width="64" src="${framework.frontend.imageSrc}" >
                    <span>${framework.frontend.name}</span>
                </div>
                <div class="framework project-styling" style="background-color: ${framework.styling.hex}">
                    <img height="64" width="64" src="${framework.styling.imageSrc}" >
                    <span>${framework.styling.name}</span>
                </div>
                <div class="framework project-backend" style="background-color: ${framework.backend.hex}">
                    <img height="64" width="64" src="${framework.backend.imageSrc}" >
                    <span>${framework.backend.name}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="example-project">Example: 
        <a href="${appIdea.exampleLink}">${appIdea.exampleProject}</a>
    </div>`;
}

function getRandomNumberBasedOnArray(sizeOfArray) {
    return  Math.floor(Math.random() * sizeOfArray);
}

function getProjectItem(arrayItems) {
    return arrayItems[getRandomNumberBasedOnArray(arrayItems.length)];
}

function getFrameworks() {
    return {
        database: getProjectItem(databases),
        frontend: getProjectItem(frontEndFrameworks),
        backend: getProjectItem(backendFrameworks),
        styling: getProjectItem(stylingFrameworks)
    };
}

recommendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.innerHTML = "Next Idea";

    //Retrieve App Idea
    let appIdea = getProjectItem(appIdeas);

    //Retrieve Frameworks to use
    let frameworksObj = getFrameworks();

    let projectDetailsObj = createHTMLObjectOfAppIdea(appIdea, getFrameworks());
    projectDetailsDiv.innerHTML = projectDetailsObj;
});