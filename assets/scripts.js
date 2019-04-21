let projects = [{
        name: 'Gigify',
        state: false,
        technologies: ['./assets/images/bulma-icon.png', './assets/images/html-icon.png', './assets/images/jquery-icon.png', './assets/images/js-icon.png', './assets/images/firebase-icon.png'],
        url: 'https://tzlomke.github.io/gigify/',
        card_image_link: 'assets/images/gigify-cap.PNG',
        description: 'Gigify seeks to aid users in finding touring dates for their favorite bands by using Spotify\'s "affinity data". "Affinity data" is then given to Bandsintown to find live shows.'
    },
    {
        name: 'Re:invent',
        state: true,
        technologies: ['./assets/images/materialize-icon.png', './assets/images/react-icon.png', './assets/images/node-icon.png', './assets/images/express-icon.png', './assets/images/mongo-icon.png', './assets/images/passport-icon.png', './assets/images/redux-icon.png'],
        url: 'http://reinvent-io.herokuapp.com/',
        card_image_link: 'assets/images/reinvent-cap.PNG',
        description: 'Re:invent seeks to bring ideas from the ground up by giving an open platform for idea discussion and maturation. Not only does it give employees a voice, but it gives employers the tools with which to hear that voice.'
    },
    {
        name: 'C.J. Frei Art Portfolio',
        state: false,
        technologies: ['./assets/images/materialize-icon.png', './assets/images/html-icon.png', './assets/images/jquery-icon.png', './assets/images/node-icon.png', './assets/images/sequelize-icon.png', './assets/images/express-icon.png', './assets/images/firebase-icon.png', './assets/images/mysql-icon.png'],
        url: 'https://thawing-ravine-93395.herokuapp.com/',
        card_image_link: 'assets/images/art-port-cap.PNG',
        description: 'Visual artist C.J. Frei required a streamlined protfolio for his digital art. The Art Portfolio provided him just that.'
    },
    {
        name: 'FRND-FNDR',
        state: false,
        technologies: ['./assets/images/css-icon.png', './assets/images/html-icon.png', './assets/images/js-icon.png', './assets/images/node-icon.png', './assets/images/express-icon.png'],
        url: 'https://intense-inlet-81081.herokuapp.com/',
        card_image_link: 'assets/images/frnd-fndr-cap.PNG',
        description: 'The modern life can make it difficult to find friends. Frnd-Fndr is here to help through its matching survey. Although, admittedly, non of these friends actually exist.'
    },
    {
        name: 'Bamazon',
        state: false,
        technologies: ['./assets/images/node-icon.png', './assets/images/mysql-icon.png'],
        url: 'https://github.com/BrantKeener/bamazon/blob/master/README.md',
        card_image_link: 'assets/images/bamazon-cap.PNG',
        description: 'There aren\'t enough CLI marketplaces in the world. Bamazon is here to meet all your CLI marketplace needs.'
    },
    {
        name: 'Burger Sequelized',
        state: false,
        technologies: ['./assets/images/css-icon.png', './assets/images/handlebars-icon.png', './assets/images/js-icon.png', './assets/images/mysql-icon.png', './assets/images/express-icon.png', './assets/images/sequelize-icon.png'],
        url: 'https://damp-escarpment-30359.herokuapp.com/',
        card_image_link: 'assets/images/burger-seq-cap.PNG',
        description: 'This burger app works to take away those virtual hunger pangs, enter the name of a burger, and virtually eat it. See which burgers have been eaten by you or others.'
    }
];

let portfolioPosition = 0;
let projectNumber = 0;

// Ensure that the document is loaded
document.addEventListener('DOMContentLoaded', function () {

    const flipTechCards = () => {
        const card = document.getElementsByClassName('flip-card-inner');
        const cards = [...card];
        cards.forEach((card) => {
            card.classList.add('flip-to-back');
        });
    };

    const descCardBuild = (proj) => {
        const descDiv = document.getElementById('div__desc');
        while (descDiv.firstChild) {
            descDiv.removeChild(descDiv.firstChild);
        }
        const descPara = document.createElement('p');
        descPara.classList.add('white-text');
        descPara.textContent = proj.description;
        descDiv.appendChild(descPara);
    };

    const techDeckBuild = () => {
        const deckLane = document.getElementById('icons__tech');
        const currentProj = projects[projectNumber];
        currentProj.technologies.forEach((tech, index) => {
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
            imgFront.classList.add('flip-it');
            imgBack.classList.add('flip-it');
            flipCardFront.appendChild(imgFront);
            flipCardBack.appendChild(imgBack);
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);
            deckLane.appendChild(flipCard);
        });
        descCardBuild(currentProj);
        setTimeout(flipTechCards, 900);
    };

    const techDeckClear = () => {
        const techArea = document.getElementById('icons__tech');
        while (techArea.firstChild) {
            techArea.removeChild(techArea.firstChild);
        };
    };

    (cardDeckBuild = () => {
        const cardBin = document.getElementById('card__work');
        projects.forEach((project, index) => {
            const card = document.createElement('a');
            const img = document.createElement('img');
            img.src = project.card_image_link;
            img.alt = project.name;
            img.className = 'cards';
            if (index === 0 || index === 5) {
                card.setAttribute('data-active', project.state);
            };
            card.href = project.url;
            card.className = 'project_card';
            card.id = `project${index}`;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.style.left = '0px';
            card.append(img);
            cardBin.appendChild(card);
        });
        techDeckBuild();
    })();

    const moveCards = (direction) => {
        // The bookend projects have a data-active state. 
        // If this state is true on either of the end cards, it prevents
        // Movement in that direction.
        const img = document.getElementsByClassName('cards');
        const imgWidth = img[0].width;
        const stopWidth = imgWidth * (-5);
        const startProject = document.getElementById('project0');
        const startProjActive = startProject.getAttribute('data-active');
        const endProject = document.getElementById('project5');
        const endProjActive = endProject.getAttribute('data-active');
        const projectCards = document.getElementsByClassName('project_card');
        // Moving to the right sets the left hand bookend data-active to false
        if (direction === 'right' && endProjActive !== 'true') {
            techDeckClear();
            startProject.setAttribute('data-active', false);
            portfolioPosition -= imgWidth;
            projectNumber++;
            let positioner = `${portfolioPosition.toString()}px`;
            for (let card of projectCards) {
                card.style.left = positioner;
            };
            techDeckBuild();
            // Moving to the left sets the right hand bookend data-active to false
        } else if (direction === 'left' && startProjActive !== 'true') {
            techDeckClear();
            endProject.setAttribute('data-active', false);
            portfolioPosition += imgWidth;
            projectNumber--;
            let positioner = `${portfolioPosition.toString()}px`;
            for (let card of projectCards) {
                card.style.left = positioner;
            };
            techDeckBuild();
        };
        // This evaluation will set either end data-active as true if the parameters are met.
        if (portfolioPosition === 0) {
            startProject.setAttribute('data-active', true);
        };
        if (portfolioPosition === stopWidth) {
            endProject.setAttribute('data-active', true);
        };
    };

    // Event delegator for mouse clicks
    document.addEventListener('click', event => {
        let listen = '';
        if (event.target.className.baseVal) {
            listen = event.target.className.baseVal;
        } else {
            listen = event.target.id;
        };
        switch (listen) {
            case 'moveRight':
            case 'right-arrow':
                moveCards('right');
                break;
            case 'moveLeft':
            case 'left-arrow':
                moveCards('left');
                break;
        };
    });

    // Event handler for mouseenter
    document.getElementById('card__work').addEventListener('mouseenter', () => {
        let descDiv = document.getElementById('div__desc');
        descDiv.style.opacity = 1;
    });

    // Event handler for mouseleave
    document.getElementById('card__work').addEventListener('mouseleave', () => {
        let descDiv = document.getElementById('div__desc');
        descDiv.style.opacity = 0;
    });

    // Event handler for mouseenter
    document.getElementById('div__desc').addEventListener('mouseenter', () => {
        let descDiv = document.getElementById('div__desc');
        descDiv.style.opacity = 1;
    });

    // Event handler for mouseleave. This one allow div__desc to disappear if the user leaves div__desc from the side.
    document.getElementById('div__desc').addEventListener('mouseleave', () => {
        let descDiv = document.getElementById('div__desc');
        descDiv.style.opacity = 0;
    });

    // Scroll event listener
    document.addEventListener('scroll', () => {
        const yOffset = window.pageYOffset;
        const height = window.innerHeight;
        const about = document.getElementById('about').offsetTop;
        const portfolio = document.getElementById('work').offsetTop;
        const contact = document.getElementById('contact').offsetTop;
    });

    document.getElementById('card__work').addEventListener('scroll', () => {
        const xOffset = document.getElementById('card__work').offsetLeft;
        const cardWidth = document.getElementById('card__work').offsetWidth;
        const xPosition = document.getElementsByClassName('cards')[0].x;
        if (window.innerWidth <= 1150) {
            document.getElementById('div__desc').style.opacity = 1;
            if (xPosition <= (xOffset) && xPosition >= (xOffset - (cardWidth * .9))) {
                projectNumber = 0;
                techDeckClear();
                techDeckBuild();
            } else if (xOffset - (cardWidth * .9) && xPosition >= (xOffset - (cardWidth * 1.8))) {
                projectNumber = 1;
                techDeckClear();
                techDeckBuild();
            } else if (xOffset - (cardWidth * 1.8) && xPosition >= (xOffset - (cardWidth * 3.1))) {
                projectNumber = 2;
                techDeckClear();
                techDeckBuild();
            } else if (xOffset - (cardWidth * 3.1) && xPosition >= (xOffset - (cardWidth * 4.2))) {
                projectNumber = 3;
                techDeckClear();
                techDeckBuild();
            } else if (xOffset - (cardWidth * 4.2) && xPosition >= (xOffset - (cardWidth * 5.3))) {
                projectNumber = 4;
                techDeckClear();
                techDeckBuild();
            } else if (xOffset - (cardWidth * 5.3) && xPosition >= (xOffset - (cardWidth * 6))) {
                projectNumber = 5;
                techDeckClear();
                techDeckBuild();
            };
        }
    });
});