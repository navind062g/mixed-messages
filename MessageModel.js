class MessageModel {
/*     let _name;
    let _description;
    let _difficultyLevelTier;
    let _exampleProject;
    let _exampleProjectLink; */

    constructor(name, description, difficultyLevel, exampleProject, exampleLink) {
        this._name = name;
        this._description= description;
        this._difficultyLevel = difficultyLevel;
        this._exampleProject = exampleProject;
        this._exampleLink = exampleLink;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get difficultyLevel() {
        return this._difficultyLevel;
    }

    get exampleProject() {
        return this._exampleProject;
    }

    get exampleLink() {
        return this._exampleLink;
    }
}

//Ten App Ideas
const christmasLightsApp = new MessageModel(
    'Christmas Lights',
    "The ChristmasLights application relies on your development talents to create a mesmerizing light display. Your task is to draw seven colored circles in a row and based on a timer change the intensity of each circle. When a circle is brightened it's predecessor returns to its normal intensity.", 
    'Beginner', 
    'Christmas Lights Using HTML, CSS and JS', 
    'https://codepen.io/irfanezani_/pen/mdeLpKo'
);

const notesApp = new MessageModel(
    'Notes App',
    "Create and store your notes for later purpose!", 
    'Beginner', 
    'Markdown Notes built with React', 
    'https://codesandbox.io/s/github/email2vimalraj/notes-app'
);

const podomoroClockApp = new MessageModel(
    'Pomodoro Clock',
    "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.<br> The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks - 5 minutes", 
    'Beginner', 
    'Clock using React and SCSS', 
    'https://codepen.io/freeCodeCamp/pen/XpKrrW'
);

//04 Quiz App
const quizApp = new MessageModel(
    'Quiz App',
    "Practice and test your knowledge by answering questions in a quiz application.", 
    'Beginner', 
    'Progressive web app (PWA) built with React using OpenTDB API', 
    'https://github.com/SafdarJamal/quiz-app'
);

//05 Weather App
const weatherApp = new MessageModel(
    'Weather App',
    "A weather application to get the temperature, weather condition and whether it is day or night of a particular city using accuweather, A free weather api.", 
    'Beginner', 
    'Weather App by [George Martsoukos]', 
    'https://codepen.io/tutsplus/pen/gObLaEP'
);

//06 Card Memory Game
const cardMemoryApp = new MessageModel(
    'Card Memory Game',
    "Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.", 
    'Intermediate', 
    'Flip - card memory game', 
    'https://codepen.io/zerospree/full/bNWbvW'
);

//07 To Do App
const toDoApp = new MessageModel(
    'To-Do App',
    "The classic To-Do application where a user can write down all the things he wants to accomplish.", 
    'Intermediate', 
    'Todo App built with React', 
    'http://todomvc.com/examples/react/#/'
);

//08 Flash Cards
const flashCardsApp = new MessageModel(
    'FlashCards',
    "FlashCards are a time tested technique used by students to review and test their knowledge on a particular subject.", 
    'Intermediate', 
    'Vintage Multiplication Flash Cards', 
    'https://codepen.io/NinoLopezMe/pen/vJBMpZ'
);

//09 Movie Database APP
const movieDatabaseApp = new MessageModel(
    'Movie Database App',
    "Find your next movie or create your watchlist with this App.<br> It include reviews, rating, actors and anything you need to know about the movie.", 
    'Advanced', 
    'Movie Database App w/ React by Oliver Gomes', 
    'https://github.com/pylnata/movie-browser-app'
);

//10 Survey App
const surveryApp = new MessageModel(
    'Survey App',
    "The Survey app gives you the opportunity to learn by developing a full-featured app that will you can add to your toolbox.<br> It provides the ability to define a survey, allow users to respond within a predefined timeframe, and tabulate and present results.", 
    'Advanced', 
    'React Survey App', 
    'https://github.com/chamatt/survey-web-app'
);


//Add the APP Ideas to an Array
let appIdeas = [cardMemoryApp, christmasLightsApp, flashCardsApp, movieDatabaseApp, notesApp, podomoroClockApp, quizApp, surveryApp, toDoApp, weatherApp];

//export the array for script class
export { appIdeas };