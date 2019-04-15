
let projects = [
    {
        name: 'Re:invent',
        state: true,
        technologies: ['./assets/images/materialize-icon.png', './assets/images/react-icon.png', './assets/images/node-icon.png', './assets/images/express-icon.png', './assets/images/mongo-icon.png', './assets/images/passport-icon.png', './assets/images/redux-icon.png'],
        url: 'http://reinvent-io.herokuapp.com/',
        card_image_link: 'assets/images/reinvent_cap.PNG'
    },
    {
        name: 'Gigify',
        state: false,
        technologies: ['./assets/images/bulma-icon.png', './assets/images/html-icon.png', './assets/images/jquery-icon.png', './assets/images/js-icon.png', './assets/images/firebase-icon.png'],
        url: 'https://tzlomke.github.io/gigify/',
        card_image_link: 'assets/images/Gigify.png',
    },
    {
        name: 'C.J. Frei Art Portfolio',
        state: false,
        technologies: ['./assets/images/materialize-icon.png', './assets/images/html-icon.png', './assets/images/jquery-icon.png', './assets/images/node-icon.png', './assets/images/sequelize-icon.png', './assets/images/express-icon.png', './assets/images/firebase-icon.png', './assets/images/mysql-icon.png'],
        url: 'https://thawing-ravine-93395.herokuapp.com/',
        card_image_link: 'assets/images/art_portfolio.PNG'
    },
    {
        name: 'FRND-FNDR',
        state: false,
        technologies: ['./assets/images/css-icon.png', './assets/images/html-icon.png', './assets/images/js-icon.png', './assets/images/node-icon.png', './assets/images/express-icon.png'],
        url: 'https://intense-inlet-81081.herokuapp.com/',
        card_image_link: 'assets/images/frnd-fndr.PNG'
    },
    {
        name: 'Bamazon',
        state: false,
        technologies: ['./assets/images/node-icon.png', './assets/images/mysql-icon.png'],
        url: 'https://github.com/BrantKeener/bamazon/blob/master/README.md',
        card_image_link: 'assets/images/bamazon.PNG'
    },
    {
        name: 'Burger Sequelized',
        state: false,
        technologies: ['./assets/images/css-icon.png', './assets/images/handlebars-icon.png', './assets/images/js-icon.png', './assets/images/mysql-icon.png', './assets/images/express-icon.png', './assets/images/sequelize-icon.png'],
        url: 'https://damp-escarpment-30359.herokuapp.com/',
        card_image_link: 'assets/images/burger.PNG'
    }
];

let portfolioPosition = 0;
let projectNumber = 0;

// Ensure that the document is loaded
document.addEventListener('DOMContentLoaded', function() {

    const flipTechCards = ()=> {
        const card = document.getElementsByClassName('flip-card-inner');
        const cards = [...card];
        cards.forEach((card) => {
            card.classList.toggle('flip-to-back');
        });
    };

    const techDeckBuild = () => {
        const deckLane = document.getElementById('tech-icons');
        const currentProj = projects[projectNumber];
        currentProj.technologies.forEach((tech, index) => {
            console.log(tech);
            const flipCard = document.createElement('div');
            const flipCardInner = document.createElement('div');
            const flipCardFront = document.createElement('div');
            const flipCardBack = document.createElement('div');
            const imgFront = document.createElement('img');
            const imgBack = document.createElement('img');
            flipCard.classList.add('flip-card');
            flipCardInner.classList.add('flip-card-inner');
            flipCardFront.classList.add('flip-card-front')
            flipCardBack.classList.add('flip-card-back')
            imgFront.alt = `Tech Back ${index}`
            imgBack.alt = `Tech Back ${index}`
            imgFront.src = tech;
            imgBack.src = './assets/images/playing_card.png';
            flipCardFront.appendChild(imgFront);
            flipCardBack.appendChild(imgBack);
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);
            deckLane.appendChild(flipCard);
        });
        setTimeout(flipTechCards, 1500);
    };

    const techDeckClear = () => {
        const techArea = document.getElementById('tech-icons');
        while(techArea.firstChild) {
            techArea.removeChild(techArea.firstChild);
        };
    }

    (cardDeckBuild = () => {
        const cardBin = document.getElementById('card_bin');
        projects.forEach((project, index) => {
            const card = document.createElement('a');
            const img = document.createElement('img');
            img.src = project.card_image_link;
            img.alt = project.name;
            img.className = 'cards';
            if(index === 0 || index === 5) {
                card.setAttribute('data-active', project.state);
            };
            card.href = project.url;
            card.className = 'project_card';
            card.id = `project${index}`;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.style.left ='0px';
            card.append(img);
            cardBin.appendChild(card);
        });
        techDeckBuild();
    })();

    const moveCards = (direction) => {
        clearTimeout();
        // The bookend projects have a data-active state. 
        // If this state is true on either of the end cards, it prevents
        // Movement in that direction.
        const startProject = document.getElementById('project0');
        const startProjActive = startProject.getAttribute('data-active');
        const endProject = document.getElementById('project5');
        const endProjActive = endProject.getAttribute('data-active');
        const projectCards = document.getElementsByClassName('project_card');
        // Moving to the right sets the left hand bookend data-active to false
        if(direction === 'right' && endProjActive !== 'true') {
            techDeckClear();
            startProject.setAttribute('data-active', false);
            portfolioPosition -= 650;
            projectNumber++;
            let positioner = `${portfolioPosition.toString()}px`;
            for (let card of projectCards) {
                card.style.left = positioner;
            };
            techDeckBuild();
        // Moving to the left sets the right hand bookend data-active to false
        } else if(direction === 'left' && startProjActive !== 'true') {
            techDeckClear();
            endProject.setAttribute('data-active', false);
            portfolioPosition += 650;
            projectNumber--;
            let positioner = `${portfolioPosition.toString()}px`;
            for (let card of projectCards) {
                card.style.left = positioner;
            };
            techDeckBuild();
        };
        // This evaluation will set either end data-active as true if the parameters are met.
        if(portfolioPosition === 0) {
            startProject.setAttribute('data-active', true);
        };
        if(portfolioPosition === -3250) {
            endProject.setAttribute('data-active', true);
        };
    };

    // Event delegator for mouse clicks
    document.addEventListener('click', event => {
        let listen = '';
        if(event.target.className.baseVal) {
            listen = event.target.className.baseVal;
        } else {
            listen = event.target.id;
        };
        console.log(listen);
        switch(listen) {
            case 'move-right':
            case 'right-arrow':
            moveCards('right');
            break;
            case 'move-left':
            case 'left-arrow':
            moveCards('left');
            break;
        };
    });
});