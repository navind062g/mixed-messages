import {appIdeas} from './MessageModel';

let recommendBtn = document.getElementById('recommendBtn');

recommendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.innerHTML = "Next Idea";

    let randomProjectNo = Math.floor(Math.random() * 10);
    let appIdea = appIdeas[randomProjectNo];
});