class Framework {
    constructor(name, svgSrc, hex) {
        this._name = name;
        this._svgSrc = svgSrc;
        this._hex = hex;
    }

    get name() {
        return this._name;
    }

    get svgSrc() {
        return this._svgSrc;
    }

    get hex() {
        return this._hex;
    }

    get imageSrc() {
        return `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${this.svgSrc}.svg`;
    }
}

class Frontend extends Framework {
    constructor(name, svgSrc, hex) {
        super(name, svgSrc, hex);
        this._type = "frontend";
    }

    get type() {
        return this._type;
    }
}

class Backend extends Framework {
    constructor(name, svgSrc, hex) {
        super(name, svgSrc, hex);
        this._type = "backend";
    }

    get type() {
        return this._type;
    }
}

class Database extends Framework {
    constructor(name, svgSrc, hex) {
        super(name, svgSrc, hex);
        this._type = "database";
    }

    get type() {
        return this._type;
    }
}

class Styling extends Framework {
    constructor(name, svgSrc, hex) {
        super(name, svgSrc, hex);
        this._type = "styling";
    }

    get type() {
        return this._type;
    }
}

//Databases
let mongoDatabase = new Database('MongoDB', 'mongodb', '#47A248');
let postgreDatabase = new Database('PostgreSQL', 'postgresql', '#336791');
let mysqlDatabase = new Database('MySQL', 'mysql', '#4479A1');
let sqliteDatabase = new Database('SQLite', 'sqlite', '#003B57');

/* Styling Frameworks:
* CSS3
* Bootstrap
* Tailwind CSS
* SCSS */
let bootstrapCSS = new Styling('Bootstrap', 'bootstrap', '#7952B3');
let css3CSS = new Styling('CSS3', 'css3', '#1572B6');
let tailwindCSS = new Styling('Tailwind CSS', 'tailwindcss', '#38B2AC');
let sassCSS = new Styling('SASS', 'sass', '#CC6699');

/* FrontEnd Frameworks:
* React
* Angular
* VueJS
* Flask */
let reactFrontend = new Frontend('React', 'react', '#61DAFB');
let angularFrontend = new Frontend('Angular', 'angular', '#DD0031');
let vueFrontend = new Frontend('Vue.js', 'vue-dot-js', '#4FC08D');
let flaskFrontend = new Frontend('Flask', 'flask', '#a7a1a1');

/* Backend Frameworks:
* NodeJS
* Django
* Spring Boot
* PHP */
let springBackend = new Backend('Spring', 'spring', '#6DB33F');
let phpBackend = new Backend('PHP', 'php', '#777BB4');
let djangoBackend = new Backend('Django', 'django', '#092E20');
let nodeJSBackend = new Backend('Node.js', 'node-dot-js', '#339933');

let frontEndFrameworks = [reactFrontend, angularFrontend, vueFrontend, flaskFrontend];
let backendFrameworks = [springBackend, phpBackend, djangoBackend, nodeJSBackend];
let databases = [mongoDatabase, postgreDatabase, mysqlDatabase, sqliteDatabase];
let stylingFrameworks = [sassCSS, tailwindCSS, bootstrapCSS, css3CSS];

export {frontEndFrameworks, backendFrameworks, databases, stylingFrameworks};